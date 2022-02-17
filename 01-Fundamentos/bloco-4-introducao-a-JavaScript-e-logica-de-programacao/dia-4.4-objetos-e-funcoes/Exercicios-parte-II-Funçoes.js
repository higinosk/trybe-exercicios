//Parte II - Funções
//métodos Split, join e reverse

//1) função palindromo

function verificaPalindrome(word) {
  let palindrome = word.split("").reverse().join("");

  if (palindrome === word) {
    return true;
  } else {
    return false;
  }
}

//     let splitString = word.split("");
//     let reverseArray = splitString.reverse();
//     let joinArray = reverseArray.join("");
//     return joinArray;
// }

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));

//2) retorne i índice do menor valor:

// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .


function higherIndex(number) {
    let higherIndex = 0;
    for (let key in number) {
        if (number[higherIndex] < number[key]) {
            higherIndex = key;
            
        }
    }
 return higherIndex   
}

console.log(higherIndex([2, 3, 6, 7, 10, 1]))

//3) menor number

// array de teste [2, 4, 6, 7, 10, 0, -3];
//valor esperado no retorno da função: 6

function minorIndex(number) {
    let minorIndex = 0;
    for (let key in number) {
        if (number[minorIndex] > number[key]) {
            minorIndex = key;
            
        }
    }
 return minorIndex   
}

console.log(minorIndex([2, 4, 6, 7, 10, 0, -3]))

//4) nome com a maior quantidade de caracteres:

// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function higherCharacters(words) {
    let higherCharacters = words[0];
    for (let key in words) {
        if (higherCharacters.length < words[key].length) {
            higherCharacters = words[key];
        }
    }
    return higherCharacters;
}

console.log(higherCharacters(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

//5) numero que mais se repete

function numberRepeats(numbers) {
    let num = {};
    let repeats = 0;
    let number = 0;

    for (let index = 0; index < numbers.length; index += 1) {
        let value = numbers[index];
        if (num[value] === undefined) {
            num[value] = 1;
        } else {
            num[value] = num[value] + 1;
        }
    }

    for (let key in num) {
        if (repeats < num[key]) {
         repeats = num[key];
         number = key;
       }       
    }
        return number;
    }

    console.log(numberRepeats([2, 3, 2, 5, 8, 2, 3]));

