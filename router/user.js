const router = require('express').Router();
const parseJsonInput = require("body-parser").json();

const UserDB = require("../database/db/user_module.js");
const UserDetailDB = require("../database/db/user_detail_module.js");


router.post("/auth/login", parseJsonInput,
    (req, res, next) => {

        return UserDB.validateUser(req.body.email, req.body.password)
            .then(validationResp => {
                return res.json({
                    "statusCode": 200,
                    "data": validationResp
                });
            }).catch(err => {
                return res.json({
                    "statusCode": 400,
                    "data": err
                });
            });
    });

router.post("/auth/registration", parseJsonInput,
    (req, res, next) => {
        return UserDB.createNewUser(req.body.username, req.body.email, req.body.password)
            .then(creationResp => {
                return UserDetailDB.createNewUserDetail(creationResp._id)
                    .then(detObj => {
                        return res.json({
                            "statusCode": 200,
                            "data": {
                                "user": creationResp,
                                "user_detail": detObj
                            }
                        });
                    })
                    .catch(err => {
                        console.log(err);
                        return res.json({
                            "statusCode": 400,
                            "data": err
                        });
                    });

            }).catch(err => {
                console.log(err);
                return res.json({
                    "statusCode": 400,
                    "data": err
                });
            })
    });


// TODO: Add URL Parsing.
router.get("/", (req, res, next) => {
    const userEmail = req.query.email;

    return UserDB.checkUserPresence(userEmail)
        .then(userData => {
            if (userData === false) {
                return res.json({
                    "statusCode": 200,
                    "data": null
                });
            }
            return UserDetailDB.checkUserDetailPresence(userData._id)
                .then(detailObj => {
                    return res.json({
                        "statusCode": 200,
                        "data": {
                            "user": userData,
                            "user_detail": detailObj
                        }
                    });
                })
        })
        .catch(err => {
            return res.json({
                "statusCode": 400,
                "data": err
            });
        })

});


module.exports = router;