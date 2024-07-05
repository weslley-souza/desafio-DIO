//INTERFACE DE INTERAÇÃO COM USUARIO

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//VARIAVEIS
let categoria = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let heroi = "Ronoroa Zoro"
let xp;  




rl.question (`XP do seu Heroi: `, (resposta) => {
    xp = parseInt(resposta);


if (xp >= 500 && xp <= 1000){
    console.log(`O Herói ${heroi} está no nível ${categoria[0]}.`); // Ferro

} else if (xp > 1000 && xp <= 2000) {
    console.log(`O Herói ${heroi} está no nível ${categoria[1]}.`); // Bronze

}else if (xp > 2000 && xp <= 5000){
    console.log(`O Herói ${heroi} está no nível ${categoria[2]}.`); // Prata

}else if (xp > 5000 && xp <= 7000) {
    console.log(`O Herói ${heroi} está no nível ${categoria[3]}.`); // Ouro

}else if (xp > 7000 && xp <= 8000) {
    console.log(`O Herói ${heroi} está no nível ${categoria[4]}.`); // Platina

}else if (xp > 8000 && xp <= 9000) {
    console.log(`O Herói ${heroi} está no nível ${categoria[5]}.`); // Ascendente

}else if (xp > 9000 && xp <= 10000) {
    console.log(`O Herói ${heroi} está no nível ${categoria[6]}.`); // Imortal

}else if (xp > 10000) {
    console.log(`O Herói ${heroi} está no nível ${categoria[7]}.`); // Radiante

}else {
    console.log("Heroi em Treinamento! ")
}

rl.close();

});














