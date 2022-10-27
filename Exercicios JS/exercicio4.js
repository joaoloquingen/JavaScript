/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou Pix, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const preço = 100;
const debito = preço - (10/100)*preço;
const dinheroVista = preço - (15/100)*preço;
const pixVista = preço - (15/100)*preço;
const parcelaDois = preço;
const parcelaMaisDeDois = preço + (10/100)*preço;
const pagamento = "Parcelado em mais de 2 vezees";

if (pagamento == "debito"){
    console.log("O valor a ser pago será de " + debito + "!");
}
else if(pagamento == "A vista no dinheiro"){
    console.log("O valor a ser pago será de " + dinheroVista + "!");
}
else if(pagamento == "A vista no pix"){
    console.log("O valor a ser pago será de " + pixVista + "!");
}
else if(pagamento == "Parcelado em 2 vezes"){
    console.log("O valor a ser pago será de " + parcelaDois + "!");
}
else if(pagamento == "Parcelado em mais de 2 vezes"){
    console.log("O valor a ser pago será de " + parcelaMaisDeDois + "!");
}
else{
    console.log("escolha uma forma de pagamento válida!")
}   

