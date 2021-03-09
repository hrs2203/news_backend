const router = require('express').Router();
const parseJsonInput = require("body-parser").json();

const NewsDB = require("../database/db/news_module.js")
const NewsCategoryDB = require("../database/db/news_category_module.js");

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

router.post("/add", parseJsonInput,
    (req, res, next) => {
        return NewsDB.createNewNews(
            req.body.news_title,
            req.body.news_category_name,
            req.body.news_static_link,
            0
        ).then(newsObject => {
            return res.json({
                "statusCode": 200,
                "data": newsObject
            });
        }).catch(err => {
            return res.json({
                "statusCode": 400,
                "data": err
            });
        });
    });

router.get("/category", (req, res, next) => {
    // req.query.ncid === cat name
    return NewsCategoryDB.checkNewsCategoryPresenceById(req.query.ncid)
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
        )
            .then(newCatObj => {
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