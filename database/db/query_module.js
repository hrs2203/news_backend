const UnseenQuery = require("../models/query.js");

class UnseenQueryDB {

  /**
   * Check query presence
   * 
   * @param {String} que 
   * @returns { Boolean } true || false || null
   */
  static checkQueryPresence(que) {
    que = que.toLowerCase();
    return UnseenQuery.findOne({ query: que }).then(
      data => ((data === null) ? false : true)
    ).catch(err => null)
  }

  /**
   * List of all present search queries
   * 
   * @returns List [ SearchObject ]
   */
  static getAllQuery(){
    return UnseenQuery.find().then(data => data).catch(err => []);
  }
  
  /**
   * Create new entry when needed
   * 
   * @param {String} que
   * @returns {object} newly created result
   */
  static addNewQuery(que) {
    que = que.toLowerCase();
    return UnseenQueryDB.checkQueryPresence(que)
      .then(result => {
        if (result === null) return false
        else if (result === true) {
          return UnseenQuery.findOne({ query: que })
            .then(data => data).catch(err => null)
        }
        else {
          const new_data = new UnseenQuery({ "query": que });
          return new_data.save().then(resp => new_data).catch(err => false);
        }
      }).catch(err => false)
  }

  /**
   * Delete old entry when needed
   * @param {String} que 
   * @returns {boolean} weather deleted or not || `null` in case of error
   */
  static removeOldQuery(que) {
    que = que.toLowerCase();
    return UnseenQueryDB.checkQueryPresence(que)
      .then(data => {
        if ((data === false) || (data === null)) {
          return true;
        } else {
          return UnseenQuery.delete({ query: que }).then(resp => true).catch(err => false);
        }
      }).catch(err => null);
  }

}

module.exports = UnseenQueryDB;