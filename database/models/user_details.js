const mongoose = require('mongoose');

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