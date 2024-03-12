const mongoose = require('mongoose')

async function init () {
  try {
    await mongoose.connect(
      'mongodb+srv://todoApp:aC2wt8m1ef5a1May@b2-cluster.h5ewon6.mongodb.net/Todos?retryWrites=true&w=majority&appName=B2-Cluster'
    )
    console.info('MongoDB connected')
  } catch (error) {
    console.error(error)
  }
}

function close () {
  mongoose.connection.close()
}

module.exports = {
  init, close
}
