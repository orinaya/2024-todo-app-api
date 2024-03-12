const { getTodos } = require('../controllers/todoController')
const Todo = require('../models/Todo')
const router = require('express').Router()

router.route('/')
  .get(async (req, res) => {
    try {
      const todos = await getTodos()
      return res.json(todos)
    } catch (error) {
      console.error(error)
      return res.status(500).send(error)
    }
  })

  .post(async (req, res) => {
    console.log(req.body)
    try {
      const _todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
        important: req.body.important
      })

      _todo.save()
    } catch (error) {
      return res.status(500).send(error)
    }
  })

module.exports = router
