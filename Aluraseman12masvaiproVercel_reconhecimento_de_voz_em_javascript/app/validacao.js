//validacao.js

function    verificaSeChutePossueValorValido(chute) {
 const numero=+chute
 if (chuteForInvalido(numero)) {
    console.log("Valor inválido")
 }  
 
 
 if (numeroForMaiorOuMenorQueOValorPermitido(numero)) 
 {
 
    

console.log(`valor inválido:o número secreto precisa estar entre ${menor-valor} e ${maior-valor}`)

 }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero>maiorValor||numero <menorValor
}