const express = require('express')
const router = express.Router()
const { Movie } = require('../db/schema')


router.get('/', async (req, res) => {
  try {
    const Movies = await Movie.find({})
    res.json(users)
  } catch (err) {
    res.send(err)
  }
})

router.get('/:id', async (res, req) => {
  try {
    const movie = await Movie.findById(req.params.id)
    res.json(user)
  } catch (err) {
    res.send(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const newMovie = new Movie(req.body.user)
    const saved = await newMovie.save()
    res.json(saved)
  } catch (err) {
    res.send(err)
  }
})

module.exports = router