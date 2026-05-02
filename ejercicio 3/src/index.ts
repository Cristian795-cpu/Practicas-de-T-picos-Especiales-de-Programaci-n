/*
    Ejercicio Fibonacci:
    implemente una funcion que devuelva el siguiente numero
    de la sucecion de fibonacci cada vez que sea llamada
    utilizando la forma mas basica usando closure y generador
*/

//CON CLOSURES
/* 
type Counter = ()=> number;

function fibonacci(): Counter {
    let valor: number = 0;
    let nuevo: number =1;
    let devolver: number = 0;
    return ()=> {
        devolver = valor + nuevo;
        valor = nuevo;
        nuevo= devolver;
        return devolver;
    }
}

let valor1: Counter = fibonacci();

console.log(valor1());
console.log(valor1());
console.log(valor1());
console.log(valor1());
console.log(valor1());
console.log(valor1());
*/

//--------------------------------------------------------------

//CON GENERADORES
/*
function* fibonacci(): IterableIterator<number> {
    let valor: number = 0;
    let nuevo: number =1;
    let devolver: number = 0;
    while(true){
        yield devolver = valor + nuevo;
        valor = nuevo;
        nuevo= devolver;
    }
}

let valor1: IterableIterator<number> = fibonacci();

console.log(valor1.next().value);
console.log(valor1.next().value);
console.log(valor1.next().value);
console.log(valor1.next().value);
console.log(valor1.next().value);
console.log(valor1.next().value);
*/
