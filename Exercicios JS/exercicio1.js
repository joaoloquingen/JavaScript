/*  Faça um programa para calcular o valor gasto de combustivel em uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo do combustivel que está no seu carro;    
4 - Gasto médio de combustivel do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar essa viagem.
*/

const preçoEtanol = 6;
const preçoGasolina = 5.79;
const gastoPorKm = 10;
const distanciaViagem = 100;
let isTipoCombustivel = "Gasolina";

const valor = distanciaViagem/gastoPorKm;

if (isTipoCombustivel === "Etanol") {
    console.log("O gasto será de: " + valor * preçoEtanol + ", pois seu carro é a Etanol.");
 } else {
    console.log("O gasto será de: " + valor * preçoGasolina + ", pois seu carro é a Gasolina.")
 }