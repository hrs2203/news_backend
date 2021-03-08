const router = require('express').Router();


router.get("/", (req, res, next) => {
    return res.json({
        "statusCode": 200,
        "data": `newsDetail ${req.query.nid}`
    });
});

router.post("/add", (req, res, next) => {
    return res.json({
        "statusCode": 200,
        "data": "news_add"
    });
});

router.get("/category", (req, res, next) => {
    return res.json({
        "statusCode": 200,
        "data": `newsDetail ${req.query.ncid}`
    });
});

router.post("/category/add", (req, res, next) => {
    return res.json({
        "statusCode": 200,
        "data": "news_category_add"
    });
});

router.get("/category/all", (req, res, next) => {
    return res.json({
        "statusCode": 200,
        "data": `All news Category List`
    });
});

module.exports = router;