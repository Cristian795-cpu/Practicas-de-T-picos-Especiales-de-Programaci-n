import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import {User} from './user.js';

const app = express();
const PORT = 3005;
dotenv.config();

const connectDB = ()=> {
    const {
        MONGO_USERNAME,
        MONGO_PASSWORD,
        MONGO_DB,
    } = process.env;

    const url= `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.dbpjvav.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority&appName=Cluster0`;

    mongoose.connect(url).then(function() {
        console.log("Conectado a la BD de mongo...");
    }).catch(function(err) {
        console.log(err);
    });
}

app.use(cors({origin: '*'}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res)=> {
    console.log("Mi primer endpoint");
    res.status(200).send("Hola mundo mi primera api");
});

app.post('/', async(req, res)=> {
    try {
        let data = req.body;
        let newUser= new User(data);

        await newUser.save();
        res.status(200).send({
            success: true,
            message: "Se registro el usuario en la DB",
            outcome: []
        })

    }catch(err) {
        res.status(400).send({
            success: true,
            message: "Error al intentar crear el usuario, intente nuevamente",
            outcome: []
        })
    }
});

app.get('/usuarios', async(req, res)=> {
    try {
        let usuarios= await User.find().exec();
        res.status(200).send({
            success: true,
            message: "se encontraron los usuarios",
            outcome: [usuarios]
        })
    }catch(err) {
        res.status(400).send({
            success: true,
            message: "Error al intentar obtener usuarios",
            outcome: []
        })
    }
});

app.listen(PORT, ()=> {
    connectDB();
    console.log(`Api corriendo en el puerto: http://localhost:${PORT}`);
});