let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1)Ordene o array numbers em ordem crescente e imprima seus valores;

// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] < array[secondIndex]) {
//         let position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
// }
// console.log(array);

//2) Ordene o array numbers em ordem decrescente e imprima seus valores;

// for (let index = 1; index < array.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (array[index] > array[secondIndex]) {
//         let position = array[index];
//         array[index] = array[secondIndex];
//         array[secondIndex] = position;
//       }
//     }
// }
// console.log(array);

//3)

// let novoArray = [];

// for (let index = 0; index < array.length; index +=1) {
//     if(index + 1 < array.length) {
//         novoArray.push(array[index] * array[index +1]);
//     } else {
//         novoArray.push(array[index] *2);
//     }
// }
// console.log(novoArray);