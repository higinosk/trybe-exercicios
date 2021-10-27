//removendo elementos removeChild()

let pai = document.getElementById('pai');

for (let index = pai.childNodes.length -1; index >= 0; index -= 1) {
    let currentChildren = pai.childNodes[index];
    if(currentChildren.id != 'elementoOndeVoceEsta') {
        currentChildren.remove();
    }    
}

let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();