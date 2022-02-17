//Exercicio 1:

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};

testingScope(true);

//Exercicio 2:

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
};

const sortedArray = sortOddsAndEvens();
console.log(
  `Os números ${sortedArray} se encontran ordenados de forma crescente !`
); // será necessário alterar essa linha 😉

//Parte II
//Exercicio 1

const factorial = (number) => {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
};

//recursiva

const factorial = (number) => (number > 1 ? number * factorial(number - 1) : 1);

console.log(factorial(5));

//exercicio 2

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"); // retorna 'aconteceu'
