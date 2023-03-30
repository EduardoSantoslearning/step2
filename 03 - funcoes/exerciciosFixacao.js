function escreverNome(nome) {
    console.log('Meu nome é : ' + nome)
};

escreverNome('Eduardo');

/*-------------------------------------------------------------------------------------------------------------------------------- */

function verificaIdade(idade) {
    if (idade < 18) {
        console.log('Menor de Idade');
    } else {
        console.log('Maior de idade');
    }
}

verificaIdade(15);

/*-------------------------------------------------------------------------------------------------------------------------------- */

/*  
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
    e a escolha da consdição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a consição de pagamento escolhida e efetuar o calculo adequaddo.

    Código Condição de pagamento?

    1- À vista Débito, recebe 10% de desconto;
    2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
    3- Em duas vezes, preço normal de etiqueta sem juros;
    4- Acima de duas vezes, preço de etiqueta normal mais juros de 10%;
*/


function aplicaDesconto(preco, percentualDesconto){
    return preco - (preco * percentualDesconto/100);
}
function aplicaJuros(preco, percentualJuros){
    return preco + (preco * percentualJuros/100);
}


function valorDePagamento(preco, condicao, parcelas) {
    var parcelas;

    if (condicao === 1) {
        valorDebito = aplicaDesconto(preco, 10);
        console.log('Valor a ser pago no débito: ' + valorDebito);
    } else if (condicao === 2) {
        valorDinheiroPix = aplicaDesconto(preco, 15);
        console.log('Valor a ser pago no dinheiro ou PIX: ' + valorDinheiroPix);
    } else if (condicao === 3) {
        valorDuasVezes = preco / 2;
        console.log('Valor a ser pago em 2 vezes: ' + valorDuasVezes + '\n Total: ' + valorDuasVezes * parcelas);
    } else {
        valorNVezes = aplicaJuros(preco, 10) / parcelas;
        console.log('Valor a ser pago em ' + parcelas + ' vezes :' + valorNVezes + '\n Total: ' + valorNVezes * parcelas);
    }

}

valorDePagamento(450, 2, 1);