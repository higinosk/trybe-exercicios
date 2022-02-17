// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:

// let n = 5;
// let symbol = '*'
// let imputline = ' ';

// for(let i = 0; i < n; i +=1){
//     imputline = imputline + symbol;
// };

// for(let i = 0; i < n; i +=1){
//     console.log(imputline)
// };

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

// let n = 5;
// let symbol = '*'
// let imputline = '';

// for(let i = 0; i <= n; i +=1){
//     console.log(imputline);
//     imputline = imputline + symbol;
// };


//3


// let n = 5;
// let symbol = '*';
// let imputline = '';
// let imputPosition = n;

// for(let i = 0; i <= n; i +=1){
//     for (let columnI = 0; columnI <= n; columnI +=1) {
//         if (columnI < imputPosition) {
//             imputline = imputline + ' ';
//         } else {
//             imputline = imputline + symbol;
//         }
//     }
//     console.log(imputline);
//     imputline = '';
//     imputPosition -=1;
// };


//4



// let n = 5;
// let symbol = '*';
// let imputline = '';
// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let i = 0; i <= midOfMatrix; i +=1){
//     for (let columnI = 0; columnI <= n; columnI += 1) {
//         if (columnI > controlLeft && columnI < controlRight) {
//             imputline = imputline + symbol;
//         } else {
//             imputline = imputline + ' ';
//         }
//     }
//     console.log(imputline);
//     imputline = '';
//     controlRight +=1;
//     controlLeft -=1;
// };

//bônus 5

// let n = 5;
// let symbol = '*';
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;

// for (let i = 1; i <= middle; i +=1){
//     let outputline = '';
//     for (let columnI = 1; columnI <= n; columnI += 1) {
//         if (columnI == controlLeft || columnI == controlRight || i == middle) {
//             outputline += symbol;
//         } else {
//             outputline += ' ';
//         }
//     }
//     console.log(outputline);
//     controlRight +=1;
//     controlLeft -=1;
// };

//Bônus 6
let divisors =1;
let numberToCheck = 43;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');