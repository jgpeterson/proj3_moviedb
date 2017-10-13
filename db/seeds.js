require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
mongoose.Promise = global.Promise

const { User, Movie, Review} = require('./schema')

const americanHistoryXReview1 = new Review({
    title: 'American History X movie review',
    tagline: 'Some Legacies Must End.',
    review: 'Edward Norton gives a blistering and memorable performance.'
})

const titanicReview1 = new Review({
    title: 'Titanic movie review',
    tagline: 'Nothing On Earth Could Come Between Them.',
    review: 'The role of Leonardo Dicaprios career.'
})

const theTownReview1 = new Review({
    title: 'The Town movie review',
    tagline: 'Welcome To The Bank Robbery Capital Of America.',
    review: 'Ben Affleck and Jeremy Renner turn in the role of a lifetime.'
})

const titanic = new Movie({
  title: 'Titanic',
  description: "Two passengers fall in love on the ill fated ship.",
  reviews: [titanicReview1]
})
const americanHistoryX = new Movie({
  title: 'American History X',
  description: "An older brother tries to stop his younger brother from following in his footsteps.",
    reviews: [americanHistoryXReview1]
})

const theTown = new Movie({
    title: 'The Town',
    description: "Doug MacRay leads a gang of bank robbers in Boston.",
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
    .then(() => mongoose.connection.close())