/*
    Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou Pix, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto(preço, desconto){
    return(preço - (preço *(desconto/100)))
}


/*const debito = preço - (10/100)*preço;
const dinheroVista = preço - (15/100)*preço;
const pixVista = preço - (15/100)*preço;
const parcelaDois = preço;
const parcelaMaisDeDois = preço + (10/100)*preço;*/

const pagamento = 5;
const preço = 100;



if (pagamento == 1){
    console.log(aplicarDesconto(preço, 10));
}
else if(pagamento == 2){
    console.log(aplicarDesconto(preço, 15));
}
else if(pagamento == 3){
    console.log(aplicarDesconto(preço, 15));
}
else if(pagamento == 4){
    console.log(aplicarDesconto(preço, 0));
}
else if(pagamento == 5){
    console.log(aplicarDesconto(preço, 10));
}
else{
    console.log("escolha uma forma de pagamento válida!")
}   

