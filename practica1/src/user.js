import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    userName: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true,
        enum: ['ADMIN', 'MANAGER', 'EMPLEADO']
    },
});

const User= mongoose.model('User', UserSchema);
export {User};