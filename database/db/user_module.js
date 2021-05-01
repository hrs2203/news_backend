const user = require("../models/user.js");
const User = require("../models/user.js");


/** Static Function Class For User Model */
class UserDB {

  /**
   * 
   * @param {String} email 
   * @returns if user present ? user : false
   */
  static checkUserPresence(email) {
    return User.findOne({ "email": email })
      .then(userData => (userData === null) ? false : userData)
      .catch(err => false);
  }

  /**
   * 
   * @param {String} user_id
   * @returns if user present ? user : false
   */
  static checkUserPresenceById(user_id) {
    return User.findOne({ "_id": user_id })
      .then(userData => (userData === null) ? false : userData)
      .catch(err => false);
  }

  /**
   *
   * @returns List[UserObject]
   */
  static getAllUser() {
    return User.find().then(data => data).catch(err => []);
  }

  /**
   * 
   * @param {String} userName 
   * @param {String} email 
   * @param {String} password 
   * @returns if user created: user ? null
   */
  static createNewUser(userName, email, password) {
    return UserDB.checkUserPresence(email)
      .then(userObj => {
        if (userObj === false) {
          const newUser = new User({
            "user_name": userName,
            "email": email,
            "password": password,
          });
          return newUser.save().then(data => data).catch(err => err);
        }
        return userObj;
      }).catch(err => null)
  }

  /**
   * 
   * @param {String} user_email 
   * @param {String} user_password 
   * @returns if valid email ? ( if valid password match ? true : false ) : false
   */
  static validateUser(user_email, user_password) {
    return UserDB.checkUserPresence(user_email)
      .then(userObj => {
        if (userObj === false) {
          return false;
        }
        else if (userObj['password'] === user_password) {
          return true;
        }
        return false;
      }).catch(err => null);
  }
}



module.exports = UserDB;