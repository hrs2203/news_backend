const express = require('express');
const mongoose = require("mongoose");

const serverPort = require("./config/staticVals.json")

// ============ Router Connection ================
const server_router = require("./router/server_router");


const app = express();

var cors = require('cors');
app.use(cors({ origin: true, credentials: true }));


app.use("/api", server_router);
app.use("/static", express.static('./static'));

app.use("*", (req, res) => {
  return res.json({
    "status": 404,
    "message": "No page found"
  })
})

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

// ============== Server Connection ============
app.listen(
  serverPort['server_port'],
  () => console.log(`server running at port ${serverPort["server_port"]}`)
)