const express = require('express')
const router = express.Router()
const { Movie } = require('../db/schema')


router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find({})
    res.json(movies)
  } catch (err) {
    res.send(err)
  }
})

router.get('/:id', async (req, res) => {
  try {
      console.log(req.params.id)
    const movie = await Movie.findById(req.params.id)
    res.json(movie)
  } catch (err) {
    res.json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const newMovie = new Movie(req.body.movie)
    const saved = await newMovie.save()
    res.json(saved)
  } catch (err) {
    res.send(err)
  }
})

module.exports = router