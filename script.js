

let number = 0
let crom


function comecar(){
    let h1 = document.querySelector("h1")

   crom = setInterval(function(){
    number++
    h1.innerHTML = number
   }, 1000)
}


function pausa(){
    let continuar = document.querySelector(".proceguir")
    
    
    clearInterval(crom)

    continuar.innerHTML = "Continuar"
}


function zerar(){
    let h1 = document.querySelector("h1")
    let continuar = document.querySelector(".proceguir")

    number = 0

    h1.innerHTML = number
    continuar.innerHTML = "Começar"



}
