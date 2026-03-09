let numerosecreto = gerarNumeroSecreto();

function exibirtextonatela(tag, texto){
let campo = document.querySelector(tag)
 campo.innerHTML = texto
}

exibirtextonatela('h1', "Jogo do número secreto")
exibirtextonatela('p',"Escolha um número entre 1 e 10" )

function verificarChute() {
    console.log(numerosecreto);
}

function gerarNumeroSecreto(){
   return parseInt(Math.random()*10+1)
    
}
