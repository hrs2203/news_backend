const userObj = require("../database/db/user_module.js");
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
        var em = "jam@gmail.com"
        userObj.checkUserPresence(em)
            .then(userPresence => {
                if (userPresence === false) {
                    userObj.createNewUser("james", em, "JamesPwd123")
                    .then( (data) => {
                        console.log("user Created");
                        console.log(data);
                        console.log("All User Data");
                        userObj.getAllUser()
                            .then(data => console.log(data));
                    })
                    .catch(err => `Error While Creating user \n\n ${err}`);
                }else{
                    console.log("user Already Present");
                    console.log(userPresence);
                }
            })
            .catch(err => console.log(err))
    }
);