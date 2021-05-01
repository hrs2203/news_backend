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
  news_author: {
    type: String,
    required: true
  },
  news_description: {
    type: String,
    required: true
  },
  news_url: {
    type: String,
    required: true
  },
  news_urlToImage: {
    type: String,
    required: true
  },
  news_publishedAt: {
    type: String,
    required: true
  },
  news_content: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("News", NewsSchema);