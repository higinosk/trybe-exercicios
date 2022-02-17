//Metodo que copia os value das key de um ou mais object para outro object:

//Estrutura que recebe PELO MENOS DOIS PARAMETROS (o primeiro sempre será o destino):
// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
};

const info = {
    age: 23,
    job: 'Engenheiro',
};

const family = {
    children: ['Maria', 'Joao'],
    wife: 'Ana',
}

Object.assign(person, info, family)
console.log(person);

const firstName = {
    firstName: 'Roberto',
};

const lastName = {
    lastName: 'Silva',
};

//Sem modificar o primeiro objeto
const newName = Object.assign({},firstName, lastName);
newName.firstName = 'Gilberto';
console.log(newName);
console.log(firstName);