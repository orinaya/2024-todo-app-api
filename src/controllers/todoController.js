const Todo = require('../models/Todo')

async function getTodos () {
  const todos = await Todo.find()
  console.log(todos)
  return todos
}

module.exports = {
  getTodos
}
