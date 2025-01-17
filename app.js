let listaNumerosSorteados = [];
let numeroLimmite = 10
let = numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// let titulo = document.querySelector("h1");      //'documento.querySelector' função para localizar outra parte do código
// titulo.innerHTML = "Jogo do número secreto";

// let paragrafo = document.querySelector("p");        //seleciona a tag 'p' junto da variávvel 'paragrafo'
// paragrafo.innerHTML = "Escolha um número entre 1 e 10;"

function exibirTextoNaTela(tag, texto) {
                            //'tag' 'texto', parametros de boas práticas
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.2});
}


function exibirMensagemInicial() {
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 a 10");
}

exibirMensagemInicial();


function verificarChute() {     // 'function' função para verificar alguma ação no código
    let chute = document.querySelector("input").value;      //'value' transforma o texto inserido em valor

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        } else {
            exibirTextoNaTela("P", "O número secreto é maior");
        }
        tentativas++;
        limparCampo();
    }
}


//'return' retorna a informação solicitada

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimmite + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimmite) {
        listaNumerosSorteados = [];
    }


    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}