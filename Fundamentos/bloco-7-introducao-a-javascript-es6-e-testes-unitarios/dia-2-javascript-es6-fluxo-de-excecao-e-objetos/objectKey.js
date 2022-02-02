//objetos sao um dos tipos de dados em js que possuem uma estrutura de CHAVE e VALOR.

//Como listar as chaves desse objeto:

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

// for (const key in coolestTvShow) {
//     console.log(key);
// }

//o metodo Object.keys() retorna um array de um determinado objeto, na mesma ordem em que é fornecida por ForIn
//sintaxe: Object.keys(obj)
//obj: parametro

console.log(Object.keys(coolestTvShow));

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
        console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
};

console.log('Estudante 1');
listSkills(student1);

console.log('Estudante 2');
listSkills(student2);