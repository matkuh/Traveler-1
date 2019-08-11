const express = require("express");
const router = express.Router();
const passport = require('passport');
const db = require('../../models');

// shorthand
const log = console.log

router.get('/', (req, res) => {

    // If this returns true, do work
    if (req.isAuthenticated()) {
        // Look at the session for the user
        const currentUser = req.session.passport.user;
        log("Current User:", currentUser);

        // If we do find the user in our db, we will log them in 
        db.User.findOne({
            where: {
                id: currentUser
            }
        }).then(dbUser => {
            const user = {
                loggedIn: true,
                id: dbUser.id
            }
        })

        // Request is not authenticated so they will be returned a value of false for logged in
    } else {
        const noUser = {
            loggedIn: false,
            username: ''
        }
        res.json(noUser)
    }
})

router.post("/signup", (req, res, next) => {
    log("\nSign-up Route");
    log(req.body);

    passport.authenticate("local-signup", (err, user, info) => {
        log("\nUser:", user.dataValues)
        if (err) {
            log('Error', err);
            return next(err)
        }

        if (!user) {
            log("Not a user")
            // Why do we use res.send here and not next()?
            return res.send("Please re-enter your username and password");
        }

        // After sign up, we login the user
        req.login(user, err => {
            if (err) {
                log("Auth error");
                return next(err)
            }

            return res.redirect("/");
        })

        // Why do we have these here?
    })(req, res, next)
})

// Route to authenticate user login

router.post("/login", (req, res, next) => {
    log("Login Route");
    log(req.body)

    passport.authenticate("local-login", (err, user, info) => {
        log("User", user.dataValues)
        if (err) {
            log("Error", err)
            return next(err)
        }

        if (!user) {
            log("Not a user");
            return res.send("Please re-enter your username and password");
        }

        // After login credentials, we login the user

        req.login(user, (err) => {
            if (err) {
                log('Auth err')
                return next(err)
            }

            var user = {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                image: user.image
            }

            return res.json(user);
        })
        // Why are these here?
    })(req, res, next)
})

// User logout
router.get("/logout", (req, res) => {
    log("Logout");
    req.logout();

    if (!req.user) {
        res.redirect("/")
    } else {
        res.status(200).json({
            logout: false,
            message: 'failed logout'
        })
    }
})

module.exports = router;