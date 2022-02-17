const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  const delivery = order.order.delivery.deliveryPerson;
  const address = "address";
  const street = order[address].street;
  const number = order[address].number;
  const apartment = order[address].apartment;
  const costumerName =  order.name;
  const costumerPhone = order.phoneNumber;
console.log(`Olá ${delivery}, entrega para: ${costumerName}, Telefone: ${costumerPhone}, R. ${street}, ${number}, ${apartment}.`);
  // Adicione abaixo as informações necessárias
  //Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  //newKey = 'fullName';
  // const fullName = `${customer1.firstName} ${customer1.lastName}`;
  // customer1[newKey] = fullName;
  // console.log(customer1);
};

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
 const modifyCostumerName = order.name = 'Luiz Silva'
//  const pizza = "pizza";
 const pizzas = Object.keys(order.order.pizza);
 const drink = order.order.drinks.coke.type;
 const modifyTotal = order.payment.total = 50;
 console.log(`Olá ${modifyCostumerName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$ ${modifyTotal},00.`);

//  order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       },
//     },
//     drinks: {
//       coke: {
//         type: "Coca-Cola Zero",
//         price: 10,
//         amount: 1,
//       },
//     },
//     delivery: {
//       deliveryPerson: "Ana Silveira",
//       price: 5,
//     },
//   },
//   payment: {
//     total: 60,

};

orderModifier(order);
