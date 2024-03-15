const Todo = require('../models/Todo')

async function getTodos (userId) {
  const todos = await Todo.find({
    user: { $eq: userId }
  })
  return todos
}

async function createTodo (todo, userId) {
  if (todo && userId) {
    const _todo = new Todo({
      title: todo.title,
      description: todo.description,
      status: todo.status,
      important: todo.important,
      user: userId
    })
    await _todo.save()
  } else {
    throw new Error('Todo is missing')
  }
}

async function updateTodo (todo) {
  if (todo) {
    const { _id } = todo
    const _todo = todo
    delete _todo._id
    await Todo.findByIdAndUpdate(_id, _todo)
  } else {
    throw new Error('Todo is missing')
  }
}

async function deleteTodo (id) {
  if (id) {
    await Todo.deleteOne({ _id: id })
  } else {
    throw new Error('ID is missing')
  }
}

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
}
