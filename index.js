const express = require('express')
const fs = require('fs')
const app = express()
const os = require("os")
const port = 80

// Lectura del JSON 
fs.readFile('pokeamigos-db.json', 'utf-8', (err, data) => {
  if (err) throw err;

  const pokeamigos_db = JSON.parse(data);

  console.log(pokeamigos_db);
});

// Middleware para conseguir un amigo aleatorio
app.use((req, res, next) => {
  const num_amigo = Math.floor(Math.random() * Object.keys(pokeamigos_db.shareInfo[i]).length);
  next();
});

app.get('/', (req, res) => {
});
