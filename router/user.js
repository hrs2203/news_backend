const router = require('express').Router();


router.post("/auth/login", (req, res, next) => {
    return res.json({
        "statusCode": 200,
        "data": "/auth/login"
    });
});

router.post("/auth/registration", (req, res, next) => {
    return res.json({
        "statusCode": 200,
        "data": "/auth/registration"
    });
});

router.get("/", (req, res, next) => {
    return res.json({
        "statusCode": 200,
        "data": `userDetail ${req.query.uid}`
    });
});


module.exports = router;