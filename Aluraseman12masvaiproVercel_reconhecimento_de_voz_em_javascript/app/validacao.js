//validacao.js

function    verificaSeChutePossueValorValido(chute) {
    //number é gambaira do Eduardo pra ter compatilbilidade com Edge
 const numero=+Number(chute);

 if (chuteForInvalido(numero) ) {


    elementoChute.innerHTML+="<div>Valor inválido</div>";


<<<<<<< HEAD
  
 
 
=======
 } 

>>>>>>> a51ead1cbc74bd113320b1457c900b712bf7a1be
 if (numeroForMaiorOuMenorQueOValorPermitido(numero)) 
 {
 
    

console.log(`Valor inválido:o número secreto precisa estar entre ${menorValor} e ${maiorValor}`)

 }

 // o ou é adapatação minha pro Edge
    //condiçaáo Google chrome condição edge 
//let condicao=(numero==numeroSecreto ||numero==numeroSecreto+'.' )
//console.log(condicao)
    if(numero===numeroSecreto){
//se condição é valida
     document.body.innerHTML=`
     <h2>Você acertou!</h2>
     <h3>O número secreto era ${numeroSecreto}</h3>
`
 }





};







function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero>maiorValor||numero <menorValor
}










