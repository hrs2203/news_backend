const router = require('express').Router();
const parseJsonInput = require("body-parser").json();

const NewsDB = require("../database/db/news_module.js")
const NewsCategoryDB = require("../database/db/news_category_module.js");

/**
 * {{url}}/api/news?nid=608d711d15e170189cf291ef
 */
router.get("/", (req, res, next) => {
  // req.query.nid === news id
  return NewsDB.checkNewsPresence(req.query.nid)
    .then(newsObj => {
      return res.json({
        "statusCode": 200,
        "data": newsObj
      });
    }).catch(err => {
      return res.json({
        "statusCode": 400,
        "data": err
      });
    });
});

router.get("/all", (req, res, next) => {
  return NewsDB.getAllNews()
    .then(newsObj => {
      return res.json({
        "statusCode": 200,
        "data": newsObj
      });
    }).catch(err => {
      return res.json({
        "statusCode": 400,
        "data": err
      });
    });
});

/**
 * {{url}}/api/news/category?ncname=tech
 */
router.get("/bycategory", (req, res, next) => {
  // req.query.category === cat name
  return NewsDB.getNewsByCategory(req.query.category)
    .then(newsList => {
      return res.json({
        "statusCode": 200,
        "category_name": req.query.category,
        "data": newsList
      });
    }).catch(err => {
      return res.json({
        "statusCode": 400,
        "data": err
      });
    });
})

/**
 * @example
 * news_obj = {
 *   "newsauthor" : String,
 *   "newstitle" : String,
 *   "newsdescription" : String,
 *   "newsurl" : String,
 *   "newsurlToImage" : String,
 *   "newspublishedAt" : String,
 *   "newscontent", : String}
 */
router.post("/add", parseJsonInput, (req, res, next) => {
  return NewsDB.createNewNews(
    req.body.newscategory,
    req.body.news_obj
  ).then(newsObject => {
    return res.json({
      "statusCode": 200,
      "data": newsObject
    });
  }).catch(err => {
    return res.json({
      "statusCode": 400,
      "data": null
    });
  });
});

/**
 * {{url}}/api/news/category?ncname="tech"
 */
router.get("/category", (req, res, next) => {
  // req.query.ncname === cat name
  return NewsCategoryDB.checkNewsCategoryPresence(req.query.ncname)
    .then(newCategoryObj => {
      if (newCategoryObj === false) {
        return res.json({
          "statusCode": 200,
          "data": []
        });
      }
      return NewsDB.getNewsByCategory(newCategoryObj.news_category_name)
        .then(newsList => {
          return res.json({
            "statusCode": 200,
            "category_name": newCategoryObj.news_category_name,
            "data": newsList
          });
        }).catch(err => {
          return res.json({
            "statusCode": 400,
            "data": err
          });
        });
    }).catch(err => {
      return res.json({
        "statusCode": 400,
        "data": err
      });
    });

});

router.post("/category/add", parseJsonInput,
  (req, res, next) => {
    return NewsCategoryDB.createNewNewsCategory(
      req.body.new_category_name.toLowerCase()
    ).then(newCatObj => {
      return res.json({
        "statusCode": 200,
        "data": newCatObj
      });
    }).catch(err => {
      return res.json({
        "statusCode": 400,
        "data": err
      });
    });
  });

router.get("/category/all", (req, res, next) => {
  return NewsCategoryDB.getAllNewsCategory()
    .then(NewsCategoryList => {
      return res.json({
        "statusCode": 200,
        "data": NewsCategoryList
      });
    }).catch(err => {
      return res.json({
        "statusCode": 400,
        "data": err
      });
    });
});

module.exports = router;