// ParteI-Buscando Elementos

function changeParentColor() {
  let changeParent = document.getElementById(
    "elementoOndeVoceEsta"
  ).parentElement;

  changeParent.style.color = "red";
}
changeParentColor();

function addText() {
  let addTextToFirstChildOfChild = document.getElementById(
    "primeiroFilhoDoFilho"
  );
  addTextToFirstChildOfChild.innerText = "Eu sou o primeiro filho do filho.";
}
addText();

console.log(document.getElementById("pai").firstElementChild);

console.log(
  document.getElementById("elementoOndeVoceEsta").previousElementSibling
);

console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

console.log(
  document.getElementById("pai").lastElementChild.previousElementSibling
);

// parentNode : retorna o nó pai.
// parentElement : retorna o elemento pai.
// childNodes : retorna um NodeList com todos os nós filhos.
// children : retorna um HTMLCollection com todos os elementos filhos.
// firstChild : retorna o primeiro nó filho.
// firstElementChild : retorna o primeiro elemento filho.
// lastChild : retorna o último nó filho.
// lastElementChild : retorna o último elemento filho.
// nextSibling : retorna o próximo nó.
// nextElementSibling : retorna o próximo elemento.
// previousSibling : retorna o nó anterior.
// previousElementSibling : retorna o elemento anterior.