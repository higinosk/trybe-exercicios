if (true) {
  // inicio do escopo do if
  let userAge = "20";
  console.log(userAge); // 20
  // fim do escopo do if

}
  console.log(userAge); // 20

  //Substrita gera erros
var userName = "Isabella";
var userName = "Lucas";
console.log(userName); // Resultado: Lucas

//O valor atribuido ao const é imutavél, ou seja, não pode ser alterado.
const favoriteLanguage = "Javascript";
favoriteLanguage = "Python";
console.log(favoriteLanguage); // Erro

//Templete Literals:

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

//Ternary Operator:

// A sintaxe básica do operador ternário é muito simples:
`expressão verdadeira ou falsa` ? `retorno se verdadeira` : `retorno se falsa`;

// Assim, por exemplo, podemos ter expressões com a seguinte estrutura:
const trueExpression = (1 + 1 === 2) ? `isso é verdade` : `isso é mentira`;
console.log(trueExpression) // isso é verdade

const falseExpression = (2 + 2 === 3) ? `isso é verdade` : `isso é mentira`;
console.log(falseExpression) // isso é mentira
