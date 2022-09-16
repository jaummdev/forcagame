const palavras = [
    palavra001 = {
        nome: "RUSSIA",
        categoria: "PAISES",
    },
    palavra002 = {
        nome: "PERU",
        categoria: "PAISES",
    },
    palavra003 = {
        nome: "FRANÇA",
        categoria: "PAISES",
    },
    palavra004 = {
        nome: "ESTADOS UNIDOS",
        categoria: "PAISES",
    },
    palavra005 = {
        nome: "BRASIL",
        categoria: "PAISES",
    },
    palavra006 = {
        nome: "COSTA RICA",
        categoria: "PAISES",
    },
    palavra007 = {
        nome: "EGITO",
        categoria: "PAISES",
    },
    palavra008 = {
        nome: "COREIA DO NORTE",
        categoria: "PAISES",
    },
    palavra009 = {
        nome: "OS SIMPSONS",
        categoria: "DESENHOS ANIMADOS",
    },
    palavra010 = {
        nome: "LOONEY TUNES",
        categoria: "DESENHOS ANIMADOS",
    },
    palavra011 = {
        nome: "SCOOBY DOO",
        categoria: "DESENHOS ANIMADOS",
    },
    palavra012 = {
        nome: "JOVENS TITANS",
        categoria: "DESENHOS ANIMADOS",
    },
    palavra013 = {
        nome: "OS FLINTSTONES",
        categoria: "DESENHOS ANIMADOS",
    },
    palavra014 = {
        nome: "BOB ESPONJA",
        categoria: "DESENHOS ANIMADOS",
    },
    palavra015 = {
        nome: "HORA DE AVENTURA",
        categoria: "DESENHOS ANIMADOS",
    },
    palavra016 = {
        nome: "DEXTER",
        categoria: "DESENHOS ANIMADOS",
    },
    palavra017 = {
        nome: "FUTURAMA",
        categoria: "DESENHOS ANIMADOS",
    },
    palavra018 = {
        nome: "GRAVITY FALLS",
        categoria: "DESENHOS ANIMADOS",
    },
    palavra019 = {
        nome: "GRAVITY FALLS",
        categoria: "DESENHOS ANIMADOS",
    },
    palavra020 = {
        nome: "HE MAN",
        categoria: "DESENHOS ANIMADOS",
    },
    palavra021 = {
        nome: "ARROZ",
        categoria: "COMIDA",
    },
    palavra022 = {
        nome: "FEIJAO",
        categoria: "COMIDA",
    },
    palavra023 = {
        nome: "PRETZEL",
        categoria: "COMIDA",
    },
    palavra024 = {
        nome: "MACARRONADA",
        categoria: "COMIDA",
    },
    palavra025 = {
        nome: "LAZANHA",
        categoria: "COMIDA",
    },
    palavra026 = {
        nome: "COXINHA",
        categoria: "COMIDA",
    },
    palavra027 = {
        nome: "SORVETE",
        categoria: "COMIDA",
    },
    palavra028 = {
        nome: "PASTEL",
        categoria: "COMIDA",
    },
    palavra029 = {
        nome: "SALADA",
        categoria: "COMIDA",
    },
    palavra030 = {
        nome: "BOLO",
        categoria: "COMIDA",
    },
    palavra031 = {
        nome: "SHORT",
        categoria: "ROUPA",
    },
    palavra031 = {
        nome: "CAMISETA",
        categoria: "ROUPA",
    },
    palavra032 = {
        nome: "VESTIDO",
        categoria: "ROUPA",
    },
    palavra033 = {
        nome: "CASACO",
        categoria: "ROUPA",
    },
    palavra034 = {
        nome: "SAIA",
        categoria: "ROUPA",
    },
    palavra035 = {
        nome: "CUECA",
        categoria: "ROUPA",
    },
    palavra036 = {
        nome: "CALCINHA",
        categoria: "ROUPA",
    },
    palavra037 = {
        nome: "CALÇA",
        categoria: "ROUPA",
    },
    palavra038 = {
        nome: "MEIA",
        categoria: "ROUPA",
    },
    palavra039 = {
        nome: "CHAPEU",
        categoria: "ROUPA",
    },
    palavra040 = {
        nome: "TOUCA",
        categoria: "ROUPA",
    },
    palavra041 = {
        nome: "NOVA ZELANDIA",
        categoria: "PAISES",
    },
    palavra042 = {
        nome: "ITALIA",
        categoria: "PAISES",
    },
    palavra043 = {
        nome: "PORTUGAL",
        categoria: "PAISES",
    },
    palavra044 = {
        nome: "JAPAO",
        categoria: "PAISES",
    },
    palavra045 = {
        nome: "MEXICO",
        categoria: "PAISES",
    },
]

let listaDinamica = [];
let tentativas = 6;
let palavraSecretaCategoria;
let palavraSecretaSorteada;


criarPalavraSecreta();

function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;
}

montarPalavraNaTela();

function montarPalavraNaTela(){ //monta a palavra na tela
    const categoria = document.getElementById("categoria");

    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");

    console.log(palavraSecretaSorteada);

    palavraTela.innerHTML = "";

    for( i = 0; i < palavraSecretaSorteada.length; i++){
        if(listaDinamica[i] == undefined){
            if(palavraSecretaSorteada[i] == " "){
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                listaDinamica[i] = "&nbsp;"

                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }

        }
        else{
            if(palavraSecretaSorteada[i] == " "){
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            }
            else{
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }
        }
    }
}

function verificarLetraEscolhida(letra){ //verifica a letra escolhida pelo usuario
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0) {
        mudarStyleLetra("tecla-" + letra, false);
        comparaListas(letra);
        montarPalavraNaTela();
    }
    
}

function mudarStyleLetra(tecla, condicao){ //muda o estilo do botão quando precionar
    if(condicao == false){
        document.getElementById(tecla).style.background = "#d10909";
        document.getElementById(tecla).style.color = "#ffffff";
    }
    else{
        document.getElementById(tecla).style.background = "#008000";
        document.getElementById(tecla).style.color = "#ffffff";
    }


}

function comparaListas(letra){ //compara se ele acertou ou não a palavra
    const pos = palavraSecretaSorteada.indexOf(letra)

    if(pos < 0){ //Se errar
        tentativas --

        carregaImagemForca();
        if(tentativas == 0){
            abreModal("OPS!", "Não foi dessa vez... A palavra secreta era <br>" + palavraSecretaSorteada); //Mensagem quando errar a palavra!
        }
    }
    else{
        mudarStyleLetra("tecla-" + letra, true);

        for(i = 0; i < palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i] == letra){
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true){  //Se vencer

        abreModal("PARABÉNS!!", "Você acertou a palavra..."); //Mensagem quando acertar a palavra!
        tentativas = 0;
    }
}

function carregaImagemForca(){ //Imagens de quando errar
    switch(tentativas){
        case 5: 
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;
        case 4: 
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;
        case 3: 
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;
        case 2: 
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;
        case 1: 
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;
        case 0: 
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;
        
        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, mensagem){ //Modal || PopUp de mensagem!

    let modalTitulo = document.getElementById("modalTitle");
    modalTitulo.innerText = titulo;

    let modalMsg = document.getElementById("modalMsg");
    modalMsg.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}

let btnRestart = document.querySelector("#btnRestart");

btnRestart.addEventListener("click", function(){
    location.reload();
});
