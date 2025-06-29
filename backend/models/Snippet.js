const mongoose = require('mongoose');

const snippetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for the snippet'],
  },
  elements: [
    {
      id: String,
      name: String,
      code: String,
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Snippet', snippetSchema);
