const router = require('express').Router();

// ========= Custom Router modules ============
const userRouter = require("./user.js");
const newsRouter = require("./news.js");

// ================ routers ===================
router.use("/user", userRouter);
router.use("/news", newsRouter);

// =================== 404 ====================
router.get("*", (req, res, next) => {
    return res.json({
        "statusCode": 404,
        "message": "404 page not found"
    });
})


module.exports = router