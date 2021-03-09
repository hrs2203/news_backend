const express = require('express');
const mongoose = require("mongoose");

const serverPort = require("./config/staticVals.json")


// ============ DB Connection ==============
mongoose.connect(
    serverPort["db_port"], {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    },
    () => console.log('Connection to db: OK :)...........')
)

// ============ Router Connection ================
const server_router = require("./router/server_router");


const app = express();

app.use("/api", server_router);

app.use("/static", express.static('./static') );

app.listen(
    serverPort['server_port'], () => { 
        console.log(`server running at port ${serverPort["server_port"]}`)
    }
);