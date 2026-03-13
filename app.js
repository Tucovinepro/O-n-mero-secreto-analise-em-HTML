let numerosecreto = gerarNumeroSecreto();

function exibirtextonatela(tag, texto){
let campo = document.querySelector(tag)
 campo.innerHTML = texto
}

exibirtextonatela('h1', "Jogo do número secreto")
exibirtextonatela('p',"Escolha um número entre 1 e 10" )

function verificarChute() {
  let chute = document.querySelector("input").value;

    if (chute == numerosecreto) {
      exibirtextonatela("h1", "Acertou!")
      exibirtextonatela("p", "Você acertou o número secreto")
    } else {
      if (chute > numerosecreto) {
        exibirtextonatela("p", "O numero secreto é menor")

      } else {
        exibirtextonatela("p", "O numero secreto é maior")
      }

      
    }
  
  
  }

  


function gerarNumeroSecreto(){
   return parseInt(Math.random()*10+1)
    
}
