var opcoes = '&*%@!#$¨úóçáabcdehfglsnmopqsrpqxyz';
//gera a ver~so em mauisculo da lsta de careteres de senha
var opcoesmaiusculo=opcoes.toLocaleUpperCase();
var opcoestodas =[ opcoesmaiusculo,opcoes]

var data = new Date()



/*
var inicio = "./incluir8.php?a=";
			//texto no vbancode dados sql tem que ser entre aspas "" e no php fdesconfigtrua aspas simples então só resta  a caspa compasotas
			//adicionado a correção de aspa pq sem apspa no slq só omente numero
var campo = document.getElementById('campo');
var txt = "&b=";
var campo2 = document.getElementById('campo2');
var txt2 = "&c=";
var campo3 = document.getElementById('campo3');
var txt3 = "&d=";
var campo4 = document.getElementById('campo4');
var txt4 = "&e=";
var campo5 = document.getElementById('campo5');
var txt5 = "&f=";
var campo6 = document.getElementById('campo6');
var txt6 = "&g=";
var campo7 = document.getElementById('campo7');

*/
        
        function validarsenhaforte(campo2){
            campo2.required=true;
            //checa se tem 8 carateres
        if (campo2.value.length < 8){
		//valida que tenha pleo menos 8carateres a senha
			alert('	senha forte tem que ter 8 carateres,letras e numeros ')
		}  
        //se a senha estiver validada altere o valor do barra de carregar meter pra 3
        else{
            senhaforca.value=3
        }
        /*define campo 2 como obrigatorio*/ 
       

        /*define o campo como campo de senha*/
campo2.type="password";

    }

    function gerarTexto() {
        //gera texto pra opção de garar senha 
        return opcoes[Math.floor(Math.random() * (opcoes.length))]
    }
    function geratextomauisculo(){

        return  opcoesmaiusculo[Math.floor(Math.random() * ( opcoesmaiusculo.length))] 
    }
    //gerar senha forte depende de gerar texto 
    function gerarsenhaforte() {
        return gerarTexto() +geratextomauisculo() + gerarTexto() + gerarTexto() + gerarTexto() + gerarTexto() + gerarTexto() + gerarTexto() + gerarTexto()
    }


/*
//https://pt.stackoverflow.com/questions/172749/como-transformar-string-em-array-de-caracteres
function textopranumero() {
    // pq da bug de  rava php com rtexto em ntão converte em nuero maas o código pra descovenrter é diferente
  
    campo.value.length
    i = 0
    //isso pra converte letra em nuero uma por uma inconmleto
    for (i <= campo.value.length )
        campo.value[i].charCodeAt()


}
//aplicando algo semelhantae a hash prta senh para poder inseri-la




			//acima cookeis e enviar dados abaixo 
			//indexindao  o pesquisasar por email  em vez de pro id numerico
			function indexar() {
				//deve ser oligado ao campo de email mediante evento  onchange(na mudança).
				//converte email em um numero e o usa coo id assim permite pesquisareptindo o script	
				iddepesquisa = String(campo.value)
				iddepesquisa.charCodeAt()

				//acima gera o id depois é spó seta valor no campo de id
				//a sefunda linha só tpra testar se funcionou
				document.getElementById("campo4").value = iddepesquisa.charCodeAt()
				// gerar o identificado a partir  o email ,indexindo o pesquisar por email



			}


				//function random.choice(){
				//Math.floor(Math.random() *(opcoes.length+1))
				//sorteia escolhe valor aleatorio da matriz sspra gerar senha
            function enviar(){
                location.href=(inicio + encodeURIComponent(campo.value)  + txt +encodeURIComponent(campo2.value)+ txt2  + campo3.value + txt3  +campo4.value + txt4  + campo5.value + txt5 + campo6.value + txt6 + campo7.value);
            }
//let 
/*




function s(){
	alert("a")
}


for( i <= campo2.value.length){
	//tentar por operador pra and(E)
 if (campo2.value[i] ){
	 //valida que tenha pleo menos 8carateres a senha
  //  temnumero=false;
}}


//checa se tem numero o pq o erro de Number é Nan qde resulatod quando não é numero
function checanumerico(){
var i = 0
var temnumero=false;

function checanumero(){
	if (campo2.value.length < 8){
	 //valida que tenha pleo menos 8carateres a senha
		alert('mínimo de 8 carateres ')
}
	
	
}

var temnumero=false
for (let index = 0; index < campo2.value.length; index++) {
if (Number(campo2.value[index]!= "NaN" )){ temnumero=true }    
}

/
//var certo="✔️"
//var campo2.senhaforte=checasenha();
//function  checasenha(){
//checa força da senha do campo de senha campo2
	//if (campo2.value.length < 8){
	 //valida que tenha pleo menos 8carateres a senha
		//alert("mínimo de 8 carateres ")
//}
//}
//checa pra ver se ter numero


 //var i=0
//var temnumero=true
//var numbers=0,1,2,3,4,5,6,7,8,9
//for( i <= campo2.value.length){
	//tentar por operador pra and(E)
//if (campo2.value[i] !=0 & campo2.value[i] !=1 & campo2.value[i] !=2  &  campo2.value[i] !=3 & campo2.value[i] !=4 & campo2.value[i] !=0    ){
	 //valida que tenha pleo menos 8carateres a senha
  //  temnumero=false;
	
		
//}
//}
//Tem número na senha ?
//se não tem temnumero = false(falso)
//se temnumero = false(falso) ou seja semnão tem mnumero na senha então alertar isso
//if (temnumero=false){
	
	//alert("falta número na senha")
	
//}


 






}




}



</script>


 <i> 
 bot~~ao que envia os dados
encodeURIComponent('z')
converte praonde não suprota caracter especial

---->

if (campo2.value=campo2.value.toUpperCase()){ 

    alert('falta minusculo ');
    }


     // inicio primeira parte do texto
  var form =document.getElementById('formulario');
  
  //txt é abrevivação de texto é '&' símbolo que separa as variáveis do get junto com o nome da variável + "=" */
			//encodeURI('')
			//https://stackoverflow.com/questions/5396560/how-do-i-convert-special-utf-8-chars-to-their-iso-8859-1-equivalent-using-javasc
			// encodeURI('') converte de ut8- pra ISo,sem caracteres especial pq  slq não suporta
			

			//gambi do indetificador
			//autocomplete voltar donde parou o cadastro
			//function autocomplete(){
			/*$.cookie("campo",campo.value);
			$.cookie("campo2",campo2.value);
			$.cookie("campo3",campo3.value);
			$.cookie("campo4",campo4.value);
			$.cookie("campo5",campo5.value);
			$.cookie("campo6",campo6.value);
			$.cookie("campo7",campo7.value);
			function campoobrigatorio(){
				
			}
			*/








			//}
/*      
https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input/range
  
https://www.horadecodar.com.br/2020/04/20/html-como-limitar-caracteres-do-input/
 https://www.devmedia.com.br/placeholder-em-html5-texto-padrao-de-input/245
https://emojis.wiki/pt/clip/https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input/button
https://emojiterra.com/pt/marca-de-verificacao-simples/
var gera= opcoes[Math.floor(Math.random() *(opcoes.length+1))]+opcoes[Math.floor(Math.random() *(opcoes.length+1))]+opcoes[Math.floor(Math.random() *(opcoes.length+1))]+opcoes[Math.floor(Math.random() *(opcoes.length+1))]+ opcoes[Math.floor(Math.random() *(opcoes.length+1))]+opcoes[Math.floor(Math.random() *(opcoes.length+1))]+opcoes[Math.floor(Math.random() *(opcoes.length+1))]
https://plugins.jquery.com/cookie/
https://getbootstrap.com.br/docs/4.1/components/card/
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators#operadores_de_compara%C3%A7%C3%A3o
https://www.devmedia.com.br/verificando-a-forca-da-senha-com-o-plugin-jquery-complexify/27088
https://www.alura.com.br/artigos/convertendo-string-para-numero-em-javascript
https://www.devmedia.com.br/verificando-a-forca-da-senha-com-o-plugin-jquery-complexify/27088
https://www.delftstack.com/pt/howto/javascript/javascript-change-text/#:~:text=()%20em%20JavaScript.-,Alterar%20o%20texto%20de%20um%20elemento%20usando%20a%20propriedade%20textContent,texto%20usando%20a%20propriedade%20textContent%20.
Lógica%20de%20Programação%20Crie%20seus%20primeiros%20programas%20usando%20Javascript%20e%20HTML%20by%20Paulo%20Silveira,%20Adriano%20Almeida%20(z-lib.org).pdf
http://devfuria.com.br/javascript/gerar-numero-randomico-entre-2-numeros-quaisquer/
https://www.braziljs.org/p/1001-formas-de-fazer-input-de-arquivos-com-javascript
*/