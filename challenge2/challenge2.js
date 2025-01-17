function exibir() {
    console.log("Hello World!");
};

function exibir2(nome){
    console.log(`Olá, ${nome}!`);
}

exibir2("Lucas");

function dobrar(numero) {
    return numero * 2;
};

let resultadoDobro = dobrar(5)
console.log(`O resultado do dobro é ${resultadoDobro}`);

function media(numero1, numero2, numero3){
    return (numero1 + numero2 + numero3) / 3;    
};

let resultadoMedia = media(4, 7, 10);
console.log(resultadoMedia);

function maior(n4, n5){
    return n4 > n5 ? n4 : n5;
};

let maiorNumero = maior(27, 35);
console.log(maiorNumero);

function multi(n6){
    return n6 * n6;
};

let multiplicacao = multi(7);
console.log(multiplicacao);


