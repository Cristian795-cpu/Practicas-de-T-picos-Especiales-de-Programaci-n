// Objetivo: Demostrar que TypeScript usa tipado estructural

// 1. Crea una interfaz "Persona" con nombre (string) y edad (number)
// 2. Crea un objeto "empleado" que tenga nombre, edad Y ademas salario (number)
// 3. Asigna "empleado" a una variable de tipo "Persona" SIN usar 'as'
// 4. Imprime ambas variables en consola
// 5. Explica (en comentario) POR QUÉ TypeScript permite esto

interface Persona {
    nombre: String,
    edad: number
}

const empleado= {
    nombre: "Juan",
    edad: 45,
    salario: 30
}

const persona1: Persona = empleado;

console.log(empleado);
console.log(persona1);

/*
    Explicación:
    Al usar una interfaz se tiene que cumplir algunas reglas
    ya que funciona como un contrato, en este caso los objetos 
    que se crean de tipo Persona siempre tienen que tener los
    "Atributos" que se declaren dentro de la inferfaz, aunque 
    en este caso al igual que una super clase en una clase 
    hijo, las interfaces permiten crear objetos, añadiendo otros
    tipos de datos propias del objeto. Las interfaces son sistemas
    de tipo estructural permitiendo mas control del codigo y 
    facilidad.

*/