const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const os = require('os')

function getPokeamigoAleatorio() {
  const db = JSON.parse(fs.readFileSync(path.join(__dirname, '../pokeamigos-db.json'), 'utf-8'));
  const lista_amigos = db["reg-pokeamigos"];
  const num_amigo = Math.floor(Math.random() * lista_amigos.length);
  return lista_amigos[num_amigo];
}

router.get('/pokeamigo', (req, res) => {
  try {
    const amigo = getPokeamigoAleatorio();
    res.json({
      id: amigo.id,
      nombre: amigo.nombre,
      altura: amigo.altura,
      habilidad: amigo.habilidad,
      contenedor: os.hostname()
    });
  } catch (err) {
    console.error('Error leyendo base de datos:', err);
  }
})

router.get('/pokeamigo/visual', (req, res) => {
  try {
    const amigo = getPokeamigoAleatorio();
    res.send(`
      <h1>${amigo.nombre}</h1>
      <img src="${amigo.imagen}" alt="${amigo.nombre}" width="300"/>
      <p><i>${amigo["frase-filosofica"]}</i></p>
      <p>Contenedor: ${os.hostname()}</p>
    `)
  } catch (err) {
    console.error('Error leyendo base de datos:', err);
  }
})

module.exports = router