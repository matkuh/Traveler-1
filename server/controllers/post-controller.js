const db = require("../models");

// Shorthand for console.log
const log = console.log
log("Inside the post controller")

// These functions will interact with our database in mySQL. We currently have a function to create posts and get posts

module.exports = {
    createPost: (req, res) => {
        log("Create Post");
        log("Request Body", req.body);
        res.send("Create Post")

        // db.Post.create(req.body).then(
        //     dbPost => res.json(dbPost)
        // )
    },

    getPosts: (req, res) => {
        log("Get Posts")
        log(`No request params since this method will be getting all posts`)
        db.Post.findAll().then(
            dbPost => res.json(dbPost)
        )
    }
}