const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const os = require('os')

router.get('/pokeamigo', (req, res) => {
  let db;
  try {
    db = JSON.parse(fs.readFileSync(path.join(__dirname, '../pokeamigos-db.json'), 'utf-8'));
  } catch (err) {
    console.error('Error leyendo base de datos:', err); 
  }

  const lista_amigos = db["reg-pokeamigos"];
  const num_amigo = Math.floor(Math.random() * lista_amigos.length);

  res.json({
    ...lista_amigos[num_amigo],
    contenedor: os.hostname()
  });
})

router.get('/pokeamigo/visual', (req, res) => {
  let db;
  try {
    db = JSON.parse(fs.readFileSync(path.join(__dirname, '../pokeamigos-db.json'), 'utf-8'));
  } catch (err) {
    console.error('Error leyendo base de datos:', err); 
  }

  const lista_amigos = db["reg-pokeamigos"];
  const num_amigo = Math.floor(Math.random() * lista_amigos.length);
  const amigo = lista_amigos[num_amigo];

  res.send(`
    <h1>${amigo.nombre}</h1>
    <img src="${amigo.imagen}" alt="${amigo.nombre}" width="300"/>
    <p><i>${amigo["frase-filosofica"]}</i></p>
    <p>Contenedor: ${os.hostname()}</p>
  `)
})

module.exports = router