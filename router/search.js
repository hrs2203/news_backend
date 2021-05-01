const router = require('express').Router();
const parseJsonInput = require("body-parser").json();

const UnseenQueryDB = require("../database/db/query_module");
const NewsSearchDB = require('../database/db/news_search_module.js');

const NewsCategory = require("../database/models/news_category.js");


/**
 * this module deals with
 *   1. Global Searches.
 *   2. Unseen queries.
 */


/**
 * get all search result possible
 */
router.get("/all", (req, res, next) => {
  return NewsSearchDB.getEntireSearch()
    .then(seq => {
      return NewsCategory.find().then(database => {
        var lst = [];
        var data = {};
        for (let index = 0; index < database.length; index++) {
          data[database[index]["_id"]] = database[index]["news_category_name"];
        }
        for (var i = 0; i < seq.length; i++) {
          lst.push({
            "_id": seq[i]["_id"],
            "news_title": seq[i]["news_title"],
            "news_category": data[seq[i]["news_category_id"]] || "othe",
            "news_url": seq[i]["news_url"],
            "news_publishedAt": seq[i]["news_publishedAt"]
          })
        }
        return res.json({
          "status": 200,
          "data": lst
        })
      }).catch(err => {
        return res.json({
          "status": 400,
          "data": null
        })
      })
    })
    .catch(err => {
      return res.json({
        "status": 400,
        "data": null
      })
    })
})

/**
 * {{url}}/api/search/unseenquery?q=delhi covid
 */
router.get("/unseenquery", (req, res, next) => {
  return UnseenQueryDB.addNewQuery(req.query.q)
    .then(data => {
      return res.json({
        "status": 200,
        "data": data
      })
    })
    .catch(err => {
      return res.json({
        "status": 400,
        "data": false
      })
    })
})


/**
 * {{url}}/api/search/unseenquery/all
 */
router.get("/unseenquery/all", (req, res, next) => {
  return UnseenQueryDB.getAllQuery()
    .then(data => {
      return res.json({
        "status": 200,
        "data": data
      })
    })
    .catch(err => {
      return res.json({
        "status": 400,
        "data": false
      })
    })
})

module.exports = router;