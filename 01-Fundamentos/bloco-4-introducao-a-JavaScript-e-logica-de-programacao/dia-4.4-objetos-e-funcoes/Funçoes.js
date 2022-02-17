//Funções: Organização de códigos e dividir o programa

function nomeDaFuncao (entradaDeValores, Parâmetros) {
    //console.log(parâmetro) <= serão convertidos em variáveis.
    var resultado = entradaDeValores + Parâmetros; //Se pode declarar variaveis auxiliar dentro da função.
    return resultado //retorna um valor
} //Delimita o corpo da função

//Invocando uma função

nomeDaFuncao(10, 20);
//se não espera parametros
outraFunção();

let statusCarro = "desligado";
let aceleracao = 0;
let rotacaoDoVolante = 0;

function ligarDesligar() {
  if (statusCarro === "desligado") {
    statusCarro = "ligado";
  } else {
    statusCarro = "desligado";
  }
  return statusCarro;
};

function acelerar(incremento) {
    aceleracao = aceleracao + incremento;

    return "Acelerando a " + aceleracao + "m/s²";
}

function frear(decremento) {
    aceleracao = aceleracao + decremento;

    return "Desacelerando para " + aceleracao + "m/s²";
}

function girandoVolante(anguloRotacao) {
    rotacaoDoVolante = anguloRotacao;

    return rotacaoDoVolante + "º";
}
