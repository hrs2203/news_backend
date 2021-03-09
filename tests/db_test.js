const ncd = require("../database/db/news_category_module.js");
const mongoose = require("mongoose");
const serverPort = require("../config/staticVals.json")


// ============ DB Connection ==============
mongoose.connect(
    serverPort["db_port"], {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
},
    () => {
        console.log("Connected to db layer");
        
        ncd.createNewNewsCategory("universal news for allplanet")
            .then(newObj => {
                console.log(newObj);
                ncd.getAllNewsCategory().then(data => {
                    console.log(data)
                }).catch(err => {
                    console.log("reading error");
                });
            }).catch(err => {
                console.log("reading error");
            });
        // ncd.getAllNewsCategory().then(data => {
        //     console.log(data)
        // }).catch(err => {
        //     console.log("reading error");
        // });


    }
);


