"use strict"

const User = require("../models/user.js");


class UserDBCall {

    static checkUserPresence(email) {
        return User.findOne({ "email": email })
            .then(userData => (userData === null) ? false : userData)
            .catch(err => err);
    }

    static getAllUser() {
        return User.find().then(data => data).catch(err => err);
    }

    static createNewUser(userName, email, password) {
        /*
        Create new user
        */
        const newUser = new User({
            "user_name": userName,
            "email": email,
            "password": password,
        });

        return newUser.save()
            .then(data => data)
            .catch(err => err);
    }

}



module.exports = UserDBCall;