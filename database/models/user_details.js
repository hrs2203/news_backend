const mongoose = require('mongoose');

const UserHistorySchema = new mongoose.Schema({
  news_title: String,
  news_link: String,
  news_time: String,
  news_category: String
})

const UserDetailSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  user_visit_history: {
    type: [],
    default: []
  }
});

module.exports = mongoose.model("UserDetail", UserDetailSchema);