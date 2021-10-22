//Parte I - Objetos e For/in

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

//1) Imprimir mensagem de boas-vindas:

console.log("Bem-vinda, " + info.personagem);

//2) criar propriedade 'recorrente' com valor 'Sim'.

info["recorrente"] = 'sim';

console.log(info);

//3) for/in mostrando propriedades;
for (let key in info) {
  console.log(key);
}


//4) for/in mostrando valores;
for (let key in info) {
  console.log(info[key]);
}

//5) imprimir // //Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

let info2 = {
  personagem: "Tio Patinhas",
  origem: ["Christmas on Bear Mountain", " Dell's Four Color Comics #178"],
  nota: "O último MacPatinhas",
  recorrente: 'sim'
};

for (const key in info) {
    if (
        key === 'recorrente' &&
        info[key] === 'sim' &&
        info2[key] === 'sim'
    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
}

