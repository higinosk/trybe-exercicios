
//1)5 programas

let a = 5;
let b = 10;

function basicArithmetic1(a, b) {
  let resultado = a + b;

  return resultado;
}
function basicArithmetic2(a, b) {
  let resultado = a - b;

  return resultado;
}
function basicArithmetic3(a, b) {
  let resultado = a * b;

  return resultado;
}
function basicArithmetic4(a, b) {
  let resultado = a / b;

  return resultado;
}
function basicArithmetic5(a, b) {
  let resultado = a % b;

  return resultado;
}

console.log(basicArithmetic1(5, 10));
console.log(basicArithmetic2(5, 10));
console.log(basicArithmetic3(5, 10));
console.log(basicArithmetic4(5, 10));
console.log(basicArithmetic5(5, 10));

//2)retorne o maior de dois números

function maiorDeDois(a, b) {
  if (a > b) {
    return "'a' é maior que 'b'.";
  } else {
    return "'b' é maior que 'a'.";
  }
}

console.log(maiorDeDois(25, 50));

//3) retorne o maior de três números

function maiorDeTres(a, b , c) {
  if (a > b && a > c) {
    return "O maior número é: " + a + " (a)";
  } else if (b > a && b > c) {
    return "O maior número é: " + b + " (b)";
  } else {
    return "O maior número é: " + c + " (c)";
  }
}

console.log(maiorDeTres(75, 43, 65))
//4) postive para postivo e negative para negativo

function positiveNegative(number) {
  if (number > 0) {
  return 'positive';
} else if (number < 0) {
  return 'negative';
} else {
  return 'zero';
}  
}

console.log (positiveNegative(-13))

//5) 3 angulos internos de um triangulo. retorne true ou false ou erro.


function tresAngulos(a, b, c) {

let somaABC = a + b + c;

let positivoABC = a > 0 && b > 0 && c > 0; 
if (positivoABC) {
    if (somaABC === 180) {
        return true;
    } else {
        return false;
    }
} else {
    return "Error";
}
}

console.log(tresAngulos(100, 64, 16));

//6) Movimentos de Peça de Xadrex:


function peçaDeXadrez(peçaXadrez) {
  switch (peçaXadrez.toLowerCase()) {
    case "rei":
      return "Movimento e ataque: Uma casa para qualquer direção.";
      break;
    case "rainha":
      return "Movimento e ataque: Se move em todas as direções, com exepção do cavalo";
      break;
    case "peão":
      return "Movimento e ataque: Uma casa para frente. Duas casas no inicio do jogo. Ataca em diagonal";
      break;
    case "torre":
      return "Movimento e ataque: Para frente e para trás, para direita e esquerda, quantas casas quiser.";
      break;
    case "bispo":
      return "Movimento e ataque: Em diagonal, quantos casas quiser.";
      break;
    case "cavalo":
      return "Movimento e ataque: Em forma de 'L' e pode pular outras peças.";
      break;
    default:
      return "Erro: peça não existe";
  }
}

console.log(peçaDeXadrez("Bispo"));

//7) converter uma nota em porcentagem para conceitos de A e F


function porcentagem(nota) {
if (nota < 0 || nota > 100) {
    return "Nota Invalida"
} else if (nota >=90) {
    return "A";
} else if (nota >=80) {
    return "B";
} else if (nota >=70) {
    return "C";
} else if (nota >=60) {
    return "D";
} else if (nota >=50) {
    return "E";
} else {
    return "F";
}    
}

console.log(porcentagem(75));


//defina 3 numeros em constantes, 1 par retorna true, retorna false

function retornaPar(a, b, c) {
let isEven = false;

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
}
return isEven;    
}
console.log(retornaPar(1, 2, 3))

//defina 3 números em constantes, 1 impar retorna true, retorna false:

function retornaImpar(a, b, c) {
let isOdd = false;

if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isOdd = true;
}
return isOdd;    
}

console.log(retornaImpar(1, 2, 3))

