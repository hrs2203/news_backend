const UserDetail = require("../models/user_details.js");

/** Static Function Class For User Detail Model */
class UserDetailDB {

  /**
   * 
   * @param {String} user_object_id 
   * @returns user detail for that entity else false if invalid entry
   */
  static checkUserDetailPresence(user_object_id) {
    return UserDetail.findOne({ "user_id": user_object_id })
      .then(data => (data === null) ? false : data).catch(err => false);
  }

  /**
   * 
   * @param {String} user_object_id 
   * @param {Object} news_token
   * @returns neuly update user history
   * 
   * @example
   * news_token: {
   *  "news_title": String,
   *  "news_link": String,
   *  "news_time": String,
   *  "news_category": String
   * }
   */
  static updateUserDetail(user_object_id, news_token) {
    return UserDetail.findOne({ "user_id": user_object_id })
      .then(userObj => {
        if (userObj === null) false;

        var objVisitHistory = userObj['user_visit_history'];
        objVisitHistory.push(news_token);

        return userObj.updateOne({
          "user_visit_history": objVisitHistory
        }).then(savedData => savedData).catch(err => err);

      }).catch(err => err);
  }


  /**
   * Clean User history for a fresh start
   * 
   * @param {String} user_obj_id 
   */
  static cleanUserHistory(user_obj_id){
    return UserDetail.findOne({"user_id": user_obj_id})
      .then(userObj => {
        if (userObj === null) return false;
        var objVisitHistory = [];
        return userObj.updateOne({
          "user_visit_history": objVisitHistory
        }).then(savedData => savedData).catch(err => err);
      }).catch(err => err);
  }

  /**
   * Creates new user_detail instance.
   * @param {String} user_object_id 
   * @returns user_detail instance
   */
  static createNewUserDetail(user_object_id) {
    return UserDetailDB.checkUserDetailPresence(user_object_id)
      .then(userDetailObject => {
        if (userDetailObject === false) {
          const newUserDetail = new UserDetail({
            "user_id": user_object_id,
            "user_visit_history": []
          });
          return newUserDetail.save().then(data => data).catch(err => err);
        }
        return userDetailObject;
      }).catch(err => err);


  }

}

module.exports = UserDetailDB;