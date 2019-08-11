const express = require("express");
const passport = require("passport")
const routes = require("./routes")

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)
// app.get("/", function (req, res) {
//     res.send("Hello")
// })

app.listen(PORT, () => {
    console.log("App is running on PORT " + PORT)
})