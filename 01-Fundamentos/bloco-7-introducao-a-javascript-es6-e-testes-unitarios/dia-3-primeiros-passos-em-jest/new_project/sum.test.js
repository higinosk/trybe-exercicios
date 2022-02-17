// const sum = (a, b) => a + b;

// test('sums two values', () => {
//     expect(sum(2, 3)).toEqual(5);
// });

//a funcao/it teste espera 3 argumentos: 1 - Nome do teste: o texto que vai aparecer na execucao.
//2 - funcao contendo as expectativas - onde está o teste.
//3 - opcional - timeout - quanto tempo o jest deve esperar 

// // sum.test.js
// const sum = require('./sum');

// test('sums two values', () => {
//   expect(sum(2, 3)).toBe(5);
// });

//matchers:

//toBe: Igualdade Estrita entre o valor passado para expect e seu argumento. 

//expect(5).toBe("5") vai falhar porque a string "5" nao é igual ao número 5.

//2 formas de atribuir valor variaveis e propriedades do objeto. valor e referencia. 
//toEqual: usado para testar a igualdade de arrays e objetos.

// test('array and object equality', () => {
//   const arr = [1, 2 ,3];
//   const obj = { a: 1, b: 2, c: 3};

//   expect(arr).toBe([1, 2, 3]); // fails
//   expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
//   expect(arr).toEqual([1, 2, 3]); // OK
//   expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
// });

//strings: toMatch
//Arrays: toContain (contem um item particular), toContainEqual (estrutura mais complexa), toHaveLength (verifica o tamanho de array ou string).
//Objetos: toHaveProperty (propriedade especifica.)
//EXCECOES: toThrow (se a funcao é capaz de lancar um erro quando lancada)

const multiplyByTwo = (number) => {
  if (!number) {
    throw new Error('number é indefinido')
  }
  return number * 2;
};
multiplyByTwo(4);

test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
  expect(multiplyByTwo(4)).toBe(8);
});
test('testa se é lançado um erro quando number é indefinido', () => {
  expect(() => { multiplyByTwo() }).toThrow();
});
test('testa se a mensagem de erro é "number é indefinido"', () => {
  expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
});
