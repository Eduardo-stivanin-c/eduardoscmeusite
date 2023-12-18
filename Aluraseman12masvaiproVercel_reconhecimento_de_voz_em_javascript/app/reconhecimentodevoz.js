
//try {
const elementoChute=document.getElementById('chute')
///reconhecimento de audio 
window.SpeechRecognition = window.webkitSpeechRecognition  ||webkitSpeechRecognition;
const recognition=new SpeechRecognition();
//idioma do Ai de reconhecimneto de voz
recognition.lang='pt-Br'

recognition.start()
recognition.addEventListener('result',onSpeak)

function onSpeak(e) {
    //pegando o texto reconhecido
    chute=e.results[0][0].transcript
    //console.log(chute)

    exibeChuteNaTela(chute)
    verificaSeChutePossueValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML=`
    <div>    Você disse:    </div>
    <span class="box">${chute}</span>

    `
}
//}



/*catch (erro) {
    console.log="não há suporte a reconhecimento de fala desse site no seu navegador"
}*/




//https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
//https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition