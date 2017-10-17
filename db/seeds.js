require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { User, Movie, Review} = require('./schema')

const americanHistoryXReview1 = new Review({
    title: 'American History X movie review',
    tagline: 'Some Legacies Must End.',
    poster: 'https://i.imgur.com/piCxWTp.jpg',
    review: 'Edward Norton gives a blistering and memorable performance.'
})

const titanicReview1 = new Review({
    title: 'Titanic movie review',
    tagline: 'Nothing On Earth Could Come Between Them.',
    poster: 'https://i.imgur.com/Ug53wZq.jpg',
    review: 'The role of Leonardo Dicaprios career.'
})

const theTexasChainsawMassacreReview1 = new Review ({
    title: 'The Texas Chainsaw Massacre',
    tagline: "What you know about fear doesnt come close to this.",
    poster: "https://i.imgur.com/dMeIjLx.jpg",
    review: 'This movie changed my life.'

})

const theTownReview1 = new Review({
    title: 'The Town movie review',
    tagline: 'Welcome To The Bank Robbery Capital Of America.',
    poster: 'https://i.imgur.com/Ebu87Lz.jpg',
    review: 'Ben Affleck and Jeremy Renner turn in the role of a lifetime.'
})

const titanic = new Movie({
  title: 'https://i.imgur.com/Ug53wZq.jpg',
  description: "Two passengers fall in love on the ill fated ship.",
  reviews: [titanicReview1]
})
const americanHistoryX = new Movie({
  title: 'https://i.imgur.com/piCxWTp.jpg',
  description: "An older brother tries to stop his younger brother from following in his footsteps.",
    reviews: [americanHistoryXReview1]
})

const theTexasChainsawMassacre = new Movie ({
    title: 'https://i.imgur.com/dMeIjLx.jpg',
    description: "Five friends run into Leatherface and his deadly clan.",
    reviews: [theTexasChainsawMassacreReview1]
})

const theTown = new Movie({
    title: 'https://i.imgur.com/Ebu87Lz.jpg',
    description: "Doug MacRay leads a gang of bank robbers in Boston.",
    poster: "https://i.imgur.com/Ebu87Lz.jpg",
    reviews: [theTownReview1]
  })

const jasonVoorhees = new User({
  userName: 'jason_voorhees',
})

// Uses promises to make sure remove is run first, then saves new user.
User.remove({})
  .then(() => jasonVoorhees.save())
  .then(() => console.log('User Saved'))
Movie.remove({})
    .then(() => titanic.save())
    .then(() => theTown.save())
    .then(() => americanHistoryX.save())
    .then(() => theTexasChainsawMassacre.save())
    .then(() => console.log('Movie Saved'))
    .then(() => mongoose.connection.close())