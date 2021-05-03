const News = require("../models/news.js");


class NewsSearchDB {

  /**
   * entire search space
   * @returns List[News]
   */
  static getEntireSearch() {
    return News.find()
      .select("news_title news_url news_publishedAt news_category_id news_author")
      .then(data => data).catch(err => [])
  }

  /**
   * filter news from news_module itself
   * 
   * @param {String} news_title 
   * @returns List[News]
   */
  static searchNews(news_title) { }

}

module.exports = NewsSearchDB;