const { loginUser } = require('../controllers/authController')

const router = require('express').Router()

router.route('/login')
  .post(async (req, res) => {
    try {
      const credentials = req.body
      loginUser(credentials, (error, result) => {
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
