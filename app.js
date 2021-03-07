const express = require('express');

const app = express();



app.use("/", (req, res, next) => {
    return res.send("News Server");
})


app.listen(3000, ()=>{ console.log(`server running ar port ${3000}`) } );