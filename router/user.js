const router = require('express').Router();
const parseJsonInput = require("body-parser").json();

const UserDB = require("../database/db/user_module.js");
const UserDetailDB = require("../database/db/user_detail_module.js");
const { response } = require('express');


router.post("/auth/login",
    parseJsonInput,
    (req, res, next) => {
        const email = req.body.email;
        const password = req.body.password;

        return UserDB.validateUser(email, password)
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
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        return UserDB.createNewUser(username, email, password)
            .then(creationResp => {
                return res.json({
                    "statusCode": 200,
                    "data": creationResp
                });
            }).catch(err => {
                return res.json({
                    "statusCode": 400,
                    "data": err
                });
            })
    });

router.get("/",
    (req, res, next) => {
        const userEmail = req.query.email;

        return UserDB.checkUserPresence(userEmail)
            .then(userData => {
                if (userData === false){
                    return res.json({
                        "statusCode": 200,
                        "data": null
                    });
                }
                return res.json({
                    "statusCode": 200,
                    "data": userData
                });
            })
            .catch(err => {
                return res.json({
                    "statusCode": 400,
                    "data": err
                });
            })


        
    });


module.exports = router;