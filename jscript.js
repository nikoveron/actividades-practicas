// alert("Bienvenido")

// EJERCICIOS

// 1) PEDIR AL USUSARIO QUE INGRESE SU NOMBRE. GUARDAR ESE NOMBRE EN UNA 
// VARIABLE Y UTILIZARLO PARA SALUDAR AL USUSARIO (EJ:"HORA SANDRA")

// let nombre = prompt("ingrese su nombre ")

// let num1 =parseInt(prompt("ingrese un numero"))
// let num2 = parseInt(prompt("ingrese otro numero"))

 // alert(`hola ${nombre}. Buenos dias`)
 // alert(`Suma ${num1+num2}. resta ${num1-num2} division${num1/num2} multiplicacion${num1*num2}`) otra formosa de comentar es cntrl+} 

 //  let string = "1234"
 //  console.log(typeof(+string))
 // pedir al ususario que ingrese el apellido y devolverle el apellido todo en mayuscula toUpperCase=maysucula toLowerCase=minuscula
// let apellido = prompt("ingrese apellido vieja")
// alert(apellido.toUpperCase())

// const miarray=["hola",1,()=>{},[]]
const miarray=[22,23,24,25]
console.log(miarray)
console.log(miarray[1])
console.log(miarray.length)
//modificar elemento  dentro del array
miarray[1]="hola"
console.log(miarray)
//sacar objeto de un indice del array
const objeto=miarray[1]
console.log(objeto)
//ver ultimo elemento del array
let ultimoelemento = miarray[miarray.length-1]
console.log(ultimoelemento)

//ver la posicion de un objeto del array
const nombres = ["susana","ruth","lautaro","lautaro"]
console.log(nombres)
let nombre= "lautaro"
let indice=nombres.indexOf("lautaro")
console.log(indice)
//modificar objeto del array (solo modificia el primero en caso que hayan 2 o mas con el mismo nombre)
nombres[nombres.indexOf("lautaro")]="ruben"
console.log(nombres)
//agrega un elemto al final del array
nombres.push("leandro")
console.log(nombres)
//elimina el ultimo elemento del array
nombres.pop("")
console.log(nombres)
//agrega un elemento al prinipio del array
nombres.unshift("leandro")
console.log(nombres)
//elimina el primero elemento al principio del array
nombres.shift("")
console.log(nombres)
//elimina el ultimo elemento y muestra el elemento eliminado en la consola
console.log(nombres.pop())
//splice agrega 1  elimina uno o mas elemento de un arreglo
nombres.splice(1,2, "guido","joakin")
console.log(nombres)
//funcion normal y funcion tipo flecha
// function validarnombre(nombre){
//     return`${nombre}nuevo`
// }
// const validarnombre=(nombre)=>`${nombre} nuevo`
//hacer funcion llamada numeros que el primer parametro indique el valor que tengo que aregar al arreglo objetonumeros y el segundo el indice donde sera agregado
// y que muestre por consola el nuevo arreglo

function suma(num1,num2){
let total=num1+num2
return total
}
console.log(suma(3,4))

const sumar=(num1,num2)=>num1+num2
console.log(sumar(17,24))



