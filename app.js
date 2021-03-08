const express = require('express');

const server_router = require("./router/server_router");

const serverPort = require("./config/staticVals.json")['server_port'];

const app = express();

app.use("/api", server_router);

app.listen(
    serverPort, () => { 
        console.log(`server running at port ${serverPort}`)
    }
);