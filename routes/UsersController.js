const express = require('express')
const router = express.Router()
const { User } = require('../db/schema')


router.get('/', async (req, res) => {
  try {
    const users = await User.find({})
    res.json(users)
  } catch (err) {
    res.send(err)
  }
})

router.get('/:id', async (res, req) => {
  try {
    const user = await User.findById(req.params.id)
    res.json(user)
  } catch (err) {
    res.send(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const newUser = new User(req.body.user)
    const saved = await newUser.save()
    res.json(saved)
  } catch (err) {
    res.send(err)
  }
})

router.delete('/:id', async (req, res) => {
  // Find the user
  const user = await User.findById(req.params.userId)
  // Find the specific idea and remove it from the array
  user.ideas.id(req.params.id).remove()
  // Save the updated user
  const saved = await user.save()
  // Send the user object
  res.json(saved)
})

module.exports = router