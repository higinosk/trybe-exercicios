// //For/in

// //pedidos de pizza

// let pizzas = {
//   sabor: "Palmito",
//   preco: 39.90,
//   bordaCatupiry: true,
// };

// // for (let key in pizzas) {
// //   console.log(pizzas.preco);
// //   console.log(pizzas["bordaCatupiry"]);
// //   //mostra 3 vezes porque tem 3 posições
// //   console.log(pizzas[key]);
// // }
// // //for/In dentro de arrays

// // pizzas["pizzasDoces"] = ["chocolate", "banana", "morango"];

// for (let position in pizzas) {
//   console.log(position);
// }

// // console.table(pizzas);

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
  };

  for (key in names) {
      console.log('olá ' + names[key])
  };

  let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (key in car) {
    console.log(key, car[key])
}
