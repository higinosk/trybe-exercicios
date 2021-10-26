// getElementsbyClassName retorna varios elementos de uma classe.

let pilotoF1Atual  = document.querySelectorAll(".piloto-f1-atual");

for (let index = 0; index < pilotoF1Atual.length; index += 1) {
   pilotoF1Atual[index].innerText = "Lewis Hamilton";
};
    

//getElementsByTagName Os elementos que vem retornam em lista de elementos e nunca apenas um elemento com acesso direto.

// document.querySelectorAll("span")[0].innerText = "Carlos Sainz"

// document.querySelector("#Dona");

// document.querySelector(".pilotos-sem-titulo p");
// document.querySelector(".pilotos-sem-titulo .piloto-f1-atual")

// document.querySelectorAll(".pilotos-sem-titulo .piloto-f1-atual")

// document.querySelectorAll("p")[0].innerText = "Lenda";