const User = require('../models/User')

const createUser = async (user) => {
  // Vérification de la présence d'email ou de password
  if (!user.email || !user.password) {
    throw new Error('missing data')
  }
  const _user = new User({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password
  })
  // On enregistre le user et on récup dans MongoDB
  const savedUser = await _user.save()

  // Retirer le password de la route
  const savedUserObject = savedUser.toObject()
  delete savedUserObject.password
  // On renvoit le user dans la réponse de l'API
  return savedUserObject
}

module.exports = {
  createUser
}
