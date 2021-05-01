const mongoose = require('mongoose');

const UnseenQuerySchema = new mongoose.Schema({
  query: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("UnseenQuery", UnseenQuerySchema);