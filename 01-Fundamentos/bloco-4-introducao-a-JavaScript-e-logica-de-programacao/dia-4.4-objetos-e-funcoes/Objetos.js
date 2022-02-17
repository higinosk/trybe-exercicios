// //Objetos = chave:valor

// let singer = {
//     // = atribuição
//     //{~} object literal {} chave do objeto = Propriedade

//     name: 'Milton',
//     lastName: 'Nascimento',
//     //cameo case minuscula + maiuscula
//     nickname: 'Bituca',
//     age: 77,
//     bestAlbuns: ['Travessia', 'Clube da Esquina', 'Minas'],
//     //Objetos podem ter outros objetos com valores;
//     bornInfo: {
//         city: 'Rio de Janeiro',
//         state: 'Rio de janeiro'
//     }
// };

// //acessar ou adicionar valores na propriedade

// console.log('O cantor ' + singer.name + ' ' + singer.lastName + ' possui ' + singer.age + ' anos.')

// console.log('O cantor ' + singer['name'] + ' ' + singer['lastName'] + ' possui ' + singer['age'] + ' anos.')

// // chaves ou . : chaves criar propriedades novas de forma dinamica

// singer['fullName'] = singer.name + ' ' + singer.lastName;
// console.table(singer);

// console.log('O cantor ' + singer.fullName + ' possui ' + singer.age + ' anos e nasceu no estado do ' + singer.bornInfo.state)

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    },
};

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.')

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(player);

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.')

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')