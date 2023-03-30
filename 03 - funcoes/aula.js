/*function sayMyName(name) {
    console.log('Your name is: ' + name);
}
sayMyName('Heinsemberg');

//


function quadrado(valor) {
    return valor * valor;
}
const calculaQuadrado = quadrado(10);
console.log(calculaQuadrado)

//

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100,10));

*/

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function statusIMC(imc) {

    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }

    console.log(imc)
}

function main() {
    const peso = 75;
    const altura = 1.80;
    const imc = calcularIMC(peso, altura)

    console.log(statusIMC(imc))
}

main();



/*Função imediatamente invocada:

(function {
    const peso = 75;
    const altura = 1.80;
    const imc=calcularIMC(peso, altura)

    console.log(statusIMC(imc))
})();

parte do conceito de execução após a criação, dessa forma isolando funções e tornando-se a "main".

*/


