const news_key = require("../../config/enc_data.json")['news_api_key']

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(news_key);

class CollectNewNews {

    /**
     * Collect Data about that topic and save to db.
     * 
     * @param {String} topic 
     * @param {String} startData 
     * @param {String} endDate 
     * @param {String} destincation 
     */
    static getdata(topic, startData, endDate) {
        return newsapi.v2.everything({
            q: topic,
            from: startData,
            to: endDate,
            language: 'en',
            sortBy: 'relevancy',
            page: 3
        }).then(resp => {
            return resp["articles"].map(unit => {
                return {
                    author: unit["author"],
                    title: unit["title"],
                    description: unit["description"],
                    url: unit["url"],
                    urlToImage: unit["urlToImage"],
                    publishedAt: unit["publishedAt"],
                    content: unit["content"],
                }
            })
        })
    }
}

module.exports = CollectNewNews;
