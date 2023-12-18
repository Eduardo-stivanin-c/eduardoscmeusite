var gambiara=document.getElementsByClassName("box")
function planoB(){
    if (numero==String(numeroSecreto+'.') ||gambiara[0].innerHTML==String(numeroSecreto)) {
        document.body.innerHTML=`<h2>Você acertou!</h2> <h3>O número secreto era ${numeroSecreto}</h3>` 
    
    }

    return `<h2>Você acertou!</h2> <h3>O número secreto era ${numeroSecreto}</h3>
}