// DESAFIO

// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function indiceMassaCorporal(peso, altura) {
    let imc = peso / (altura * altura);
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }

    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }

    return fatorial;
}

// Exemplo de uso
let numero_exemplo = 5;
let resultado = calcularFatorial(numero_exemplo);
console.log(`O fatorial de ${numero_exemplo} é ${resultado}`);

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function conversaoDolarparaReal(valorEmDolar) {
    let cotacaoDolar = 4.80;
    let valorEmReal = valorEmDolar * cotacaoDolar;
    return valorEmReal.toFixed(2);
}

// Exemplo de uso
let valorEmDolar = 50;
let valorEmReal = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReal}`);


//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function salaRetangular(altura, largura) {
    let areaRetangulo = altura * largura;
    console.log(`Área da sala: ${areaRetangulo} metros quadrados`);
    let perimetroRetangulo = (2 * (altura + largura));
    console.log(`Perímetro da sala: ${perimetroRetangulo} metros`);
}

// Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
salaRetangular(altura, largura);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function salaCircular(raio) {
    let areaCirculo = Math.PI * (raio * raio);
    console.log(`Área da sala circular: ${areaCirculo.toFixed(2)} metros quadrados`); let perimetroCirculo = 2 * Math.PI * raio;
    console.log(`Perímetro da sala circular: ${perimetroCirculo.toFixed(2)} metros`);
}

// Exemplo de uso
let raio = 4; // em metros
salaCircular(raio);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}

// Exemplo de uso
let numero = 7;
mostrarTabuada(numero);