 
/*
    actividad 1:
    Tienen un arreglo de objetos que representan productos.
    Cada objeto tiene las siguientes propiedades: nombre, precio y categoria.

    Objetivo: 
    Filtrar: los productos que pertenecen a la categoría Ropa.
    Trasformar: el precio de cada producto filtrado en un 10%
    Reducir: Calcular el precio total de los productos filtrados y transformados.
*/
/*
enum Categoria {
    Deporte = "Deporte",
    Hogar = "Hogar",
    Ropa = "Ropa",
    Eletronica = "Eletronica"
}

interface Producto {
    nombre: String;
    precio: number;
    categoria: Categoria
}

const listaProductos = [
    {
        nombre: "pelota",
        precio: 20.2,
        categoria: Categoria.Deporte
    },

    {
        nombre: "cama",
        precio: 1050,
        categoria: Categoria.Hogar
    },

    {
        nombre: "camisa",
        precio: 15.5,
        categoria: Categoria.Ropa
    },

    {
        nombre: "pantalon",
        precio: 20.9,
        categoria: Categoria.Ropa
    },
    
    {
        nombre: "laptop",
        precio: 1000,
        categoria: Categoria.Eletronica
    },

    {
        nombre: "gorra",
        precio: 10,
        categoria: Categoria.Ropa
    },

    {
        nombre: "patineta",
        precio: 50.98,
        categoria: Categoria.Deporte
    },
]

const filtrar = listaProductos.filter(nodo => nodo.categoria === Categoria.Ropa);
console.log(filtrar);

const transformar = filtrar.map(nodo => {
    nodo. precio += 0.10;
    return nodo;
});
console.log(transformar);

const reducir = transformar.reduce((acc, index) => acc + index.precio, 0)
console.log("Valor total: ", reducir);
*/

//-------------------------------------------------------------------------------

/*
    actividad 2:
    Tienen una tienda en linea que venden productos con diferentes atributos.
    Cada producto se representa como una tupla con la siguiente estructura:

    type Producto = [string, number, 'en stock'| agotado];

    donde:
    string: nombre del precio
    number: precio del producto
    'en stock'| 'agotado': indica si el producto esta en stock o agotado

    Objetivo:
    Crea un arreglo de 5 productos: define un arrglo que contenga almenos 
    5 productos diferentes
    filtrar: los productos que esten en el stock
    transformar: crear un nuevo arreglo donde cada elemento sea una cadena de
    texto que contemple el nombre del producto y su precio con formato de moneda
    ordenar: el nuevo arreglo de forma ascendente
*/
/*
type Producto = [string, number, 'en Stock' | "agotado"];

let producto1: Producto = ['computadora', 1000.99, 'en Stock'];
let producto2: Producto = ['camisa', 15.29, 'agotado'];
let producto3: Producto = ['mesa', 800.99, 'en Stock'];
let producto4: Producto = ['automovil', 200000.99, 'en Stock'];
let producto5: Producto = ['maquillaje', 50.02, 'agotado'];

const listaProducto = [producto1, producto2, producto3, producto4, producto5];

const filtrar = listaProducto.filter(nodo => nodo[2] === "en Stock");
console.log(filtrar);

const transformar = listaProducto.map(nodo => {
    return {
        nombre: nodo[0],
        precio: nodo[1].toString() + "USD",
        estado: nodo[2]
    }
});
console.log(transformar);

const ordenAscendente = listaProducto.sort((a, b)=> (a[1] < b[1]? -1: 1));
console.log(ordenAscendente);
*/
//-------------------------------------------------------------------------------

/*
    Actividad 3:
    Estan desarrollando una aplicacion para una cafeteria.
    Los clientes pueden pedir diferentes tipos de café, cada uno con un tamaño 
    especifico.

    Objetivo: 
    Crea un enum TamañoCafe: Define un enum con los posibles tamaños de café
    (pequeño, mediano y grande)

    Crear un tipo Cafe: define una interfaz café que inlcuya las propiedades tipo 
    string, tamaño (TipoCafe) y precio(number)

    crea un arreglo de cafés: define un arreglo de objetos café con combinaciones de 
    tipos, tamaños y precios

    Filtrar los cafes de tamaño mediano

    transformar: crea un nuevo arreglo que tenga el nombre del cafe y su precio con
    formato de moneda
*/

/*
enum TipoCafe {
    PEQUEÑO = 'PEQUEÑO',
    MEDIANO = 'MEDIANO',
    GRANDE = 'GRANDE'
}

interface Cafe {
    nombre: string;
    tipoCafe: TipoCafe;
    precio: number;
}

const listaCafes = [
    {
        nombre: "Espresso",
        TipoCafe: TipoCafe.PEQUEÑO,
        precio: 10.00
    },

    {
        nombre: "Americano",
        TipoCafe: TipoCafe.PEQUEÑO,
        precio: 14.50
    },

    {
        nombre: "Cappuccino",
        TipoCafe: TipoCafe.MEDIANO,
        precio: 15.99
    },

    {
        nombre: "Mocca",
        TipoCafe: TipoCafe.MEDIANO,
        precio: 5.21
    },

    {
        nombre: "Latte",
        TipoCafe: TipoCafe.GRANDE,
        precio: 11.11
    },

    {
        nombre: "Macchiato",
        TipoCafe: TipoCafe.MEDIANO,
        precio: 13.40
    },
];

const filtrar = listaCafes.filter(nodo=> nodo.TipoCafe === TipoCafe.MEDIANO);
console.log(filtrar);

const transformar = listaCafes.map(nodo=> {
    return{
        nombre: nodo.nombre,
        precio: nodo.precio.toString() + ' USD'
    }
});
console.log(transformar);
*/