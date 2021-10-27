//Criando Elementos 

//1
let pai = document.getElementById("pai");

let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = "elementoOndeVoceVaiEstar";


pai.appendChild(irmaoElementoOndeVoceEsta);


//2
let elementoOndeVoceEsta = document.getElementById("elementoOndeVoceEsta");

let filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = "novoFilhoDoFiho";

elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

//3
let primeiroFilhoDoFilho = document.getElementById("primeiroFilhoDoFilho");

let filhoPrimeiroFilhoDoFilho = document.createElement('section');
filhoPrimeiroFilhoDoFilho.id = "PrimeiroFilhoDoFilhoDoFilho";

primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho);

//4 A partir desse filho criado, acesse terceiroFilho .

console.log(document.getElementById("PrimeiroFilhoDoFilhoDoFilho").parentElement.parentElement.nextElementSibling);

