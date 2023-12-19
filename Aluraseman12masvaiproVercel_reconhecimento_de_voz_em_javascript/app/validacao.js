//validacao.js
"use strick"
function    verificaSeChutePossueValorValido(chute) {
    //number é gambaira do Eduardo pra ter compatilbilidade com Edge
 const numero=Number(chute);

 if (chuteForInvalido(numero) ) {

 elementoChute.innerHTML+="<div>Valor inválido</div>";

return

 } 


 if (numeroForMaiorOuMenorQueOValorPermitido(numero)) 
 {
    elementoChute.innerHTML += `

    <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>

    `
    return 
 }
 // o ou é adapatação minha pro Edge
    //condiçaáo Google chrome condição edge 

//console.log(condicao)
//gambiara de eduardo
//recebe objeto na tela
//numero=gambiara[0]
if(numero.innerHTML===String(numeroSecreto+".")){
//se condição é valida
     document.body.innerHTML=`
     <h2>Você acertou!</h2>
     <h3>O número secreto era ${numeroSecreto}</h3>
`
 }
 
else if (numero > numeroSecreto) {
   // esse i é formatado pra ser seta pra cima 
elementoChute.innerHTML+=`
<div>O numero secreto é menor <i class="fa-solid fa-arrow-down"></i> </div>

`
}
else{
    elementoChute.innerHTML+=`
    <div>O numero secreto é maior <i class="fa-solid fa-arrow-up"></i> </div>
    
    `   
}
};

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero>maiorValor||numero <menorValor
}













