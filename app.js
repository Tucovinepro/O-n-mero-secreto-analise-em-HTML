let numerosecreto = gerarnumerosecreto();

function exibirtextonatela(tag, texto){
let campo = document.querySelector(tag)
 campo.innerHTML = texto

}

exibirtextonatela('h1', "Jogo do número secreto")
exibirtextonatela('p',"Escolha um número entre 1 e 100" )

function verificarChute() {
    console.log(numerosecreto);
}

function gerarnumerosecreto(){
   return parseInt(Math.random() * 10 + 1)
    
}
