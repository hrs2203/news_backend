const User = require("../models/user.js");


/** Static Function Class For User Model */
class UserDB {

    static checkUserPresence(email) {
        return User.findOne({ "email": email })
            .then(userData => (userData === null) ? false : userData)
            .catch(err => err);
    }

    static getAllUser() {
        return User.find().then(data => data).catch(err => err);
    }

    static createNewUser(userName, email, password) {
        const newUser = new User({
            "user_name": userName,
            "email": email,
            "password": password,
        });

        return newUser.save()
            .then(data => data)
            .catch(err => err);
    }

    static validateUser(user_email, user_password) {
        return User.findOne({ "email": user_email })
            .then(userObj => {
                if (userObj === null) {
                    return ({
                        "status": false,
                        "message": "Invalid email id"
                    });
                }
                else if (userObj['password'] === user_password) {
                    return ({
                        "status": true,
                        "message": "Login Succesfull"
                    });
                }
                return ({
                    "status": false,
                    "message": "Invalid password"
                });
            }).catch(err => err);
    }


}



module.exports = UserDB;