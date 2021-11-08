//COOKIES: par-chave. Salva no proprio dispositivo da pessoa e serão removidos quando o brownser for fechado.

document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2021 12:00:00 UTC; path=/";
// criar e alterar cookies pela propriedade document.cookie, se pode definir uma data de expiração

const myCookie = document.cookie;
console.log(myCookie) // retorna a string contendo o nome e o valor ex. email=isabella@email.com

//Deletar cookies é só usar uma data que já passou
document.cookie = "email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;"

//LOCAL E SESSION STORAGE chave-valor (objetos)
//local salva o dados sem data de expiração e ficam disponiveis até serem excluidos.
//session armazena dados apenas na sessão
