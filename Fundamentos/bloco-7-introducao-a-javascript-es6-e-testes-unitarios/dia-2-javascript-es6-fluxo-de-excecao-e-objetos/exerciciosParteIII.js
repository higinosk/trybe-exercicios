//Para os exercícios a seguir, use o seguinte código:

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

console.log('1.Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela:')
console.log('')
const addNewKey = (obj, key, value) => {
  obj[key] = value;
};
console.log(addNewKey(lesson2, 'turno', 'noite'));
console.log('')

console.log('2.Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro:')
console.log('')
const listOfKeys = (obj) => Object.keys(obj);
console.log(listOfKeys(lesson1));
console.log('')

console.log('3.Crie uma função para mostrar o tamanho de um objeto.')
console.log('')
const sizeObj = (obj) => Object.keys(obj).length;
console.log(sizeObj(lesson1));
console.log('')

console.log("4.Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.")
console.log('')
const valuesObj = (obj) => Object.values(obj);
console.log(valuesObj(lesson1));
console.log('')

console.log("5. Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:")
console.log('')
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);
console.log('')

console.log("6.Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.")
console.log('')

console.log("7.Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:");
console.log('')
const getValueByNumber = (keyValue, position) => Object.values(keyValue)[position];
console.log('')
console.log(getValueByNumber(lesson1, 0));

console.log("8.Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:");
console.log('')
//  Object.entries if param isEqual
const verifyPair = (obj, key, value) => {
    const keyValue = Object.entries(obj);
    let isEqual = false;
    for (let i in keyValue) {
    if (keyValue[i][0] === key && keyValue[i][1] === value) isEqual = true;
}
return isEqual;
};
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false