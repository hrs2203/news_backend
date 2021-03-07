const express = require('express');

const serverPort = require("./config/staticVals.json")['server_port'];

const app = express();


app.use("/", (req, res, next) => {
    return res.send("News Server");
})


app.listen(
    serverPort, 
    () => console.log(`server running at port ${serverPort}`)
);