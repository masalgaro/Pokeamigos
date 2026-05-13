const express = require('express')
const router = express.Router()
const PokeamigoController = require('../controllers/PokeamigoController')

router.get('/pokeamigo', PokeamigoController.getJson)
router.get('/pokeamigo/visual', PokeamigoController.getVisual)

module.exports = router