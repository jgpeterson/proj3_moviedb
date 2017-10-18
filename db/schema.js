const mongoose = require('mongoose')


const reviewSchema = mongoose.Schema({
    tagline: String, 
    poster: String,
    purchase: String,
    trailer: String,
    screenshot: String,
    review: String
})

const movieSchema = mongoose.Schema({
  title: {
    type: String,
    default: 'New Review'
  },
  description: {type: String, default: 'New Movie Review'},
  createdAt: {type: Date, default: Date.now},
  reviews: [reviewSchema]
})

const userSchema = mongoose.Schema({
    userName: String,
    company: String, // For mock log-in. Do not enter actual passwords
})

const Movie = mongoose.model('Movie', movieSchema)
const User = mongoose.model('User', userSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
  Movie, User, Review
}