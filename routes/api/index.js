const router = require("express").Router()
// const userRoutes = require("./user");
const postRoutes = require('./post')

console.log("Inside api routes folder")
router.use(postRoutes)
// router.use(userRoutes)
// router.use(followRoutes)



module.exports = router;