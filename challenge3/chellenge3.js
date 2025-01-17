function imc(peso, altura) {
    return peso / (altura * altura);
}

let calculoIndice = imc(82, 1.90);
console.log(parseInt(calculoIndice));

function fatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fat = 1;
    for (let i = 2; i <= numero; i++) {
        fat *= i;
    }
    return fat;
}

function dolar(a){
    return a * 4.80;
}

let numero = 4;
let resultado = fatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);

let realParaDolar = dolar(50)
console.log("$" + realParaDolar);
console.log("R$" + realParaDolar/4.80);

function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro =  2 * (altura + largura);

    console.log(`Área da Sala: ${area} metros quadrados`);
    console.log(`Perímetro da Sala: ${perimetro} metros quadrados`);
}

let altura = 3;
let largura = 15;
calcularAreaPerimetroSalaRetangular(altura, largura);

function areaCircular(raio) {
    let area1 = Math.PI * raio * raio;
    let perimetro1 = 2 * Math.PI * raio;

    console.log(`Área da Sala Circular: ${area1.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da Sala Circular: ${perimetro1.toFixed(2)} metros quadrados`);
}

let raio = 4;
areaCircular(raio);

function mostrarTabuada(numero2) {
    for (let a = 1; a <= 10; a++) {
        let resultado1 = numero2 * a;
        console.log(`${numero2} x ${a} = ${resultado1}`);
    }
}

let numero2 = 7;
mostrarTabuada(numero2);


// DEPOSITAR CÓDIGOS AMANHÃ