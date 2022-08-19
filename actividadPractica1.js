const arregloinvitados=["Lucas","Matias","Jose","Pedro","Martina","Marcelo","Esteban","Marcela","Martin"]
console.log(arregloinvitados.length)
let ultimoinvitado =arregloinvitados[arregloinvitados.length-1]
console.log(ultimoinvitado)
let nombre= "Pedro"
let indice=arregloinvitados.indexOf("Pedro")
console.log(indice)
arregloinvitados.splice(3,1)
console.log(arregloinvitados)
arregloinvitados.push("Pedro")
console.log(arregloinvitados)
let nombre2="Marcela"
let indice2=arregloinvitados.indexOf("Marcela")
console.log(indice2)
arregloinvitados.splice(6,1)
console.log(arregloinvitados)
const arregloinvitadosfinal = arregloinvitados
console.log(arregloinvitadosfinal)

arregloinvitadosfinal.map(function(nombre, orden){
    console.log(nombre,orden)
})

console.log(arregloinvitadosfinal.sort())
