//funcao comum
const sum = (value1, value2) => value1 + value2;

console.log(sum(2,3));

// funcao com condicional 
const sum = (value1, value2) => {
  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return 'Os valores devem ser numéricos';
  }
  return value1 + value2;
};

console.log(sum(2, '3'));

//funcao com fluxo de excecao: throw "Erro customizado"

const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        //new construtor[([argumentos])]: cria instancia 
        // construtor: especifica o tipo da instancia, no caso Error(nativo)
        //argumentos: valores com as quais o construtor vai ser chamado.
        throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
};
console.log(sum(2,'3'));

//funcao refatorada com try e catch
const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
        throw new Error('Os valores devem ser númericos');
    }
};

const sum = (value1, value2) => {
    try {
        verifyIsNumber(value1, value2);
        return value1 + value2;
    } catch (error) {
        throw error.message
    }
};

console.log(sum(2, '3'));
