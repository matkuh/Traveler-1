const express = require("express");
const passport = require("passport")
const routes = require("./routes")
const app = express();
const db = require("./models")
const PORT = process.env.PORT || 5000;

// Add console.log shorthand
const log = console.log

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)
// app.get("/", function (req, res) {
//     res.send("Hello")
// })

db.sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        log("App is running on PORT " + PORT)
    })
})
