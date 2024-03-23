const mongoose = require('mongoose')
const { Schema } = mongoose

const todoSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  images: [{
    type: String
  }],
  status: [{
    type: String,
    enum: ['TODO', 'IN-PROGRESS', 'DONE', 'CANCELED', 'ARCHIVED'],
    default: 'TODO'
  }],
  important: {
    type: Boolean,
    default: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  endDate: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true })

module.exports = mongoose.models.Todo || mongoose.model('Todo', todoSchema)
