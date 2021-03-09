const News = require("../models/news.js");
const NewsCategoryDB = require("./news_category_module.js");

/** Static Function Class For News Model */
class NewsDB {
    static getAllNews() {
        return News.find().then(data => data).catch(err => err);
    }

    static getNews(news_id) {
        return News.findOne({ "_id": news_id })
            .then(newsObj => (newsObj === null) ? false : newsObj)
            .catch(err => err);
    }

    static checkNewsPresence(news_id) {
        return News.findOne({ "_id": news_id })
            .then(newsObj => (newsObj === null) ? false : newsObj)
            .catch(err => err)
    }

    static incrementNewsVisitCount(news_id, increment_factor) {
        return NewsDB.checkNewsPresence(news_id)
            .then(newsObj => {
                if (newsObj === false) {
                    return ({
                        "status": 400,
                        "message": "Invalid News Catrgory Id"
                    });
                }

                return newsObj.updateOne({
                    "news_total_visits": newsObj.news_total_visits + increment_factor
                }).then(data => data).catch(err => err);
            })
            .catch(err => err)
    }

    static createNewNews(
        newstitle, newscategoryid,
        newsstaticlink, newstotalvisits
    ) {

        return NewsCategoryDB.checkNewsCategoryPresenceById(newscategoryid)
            .then(newCatObj => {

                if (newCatObj === false) {
                    return ({
                        "status": 400,
                        "message": "Invalid News Catrgory Id"
                    })
                }

                const newNews = new News({
                    "news_title": newstitle,
                    "news_category_id": newscategoryid,
                    "news_static_link": newsstaticlink,
                    "news_total_visits": newstotalvisits,
                });

                return newNews.save()
                    .then(data => data)
                    .catch(err => err);

            })
            .catch(err => err)
    }

}

module.exports = NewsDB;