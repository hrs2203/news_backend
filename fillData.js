/**
 * Fill donwloaded data to db
 */

const fs = require("fs");
const NewsDB = require("./database/db/news_module.js")
const mongoose = require("mongoose");
const News = require("./database/models/news.js");

const serverPort = require("./config/staticVals.json")

var folderName = fs.readdirSync("./static/news_file");

mongoose.connect(
    serverPort["db_port"], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
},
    () => {
        console.log('Connection to db: OK :)...........');

        folderName.forEach(fold => {
            console.log(fold);
            var fileList = fs.readdirSync(`./static/news_file/${fold}`);
            fileList.forEach(files => {
                console.log(`./static/news_file/${fold}/${files}`);

                var fileContent = fs.readFileSync(`./static/news_file/${fold}/${files}`);
                fileContent = JSON.parse(fileContent);

                let ind = 0;

                fileContent.forEach(async item => {
                    const newNews = new News({
                        "news_title": item.title || "sample",
                        "news_category_id": "w23412ldkf13424312",
                        "news_author": item.author || "sample",
                        "news_description": item.description || "sample",
                        "news_url": item.url || "sample",
                        "news_urlToImage": item.urlToImage || "sample",
                        "news_publishedAt": item.publishedAt || "sample",
                        "news_content": item.content || "sample",
                    });

                    await newNews.save();
                    console.log(item.title[0]);
                })

                console.log(`done.`);
            })
        })

    }
)

