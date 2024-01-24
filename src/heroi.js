

console.log('<<<< Verifique o nível do herói >>>>')

let nome = prompt("Digite o nome do herói: ")
let xp = parseInt(prompt("Digite o XP do herói: "))
var nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "AScendente", "Imortal", "Radiante"];


if (xp < 1000) {
    console.log("O Herói de nome ** " + nome + " ** está no nível de ** " + nivel[0] + " **")
} else if (xp >= 1001 && xp < 2000) {
    console.log("O Herói de nome ** " + nome + " ** está no nível de ** " + nivel[1] + " **")
} else if (xp >= 2001 && xp < 5000) {
    console.log("O Herói de nome ** " + nome + " ** está no nível de ** " + nivel[2] + " **")
} else if (xp >= 5001 && xp < 7000) {
    console.log("O Herói de nome ** " + nome + " ** está no nível de ** " + nivel[3] + " **")
} else if (xp >= 7001 && xp < 8000) {
    console.log("O Herói de nome ** " + nome + " ** está no nível de ** " + nivel[4] + " **")
} else if (xp >= 8001 && xp < 9000) {
    console.log("O Herói de nome ** " + nome + " ** está no nível de ** " + nivel[5] + " **")
} else if (xp >= 9001 && xp < 10000) {
    console.log("O Herói de nome ** " + nome + " ** está no nível de ** " + nivel[6] + " **")
} else {
    console.log("O Herói de nome ** " + nome + " ** está no nível de ** " + nivel[7] + " **")
}
