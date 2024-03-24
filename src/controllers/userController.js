const User = require('../models/User')

const createUser = async (user) => {
  if (!user.email || !user.password) {
    throw new Error('missing data')
  }
  const _user = new User({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password
  })
  const savedUser = await _user.save()

  const savedUserObject = savedUser.toObject()
  delete savedUserObject.password
  return savedUserObject
}

module.exports = {
  createUser
}
