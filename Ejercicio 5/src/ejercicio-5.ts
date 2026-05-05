/*
    Crea una funcion que tome un arreglo de objetos donde
    cada objeto representa a una persona y tiene una 
    propiedad fechaNacimiento (en formato Date)

    La funcion debe calcular la edad de cada persona y retornar
    un arreglo de objetos que contenga el nombre de la persona
    y su edad
 */


// ASINCRONIA CON COLLBACK
/*
interface Persona {
    nombre: string;
    fechaNacimiento: Date;
}

interface PersonaConEdad {
    nombre: string;
    edad: number;
}

function calcularEdad(usuario: Persona [], callback: (data: PersonaConEdad[])=> void) {

    const actual: Date = new Date();
     
    const nuevaLista = usuario.map(nodo => {
        nodo.fechaNacimiento.setFullYear(actual.getFullYear() - nodo.fechaNacimiento.getFullYear());

        return {
            nombre: nodo.nombre,
            edad: nodo.fechaNacimiento.getFullYear()
        }
    });

    callback(nuevaLista);
}

const listaPersonas1 = [
    {
        nombre: 'persona1',
        fechaNacimiento: new Date(1977, 10, 10)
    },

    {
        nombre: 'persona2',
        fechaNacimiento: new Date(2008, 5, 29)
    },

    {
        nombre: 'persona3',
        fechaNacimiento: new Date(2013, 8, 23)
    },

    {
        nombre: 'persona4',
        fechaNacimiento: new Date(2000, 1, 19)
    },

    {
        nombre: 'persona5',
        fechaNacimiento: new Date(2005, 12, 5)
    },
];

let actual= new Date()

calcularEdad(listaPersonas1, (data)=> {
    console.log("lista con edades: ", data);
});
*/

//ASINCRONIA CON PROMESAS
/*
interface Persona {
    nombre: string;
    fechaNacimiento: Date;
}

interface PersonaConEdad {
    nombre: string;
    edad: number;
}

function calcularEdad(lista: Persona[]): Promise<PersonaConEdad[]> {
    const actual: Date = new Date();

    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            if(lista != null) {
                const nuevaLista = lista.map(nodo => {
                nodo.fechaNacimiento.setFullYear(actual.getFullYear() - nodo.fechaNacimiento.getFullYear());

                    return {
                        nombre: nodo.nombre,
                        edad: nodo.fechaNacimiento.getFullYear()
                    }
                });

                resolve(nuevaLista);
            }else{
                reject(null);
            }
            
        }, 2000);
    });
}

const listaPersonas1: Persona[] = [
];

calcularEdad(listaPersonas1)
    .then((data)=> {
        console.log('Edad de la persona: ', data);
    })
    .catch((error)=> {
        console.error('Error: ', error.message);
    })
    .finally(()=> {
        console.log("termino el proceso");
    });
*/

//ASINCRONIA CON ASYNC AWAIT
interface Persona {
    nombre: string;
    fechaNacimiento: Date;
}

interface PersonaConEdad {
    nombre: string;
    edad: number;
}

async function calcularEdad(lista: Persona[]): Promise<PersonaConEdad[]> {
    try {
        await new Promise(resolve=> setTimeout(resolve, 2000));

        const actual: Date = new Date();
        const nuevaLista = lista.map(nodo => {
            const edad = actual.getFullYear() - nodo.fechaNacimiento.getFullYear();
            return {
                nombre: nodo.nombre,
                edad: edad
            };
        });

        return nuevaLista;

    } catch (error) {
        console.error("Error: ", error);
        return [];
    }
}

async function main(): Promise<void> {

    const listaPersonas1 = [
        {
            nombre: 'persona1',
            fechaNacimiento: new Date(1977, 10, 10)
        }
    ];

    const resultado = await calcularEdad(listaPersonas1);
    console.log("edades: ", resultado);
}

main();