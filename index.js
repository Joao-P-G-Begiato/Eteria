console.log("Testando... 1, 2, 3!! SOM SOM")

var nome = prompt("Como gostaria de ser chamado (pode ser seu nome, gametag, nome de personagem) ?")
var raça = prompt("Qual sua raça no mundo de Fantasia? Ex: Elfo, Anão, Minotauro etc...")
var classe = prompt("Qual a sua classe no mundo de Fantasia? Ex: Mago, Espadachim, Arqueiro? ")

alert (`olá seja muito bem vindo(a/e) ${nome} ao reino místico de Etéria, vejo que é um dos membros reconhecidos por suas habilidades entre sua raça os ${raça}, e meus passarinhos me contaram que você é um Exímio ${classe}.`)

var listaDeVisitantes = []
listaDeVisitantes.push(`${nome}, ${raça}, ${classe}`)

console.log(listaDeVisitantes)

function atributo(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  var ataque = ''

function fichaDePersonagem (){
    ataque = atributo
    defesa = atributo
}

