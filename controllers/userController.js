import User from '../models/userModel.js'

export const getUsers = async (req, res) => {
  const users = await User.find()
  res.json(users)
}

export const createUser = async (req, res) => {
  const { name, email } = req.body
  const user = new User({ name, email })
  const savedUser = await user.save()
  res.status(201).json(savedUser)
}
