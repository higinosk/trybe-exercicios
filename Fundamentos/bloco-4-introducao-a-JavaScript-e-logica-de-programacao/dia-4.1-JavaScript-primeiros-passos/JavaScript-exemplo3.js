//Condições If e Else - operadores de atribuição
//if - se
//else - senão

// if (condicao) {
//     //codigo
// } 
// else if (outracondicao) {
//     //outra condicao
// }
// else if (maisoutracondicao) {
//     //mais outra condicao
// }
// else {
//     //condicao
// }

// let trybe = 16.42;

// if (trybe >= 14 && trybe < 14.40) {
//     console.log("Esquenta");
// }
// else if (trybe >= 16.30 && trybe < 17.50) {
//     console.log("Aula ao vivo");
// }
// else if (trybe >=19.40 && trybe < 20) {
//     console.log("Fechamento");
// }
// else {
//     console.log("Fora dos momentos síncronos");
// }

let nota = 50;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovado(a)");
}
else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera");
}
else {
    console.log("Você foi reprovado(a)");
}