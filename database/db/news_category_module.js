const NewsCategory = require("../models/news_category.js");

/** Static Function Class For News Category Model */
class NewsCategoryDB {

  /**
   * @returns List[NewsCategoryObject]
   */
  static getAllNewsCategory() {
    return NewsCategory.find().select("news_category_name")
      .then(data => data).catch(err => []);
  }

  /**
   * @param {String} nc_name 
   * @returns new_category instance || false || null
   */
  static checkNewsCategoryPresence(nc_name) {
    return NewsCategory.findOne({ "news_category_name": nc_name })
      .then(ncData => (ncData === null) ? false : ncData)
      .catch(err => null)
  }

  /**
   * @param {String} nc_id 
   * @returns new_category instance || false || null
   */
  static checkNewsCategoryPresenceById(nc_id) {
    return NewsCategory.findOne({ "_id": nc_id })
      .then(ncData => (ncData === null) ? false : ncData)
      .catch(err => null)
  }

  /**
   * @param {String} nc_name 
   * @returns new news_category instance with name = nc_name || existing news category.
   */
  static createNewNewsCategory(nc_name) {
    return NewsCategoryDB.checkNewsCategoryPresence(nc_name)
      .then(ncObj => {
        if (ncObj === false) {
          const newNewsCategoryObj = new NewsCategory({
            "news_category_name": nc_name
          });
          return newNewsCategoryObj.save()
            .then(newObj => newObj).catch(err => err);
        }
        return ncObj;
      }).catch(err => null)
  }

}

module.exports = NewsCategoryDB;