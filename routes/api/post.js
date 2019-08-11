const router = require("express").Router();
const postController = require("../../controllers/post-controller");
const app = require("express")();

console.log("Inside Post route file")
// app.use("/post", function (req, res) {
//     res.send("Inside post route")
// })

router.route("/post")
    .get(postController.getPosts)
    .post(postController.createPost)

module.exports = router;
// module.exports = app
