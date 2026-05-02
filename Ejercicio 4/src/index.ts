/*
    Ejercicio 4:
    Cree una funcion generica llamada comparar<T, U> que 
    tome dos argumentos T y U y devuelva true si ambos 
    elementos son iguales o false en caso contrario.La
    funcion debe ser capaz de comparar diferentes tipos 
    de datos.
*/

function comparar<T, U>(valor1: T, valor2: U): boolean {
     return typeof valor1 === typeof valor2 && valor1 == valor2;
}

const resultado1 = comparar(10, 10);
console.log(resultado1);

const resultado2 = comparar('Hola', 'Mundo');
console.log(resultado2);

const resultado3 = comparar({nombre: 'Juan'}, {nombre: 'Juan'});
console.log(resultado3);