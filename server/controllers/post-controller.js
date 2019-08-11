const db = require("../models");

// These functions will interact with our database in mySQL. We currently have a function to create posts and get posts

module.exports = {
    createPost: (req, res) => {
        console.log("Create Post");
        console.log("Request Body", req.body);

        db.Post.create(req.body).then(
            dbPost => res.json(dbPost)
        )
    },

    getPosts: (req, res) => {
        
    }
}