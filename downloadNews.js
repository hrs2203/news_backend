/**
 * File that will download daily news and sort them by categories in file to serve to user.
 * File System - static/news_file/cateogry/filename{number}.json
 */

const news_key = require("./config/enc_data.json")['news_api_key']

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(news_key);
const fs = require("fs");

/**
 * '2021-03-01'
   '2021-03-25'
   "./static/news_file/tech/file1.json"
 */

function calldata(topic, startData, endDate, destincation) {
  newsapi.v2.everything({
    q: topic,
    from: startData,
    to: endDate,
    language: 'en',
    sortBy: 'relevancy',
    page: 5
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
  }).then(data => {
    fs.writeFile(destincation, JSON.stringify(data), err => { });
  })
}

// calldata(
//   "summer", '2021-03-01', '2021-03-25',
//   "./static/news_file/othe/file1.json"
// )

// calldata(
//   "corona", '2021-03-01', '2021-03-25',
//   "./static/news_file/othe/file2.json"
// )

// calldata(
//   "russia", '2021-03-01', '2021-03-25',
//   "./static/news_file/othe/file3.json"
// )

// calldata(
//   "thailand", '2021-03-01', '2021-03-25',
//   "./static/news_file/othe/file4.json"
// )


