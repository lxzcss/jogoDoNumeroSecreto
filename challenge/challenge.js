let titulo = document.querySelector("h1");      //une a variável titulo a tag 'h1'
titulo.innerHTML = "Hora do Desafio"        //insere o texto a variavel

function verificarClique(){
    console.log("O botão foi clicado");     //envia no console o texto escrito quando o botão for clicado
};

function verificarAlerta(){
    console.log("Eu amo JS");       //envia no console o texto escrito quando o botão for clicado
};

function abrirPrompt(){
    let cidadeBrasil = prompt("Me diga o nome de uma cidade do Brasil");        //abre um prompt na tela com uma pergunta quando o botão for clicado
    alert(`Estive em ${cidadeBrasil} e lembrei de você`);       //envia a mensagem na tela com a informação inserida anteriormente
};

function somar() {
    let n1 = parseInt(prompt("Digite um número"));      //abre um prompt solicitando um número quando o botão for clicado
    let n2 = parseInt(prompt("Digite outro número"));       //abre outro prompt solicitando outro número
    let resultado = n1 + n2;        //soma os 2 números inseridos
    alert(`O resultado da soma de ${n1} com ${n2} é ${resultado} `);        //envia uma mensagem na tela com o resultado da soma.
}