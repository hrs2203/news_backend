const UserDetail = require("../models/user_details.js");

/** Static Function Class For User Detail Model */
class UserDetailDB {

    static checkUserDetailPresence(user_object_id) {
        return UserDetail.findOne({ "user_id": user_object_id })
            .then(data => (data === null) ? false : data)
            .catch(err => err);
    }

    static updateUserDetail(
        user_object_id, news_cat_id, incrementFactor
    ) {
        return UserDetail.findOne(
            { "user_id": user_object_id }
        ).then(userObj => {
            if (userObj === null) false;

            var objVisitHistory = userObj['user_visit_history'];
            if (objVisitHistory[news_cat_id] === undefined) {
                objVisitHistory[news_cat_id] = incrementFactor;
            } else {
                objVisitHistory[news_cat_id] += incrementFactor;
            }

            userObj.update({
                "user_visit_history": objVisitHistory
            }).then(savedData => savedData).catch(err => err);

        }).err(err => err);
    }


    static createNewUserDetail(user_object_id) {
        const newUserDetail = new UserDetail({
            "user_id": user_object_id,
            "user_visit_history": {}
        });

        return newUserDetail.save()
            .then(data => data)
            .catch(err => err);

    }

}

module.exports = UserDetailDB;