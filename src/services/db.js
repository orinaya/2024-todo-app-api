const mongoose = require('mongoose')

async function init () {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}
      ?retryWrites=true&w=majority&appName=B2-Cluster`
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
