const path = require('path')
const router = require("express").Router()
const apiRoutes = require("./api")
// const express = require("express")
// const app = express();

// You can do this if you want all your routes in one place. BUT! We will have multiple routes in our app that will do different functions so it is more beneficial to modularize your app to narrow down where theyre at.
// app.use("/", (req, res) => {
//     console.log("Hello!")
//     res.send("You made it")
// })

// So, use router.route
console.log("Inside routes folder")
router.route("/api", apiRoutes)

// If no route is defined, it will go here!
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"))
});

module.exports = router;
// module.exports = app