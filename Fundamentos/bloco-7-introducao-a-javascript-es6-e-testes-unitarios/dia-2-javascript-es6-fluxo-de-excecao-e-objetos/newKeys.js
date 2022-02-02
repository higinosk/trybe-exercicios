//Reescrevendo o objeto para adicionar a nova propriedade.
const customer1 = {
  firstName: 'Roberto',
  lastName: 'Faria', //Propriedade foi adicionada.
  age: 22,
  job: 'Teacher',
};

//adicionando nova propriedade por sintaxe obj.nomeDaPropriedade.
console.log(customer1);

customer1.hobbie = 'Tennis';

console.log(customer1);

//adicionando nova propriedade por sintaxe obj[variavelQueContemONomeDaPropriedade].
const customer2 = {
    firstName: 'Maria',
    age: 23,
    job: 'Medic',
};

console.log(customer2);
customer2['lastName'] = 'Silva';
console.log(customer2);

let newKey = 'lastName';
const lastName = 'Ferreira';
customer1[newKey] = lastName;

newKey = 'fullName';
const fullName = `${customer1.firstName} ${customer1.lastName}`;
customer1[newKey] = fullName;
console.log(customer1);

const newCustomer = {
    firstName: 'Kamilly',
    age: 26,
    job: null,
};

newCustomer.lastName = 'Higino';
newProperty = 'fullName'
const fullName = `${newCustomer.firstName} ${newCustomer.lastName}`;
newCustomer[newProperty] = fullName;

console.log(newCustomer);