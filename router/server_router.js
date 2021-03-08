const express = require('express');
var router = express.Router();

router.get("/home", (req, res, next) => {
    return res.json({
        "statusCode": 200,
        "data": {
            "url_list": {
                "login": "login user",
                "registration": "registration user",
                "user/<userId>": "user/<userId> user",
                "news/<newsId>": "news/<newsId> news",
                "news_catrgory/<categoryId>": "news list category wise",
                "news_catrgory": "list category"
            }
        }
    });
});


// ============== 404 =============
router.get("*", (req, res, next) => {
    return res.json({
        "statusCode": 404,
        "message": "404 page not found"
    });
})


module.exports = router