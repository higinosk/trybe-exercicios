//Operadores lógicos
//&& = AND operador binario "Por favor, me vẽ um cafézinho E um pão na chapa"
//só vai retornar true se as duas operações que voltem sejam verdadeiras.

// const comida = 'pão na chapa';
// const bebida = 'cafézinho';

// if (bebida === 'cafézinho' && comida === "pão na chapa") {
//     console.log ("Muito Obrigada!");
// } else {
//     console.log ("Houve um engano.");
// }

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false

// const currentHour = 23;
// let message = "";


// if (currentHour >= 22) {
//     message = "Não deiveríamos comer nada, é hora de dormir";
// } else if (currentHour >= 18 && currentHour < 22) {
//     message = "Rango da noite, vamos jantar :D";
// } else if (currentHour >= 14 && currentHour < 18) {
//     message = "Vamos fazer um bolo pro café da tarde?";
// } else if (currentHour >= 11 && currentHour < 14) {
//     message = "Hora do almoço!!!";
// } else if (currentHour < 11 && currentHour < 4) {
//     message = "Hmm, cheiro de café recém passado";
// }

// console.log(message);


//|| = OR = Precisa que uma das condições sejam verdadeiras: Isso ou aquilo.
// const bebidaPrincipal = 'cafézinho';
// const bebidaAlternativa = 'Suco de laranja';

// if (bebidaPrincipal === 'cafézinho' || bebidaAlternativa === 'Suco de laranja') {
//     console.log('Obrigada!');
// } else {
//     console.log ("Eu não pedi isso!");
// }
//truthy e falsy

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false

// const weekDay = "domingo";

// if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "Quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
//     console.log("Oba, mais um dia de aprendizado na Trybe >:D");
// } else if (weekDay === "Sábado" || weekDay === "domingo") {
//      console.log("FINALMENTE, descanso merecido UwU")
// }

//! = NOT = Inverter o valor booleano de um elemento. !variálvel

// console.log(!(2 + 2) === 4)

// console.log(!42); // false

// console.log(!0); // true
// O número 0 tem o valor "falsy" no javascript. Logo, seu oposto é true.
