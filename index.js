const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const os = require('os')
const port = 3000

let db;

app.get('/api/v1/pokeamigo', (req, res) => {
  try {
    db = JSON.parse(fs.readFileSync(path.join(__dirname, 'pokeamigos-db.json'), 'utf-8'));
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

app.listen(port, () => {
  console.log(`Ejecutándose en el puerto: ${port}`);
})

