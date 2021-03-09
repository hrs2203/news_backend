const NewsCategory = require("../models/news_category.js");

/** Static Function Class For News Category Model */
class NewsCategoryDB {

    static getAllNewsCategory() {
        return NewsCategory.find().then(data => data).catch(err => err);
    }

    static checkNewsCategoryPresence(nc_name) {
        return NewsCategory.findOne({ "news_category_name": nc_name })
            .then(ncData => (ncData === null) ? false : ncData)
            .catch(err => err)
    }

    static checkNewsCategoryPresenceById(nc_id) {
        return NewsCategory.findOne({ "_id": nc_id })
            .then(ncData => (ncData === null) ? false : ncData)
            .catch(err => err)
    }

    static createNewNewsCategory(nc_name) {
        return NewsCategory.checkNewsCategoryPresence(nc_name)
            .then(ncObj => {
                if (ncObj === false) {
                    const newNewsCategoryObj = new NewsCategory({
                        "news_category_name": nc_name
                    });

                    newNewsCategoryObj.save()
                        .then(newObj => newObj)
                        .catch(err => err);
                }
                return ncObj;
            })
            .catch(err => err)
    }

}

module.exports = NewsCategoryDB;