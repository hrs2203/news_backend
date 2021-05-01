const mongoose = require('mongoose');

const NewsSearchSchema = new mongoose.Schema({
  news_title: {
    type: String,
    required: true
  },
  news_link: {
    type: String,
    required: true
  },
  news_time: {
    type: String,
    required: true
  },
  news_category: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("NewsSearch", NewsSearchSchema);