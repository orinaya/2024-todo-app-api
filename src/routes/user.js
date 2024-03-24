const { createUser } = require('../controllers/userController')
const router = require('express').Router()

router.route('/')

  .post(async (req, res) => {
    try {
      const user = req.body
      createUser(user, (error, result) => {
        if (error) {
          return res.status(403).send(error)
        }
        return res.send(result)
      })
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

module.exports = router
