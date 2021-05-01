const news_search = require("../models/news_search.js");

class NewsSearchDB {

  /**
   * entire search space
   * @returns List[news_search]
   */
  static getEntireSearch() {
    return news_search.find().then(data => data).catch(err => [])
  }

  /**
   * 
   * @param {String} news_title 
   * @returns List[news_search]
   */
  static searchNews(news_title) { }

  /**
   * Add new news search instance
   * 
   * @param {object} news_object
   * @example
   * {
   *  news_title: String,
   *  news_link: String,
   *  news_time: String,
   *  news_category: String,
   * }
   * @returns {boolean} if created ? true : false
   */
  static addNews(news_object) { }



}

module.exports = NewsSearchDB;