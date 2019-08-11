const router = require("express").Router()
const postController = require("../../controllers/post-controller.js")

router.route("/post")
    .get(postController.getPosts)
    .post(postController.createPost)

module.exports = router;