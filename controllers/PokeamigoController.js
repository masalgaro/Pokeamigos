const os = require('os')
const Pokeamigo = require('../models/Pokeamigo')

const getJson = (req, res) => {
    try {
        const amigo = Pokeamigo.getAleatorio()
        res.json({
            id: amigo.id,
            nombre: amigo.nombre,
            altura: amigo.altura,
            habilidad: amigo.habilidad,
            contenedor: os.hostname()
        })
    } catch (err) {
        console.error('Error:', err)
    }
}

const getVisual = (req, res) => {
    try {
        const amigo = Pokeamigo.getAleatorio()
        res.send(`
            <h1>${amigo.nombre}</h1>
            <img src="${amigo.imagen}" alt="${amigo.nombre}" width="300"/>
            <p><i>${amigo["frase-filosofica"]}</i></p>
            <p>Contenedor: ${os.hostname()}</p>
        `)
    } catch (err) {
        console.error('Error:', err)
    }
}

module.exports = { getJson, getVisual }