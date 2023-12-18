var gambiara=document.getElementsByClassName("box")
function planoB(){
    if (gambiara[0].innerHTML==String(numeroSecreto+'.') ||gambiara[0].innerHTML==String(numeroSecreto)) {
        document.body.innerHTML=`
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>`;   
    }
}