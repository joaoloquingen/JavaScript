/*
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado.
    Crie um método que dado a quantidade de KM e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoPorKM;

    constructor(marca, cor, gastoPorKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoPorKM = gastoPorKM;
    }

    gasto(preço, distanciaKM){
        return preço * distanciaKM * this.gastoPorKM;
    }
}

const ka = new Carro("Ford", "Azul", 1/9);

console.log(ka);
console.log(ka.gasto(6, 5) + " gasto com combustível para chegar ao destino !");    