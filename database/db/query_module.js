const UnseenQuery = require("../models/query.js");
const CollectNewNews = require("./new_news_module.js");
const NewsDB = require('../db/news_module.js');

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
  static getAllQuery() {
    return UnseenQuery.find().then(data => data).catch(err => []);
  }

  /**
   * get new unseen query
   * 
   * @param {String} qury 
   */
  static getNewQuery(que) {
    que = que.toLowerCase();
    return CollectNewNews.getdata(que, '2021-04-15', '2021-04-30')
      .then(data => data)
      .catch(err => [])
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

  /**
   * Fill the data base with new queries
   */
  static fillDatabase() {
    return UnseenQueryDB.getAllQuery()
      .then(query_list => {
        query_list = query_list.map(item => item["query"]);

        query_list.forEach(title => {
          console.log(title);
          CollectNewNews.getdata(title, '2021-04-15', '2021-04-30')
            .then(news_list => {
              news_list.forEach(nws => {
                NewsDB.createNewNews(
                  "othe",
                  {
                    "newsauthor": nws["author"] || "sample",
                    "newstitle": nws["title"] || "sample",
                    "newsdescription": nws["description"] || "sample",
                    "newsurl": nws["url"] || "sample",
                    "newsurlToImage": nws["urlToImage"] || "sample",
                    "newspublishedAt": nws["publishedAt"] || "sample",
                    "newscontent": nws["content"] || "sample"
                  }
                )
              })
            })
            .catch(err => console.log(err))
        })
        return query_list;
      })
      .then(lst => {
        return UnseenQuery.deleteMany({}).then(dt => {
          return UnseenQueryDB.getAllQuery().then(data => data).catch(e => []);
        })
      })
      .catch(err => console.log(err));
  }

}

module.exports = UnseenQueryDB;
