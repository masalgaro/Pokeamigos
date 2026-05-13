const fs = require('fs')
const path = require('path')

class Pokeamigo {
    /**
     * POKEAMIGO ATTRIBUTES
     * this.id - int
     * this.nombre - string
     * this.altura - string
     * this.habilidad - string
     * this.imagen - string
     * this.frase-filosofica - string
     */

    static getAll() {
        const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../pokeamigos-db.json'), 'utf-8'))
        return db["reg-pokeamigos"]
    }

    static getAleatorio() {
        const lista = Pokeamigo.getAll()
        return lista[Math.floor(Math.random() * lista.length)]
    }
}

module.exports = Pokeamigo