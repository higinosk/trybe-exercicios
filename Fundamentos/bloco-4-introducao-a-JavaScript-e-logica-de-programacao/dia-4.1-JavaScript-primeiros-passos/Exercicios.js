//1)5 programas

// const a = 10;
// const b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

//2)retorne o maior de dois números

// const a = 25
// const b = 50

// if (a > b) {
//     console.log("'a' é maior que 'b'");
// } else {
//     console.log("'b' é maior que 'a'");
// }

//3) retorne o maior de três números

// const a = 75678
// const b = 45436
// const c = 23242

// if (a > b && a > c) {
//     console.log("O maior número é: " + a + " (a)");
// } else if (b > a && b > c) {
//   console.log("O maior número é: " + b + " (b)");
// } else {
//   console.log("O maior número é: " + c + " (c)");
// }

//4) postive para postivo e negative para negativo

// const numero = 13;

// if (numero > 0) {
//   console.log('positive');
// } else if (numero < 0) {
//   console.log('negative');
// } else {
//   console.log('zero');
// }

//5) 3 angulos internos de um triangulo. retorne true ou false ou erro.

// const a = 100;
// const b = 64;
// const c = -16;

// const somaABC = a + b + c;

// const positivoABC = a > 0 && b > 0 && c > 0;

// if (positivoABC) {
//     if (somaABC === 180) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// } else {
//     console.log("erro");
// }

//6) Movimentos de Peça de Xadrex:

// const peçaXadrez = "Bispo";

// switch (peçaXadrez.toLowerCase()) {
//   case "rei":
//     console.log("Movimento e ataque: Uma casa para qualquer direção.");
//     break;
//   case "rainha":
//     console.log(
//       "Movimento e ataque: Se move em todas as direções, com exepção do cavalo"
//     );
//     break;
//   case "peão":
//     console.log(
//       "Movimento e ataque: Uma casa para frente. Duas casas no inicio do jogo. Ataca em diagonal"
//     );
//     break;
//   case "torre":
//     console.log(
//       "Movimento e ataque: Para frente e para trás, para direita e esquerda, quantas casas quiser."
//     );
//     break;
//   case "bispo":
//     console.log("Movimento e ataque: Em diagonal, quantos casas quiser.");
//     break;
//   case "cavalo":
//     console.log(
//       "Movimento e ataque: Em forma de 'L' e pode pular outras peças."
//     );
//     break;
//     default:
//         console.log("Erro: peça não existe");
// }


//7) converter uma nota em porcentagem para conceitos de A e F

// const nota = 45;

// if (nota < 0 || nota > 100) {
//     console.log ("Nota Invalida")
// } else if (nota >=90) {
// console.log("A");
// } else if (nota >=80) {
//     console.log ("B");
// } else if (nota >=70) {
//     console.log("C");
// } else if (nota >=60) {
//     console.log ("D");
// } else if (nota >=50) {
//     console.log ("E");
// } else {
//     console.log ("F")
// }

//defina 3 numeros em constantes, 1 par retorna true, retorna false


// const a = 2;
// const b = 3;
// const c = 5;

// let isEven = false;

// if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
//   isEven = true;
// }
// console.log(isEven);


//defina 3 números em constantes, 1 impar retorna true, retorna false:


// const a = 1;
// const b = 2;
// const c = 6;

// let isOdd = false;

// if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
//   isOdd = true;
// }
// console.log(isOdd);