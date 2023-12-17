"use strick"
console.log("estou aqui")
const menorValor=1
const maiorValor=1000
const numeroSecreto=gerarNumeroAleatorio()
// número aleatório entre 0 e 100 
console.log(numeroSecreto)
//numeor pseudoaleatório inseguro
function gerarNumeroAleatorio() {
    
return "Número Secreto:" + parseInt(Math.random() * maiorValor+1)
}
//vincula a varivoel deminimo emaximao com o valor na tela
const elementoMenorValor=document.getElementById('menor-valor')
elementoMenorValor.innerHTML=menorValor
const elementoMaiorValor=document.getElementById('maior-valor')
elementoMaiorValor.innerHTML=maiorValor


