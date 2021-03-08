const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
  news_title: {
    type: String,
    required: true
  },
  news_category_id: {
    type: String,
    required: true
  },
  news_static_link: {
    type: String,
    required: true
  },
  news_total_visits: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model("News", NewsSchema);