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
  const user = await User.findByIdAndRemove(req.params.id)
  // Send the user object
  res.json("deleted")
})




module.exports = router