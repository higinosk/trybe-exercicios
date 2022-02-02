//Segue a mesma lógica que o object.keys, a diferenca é que ele lista os valores de cada chave.

//liste os valores de cada chave do objeto:

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  createdBy: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

//Codigo com ForIn
// for (const qualquerNomeParaEssaConst in coolestTvShow) {
//   console.log(coolestTvShow[qualquerNomeParaEssaConst]);
// }

//Refatorando o codigo usando values:

console.log(Object.values(coolestTvShow));

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));