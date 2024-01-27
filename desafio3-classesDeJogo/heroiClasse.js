class heroi {


    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ['magia', 'espada', 'artes marciais', 'shuriken']
    }

    atacar() {
        if (this.tipo === 'mago') {
            return `O ${this.tipo} atacou usando ${this.ataque[0]}.`
        } else if (this.tipo === 'guerreiro') {
            return `O ${this.tipo} atacou usando ${this.ataque[1]}.`
        } else if (this.tipo === 'monge') {
            return `O ${this.tipo} atacou usando ${this.ataque[2]}.`
        } else if (this.tipo === 'ninja') {
            return `O ${this.tipo} atacou usando ${this.ataque[3]}.`
        } else {
            return "Tipo de player não encontrado"
        }

    }
}
