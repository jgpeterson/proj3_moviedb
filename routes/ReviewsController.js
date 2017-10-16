const express = require('express') 
const router = express.Router({mergeParams: true})
const { Movie, Review } = require('../db/schema')

// const movie = await Movie.findById(req.params.userId)
// movie.reviews.push(newReview)
// const saved = await movie.save
// res.json(saved)


router.patch('/:id', async (req, res) => {
    const updatedReview = req.body.review
    const movie = await User.findById(req.params.UserId)
    const review = user.reviews.id(req.params.id)


    review.title = updatedReview.title
    review.tagline = updatedReview.tagline
    review.review = updatedReview.review

    const saved = await movie.save()
    res.json(saved)
})

router.delete('/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.movieId)
    movie.reviews.id(req.params.id).remove()
    const saved = await movie.save()
    res.json(saved) 
})

module.exports = router