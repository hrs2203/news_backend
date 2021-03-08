const mongoose = require('mongoose');

const NewsCategorySchema = new mongoose.Schema({
  news_category_name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("NewsCategory", NewsCategorySchema);