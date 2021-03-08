const express = require('express');
const { route } = require('./user');
var router = express.Router();

const userRouter = require("./user.js");
const newsRouter = require("./news.js");


const urlStatic = {
    "url_list": {
        "user/auth/login": "login user",
        "user/auth/registration": "registration user",
        "user/<userId>": "user/<userId> user",
        "news/<newsId>": "news/<newsId> news",
        "news_catrgory/<categoryId>": "news list category wise",
        "news_catrgory": "list category"
    }
};

router.get("/home", (req, res, next) => {
    return res.json({
        "statusCode": 200,
        "data": urlStatic
    });
});

router.use("/user", userRouter);
router.use("/news", newsRouter);


// ============== 404 =============
router.get("*", (req, res, next) => {
    return res.json({
        "statusCode": 404,
        "message": "404 page not found"
    });
})


module.exports = router