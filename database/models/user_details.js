const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  user_visit_history: {
      type: Map,
      of: Number,
  }
});

module.exports = mongoose.model("News", NewsSchema);