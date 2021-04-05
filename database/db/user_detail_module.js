const UserDetail = require("../models/user_details.js");

/** Static Function Class For User Detail Model */
class UserDetailDB {

    static checkUserDetailPresence(user_object_id) {
        return UserDetail.findOne({ "user_id": user_object_id })
            .then(data => (data === null) ? false : data)
            .catch(err => err);
    }

    /**
     * 
     * @param {String} user_object_id 
     * @param {Object} news_token
     * @returns neuly update user history
     * 
     * news_token: {
     *  "news_title": String,
     *  "news_link": String,
     *  "news_time": String,
     *  "news_category": String
     * }
     */
    static updateUserDetail(user_object_id, news_token) {
        return UserDetail.findOne({ "user_id": user_object_id })
            .then(userObj => {
                if (userObj === null) false;

                var objVisitHistory = userObj['user_visit_history'];
                objVisitHistory.push(news_token);

                return userObj.updateOne({
                    "user_visit_history": objVisitHistory
                }).then(savedData => savedData).catch(err => err);

            }).catch(err => err);
    }

    static createNewUserDetail(user_object_id) {
        return UserDetailDB.checkUserDetailPresence(user_object_id)
            .then(userDetailObject => {
                if (userDetailObject === false) {
                    const newUserDetail = new UserDetail({
                        "user_id": user_object_id,
                        "user_visit_history": []
                    });

                    return newUserDetail.save()
                        .then(data => data)
                        .catch(err => err);
                }
                return userDetailObject;
            }).catch(err => err);


    }

}

module.exports = UserDetailDB;