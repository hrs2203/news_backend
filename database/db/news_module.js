const News = require("../models/news.js");
const NewsCategoryDB = require("./news_category_module.js");

/** Static Function Class For News Model */
class NewsDB {

  /**
   * @returns List [ News_Object ]
   */
  static getAllNews() {
    return News.find().select("news_title")
      .then(data => data).catch(err => err);
  }

  /**
   * 
   * @param {String} news_id 
   * @returns news_object || false || null
   */
  static getNews(news_id) {
    return News.findOne({ "_id": news_id })
      .then(newsObj => (newsObj === null) ? false : newsObj)
      .catch(err => null);
  }

  /**
   * 
   * @param {String} news_category
   * @returns List [ news_object ] with news_object.category = news_category
   */
  static getNewsByCategory(news_category) {
    return NewsCategoryDB.checkNewsCategoryPresence(news_category)
      .then(category_obj => {
        if (category_obj === false) [];
        return News.find({ "news_category_id": category_obj._id })
          .then(newsList => newsList).catch(err => err);
      }).catch(err => err);
  }

  /**
   * 
   * @param {String} news_id 
   * @returns news_object || false || null
   */
  static checkNewsPresence(news_id) {
    return News.findOne({ "_id": news_id })
      .then(newsObj => (newsObj === null) ? false : newsObj)
      .catch(err => null)
  }

  /**
   * create new news instance and add it to db.
   * 
   * @param {String} newscategory 
   * @param {Object} news_object 
   * @example
   * news_object : {
   *   newstitle : String,
   *   newsauthor : String,
   *   newsdescription : String,
   *   newsurl : String,
   *   newsurlToImage : String,
   *   newspublishedAt : String,
   *   newscontent : String,
   * }
   * 
   * @returns news_instance
   */
  static createNewNews(newscategory, news_object) {
    return NewsCategoryDB.checkNewsCategoryPresence(newscategory)
      .then(newCatObj => {
        if (newCatObj === false) return false;
        const newNews = new News({
          "news_title": news_object.newstitle,
          "news_category_id": newCatObj._id,
          "news_author": news_object.newsauthor,
          "news_description": news_object.newsdescription,
          "news_url": news_object.newsurl,
          "news_urlToImage": news_object.newsurlToImage,
          "news_publishedAt": news_object.newspublishedAt,
          "news_content": news_object.newscontent,
        });
        return newNews.save().then(data => data).catch(err => err);
      }).catch(err => null)
  }

}

module.exports = NewsDB;
