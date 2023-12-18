//validacao.js

function    verificaSeChutePossueValorValido(chute) {
    //number é gambaira do Eduardo pra ter compatilbilidade com Edge
 const numero=+Number(chute);




 if (chuteForInvalido(numero) ) {


    elementoChute.innerHTML+="<div>Valor inválido</div>";


  

 
 if (numeroForMaiorOuMenorQueOValorPermitido(numero)) 
 {
 
    

console.log(`Valor inválido:o número secreto precisa estar entre ${menorValor} e ${maiorValor}`)

 }

 if(numero===numeroSecreto){
document.body.innerHTML=`
<h2>Você acertou!</h2>
<h3>O número secreto era ${numeroSecreto}</h3>
`
 }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero>maiorValor||numero <menorValor
}