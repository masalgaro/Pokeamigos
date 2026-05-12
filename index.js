const express = require('express')
const app = express()
const port = 80

const pokeamigoRoutes = require('./routes/pokeamigo')
app.use('/api/v1', pokeamigoRoutes)

app.listen(port, () => {
  console.log(`Ejecutándose en el puerto: ${port}`)
})