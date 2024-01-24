function calcularVitorias(lutas, derrotas) {
    var saldoVitorias = lutas - derrotas

    if (saldoVitorias < 10) {
        console.log("O Herói tem saldo de ** " + saldoVitorias + "** está no nivel de ** " + nivel[0] + " **")
    } else if (saldoVitorias > 11 && saldoVitorias <= 20) {
        console.log("O Herói tem saldo de ** " + saldoVitorias + "** está no nivel de ** " + nivel[1] + " **")
    } else if (saldoVitorias > 21 && saldoVitorias <= 50) {
        console.log("O Herói tem saldo de ** " + saldoVitorias + "** está no nivel de ** " + nivel[2] + " **")
    } else if (saldoVitorias > 11 && saldoVitorias <= 80) {
        console.log("O Herói tem saldo de ** " + saldoVitorias + "** está no nivel de ** " + nivel[3] + " **")
    } else if (saldoVitorias > 11 && saldoVitorias <= 90) {
        console.log("O Herói tem saldo de ** " + saldoVitorias + "** está no nivel de ** " + nivel[4] + " **")
    } else if (saldoVitorias > 11 && saldoVitorias <= 100) {
        console.log("O Herói tem saldo de ** " + saldoVitorias + "** está no nivel de ** " + nivel[5] + " **")
    } else if (saldoVitorias <= 101) {
        console.log("O Herói tem saldo de ** " + saldoVitorias + "** está no nivel de ** " + nivel[6] + " **")
    }
}


let lutas = parseInt(prompt("Digite o número de lutas do herói: "))
let derrotas = parseInt(prompt("Digite a quantidade de derrotas do herói: "))
var nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];

calcularVitorias(lutas, derrotas)

