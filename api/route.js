const express = require('express');
const bcrypt = require('bcryptjs');

const routes = express.Router();
let User = require('./schema/User');
let CitiesData = require("./constants/constants");

const OK = 200,
    NO_Content = 204;

// Register
routes.post('/register', (req, res) => {
    let register = new User(req.body);
    register.save()
        .then(result => {
            res.sendStatus(OK);
        })
        .catch(err => {
            console.log(err);
            res.status(400).send("Failed to store to database");
        });
});

// Login Router
routes.post('/login', (req, res) => {
    User.findOne({
            user_name: req.body.user_name
        })
        .then(user => {
            console.log("User found during login", user)
            if (!user) res.sendStatus(NO_Content);
            else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordMatch => passwordMatch ? res.sendStatus(OK) : res.sendStatus(NO_Content))
            }
        });
});

// Username validation Router
routes.route('/validateUser', (req, res) => {
        User.findOne({
                user_name: req.body.user_name
            })
            .then(user => user ? res.sendStatus(NO_Content) : res.sendStatus(OK))
    });

// Get Cities
routes.route('/cities').get((req, res) => {
    res.send(CitiesData);
});

module.exports = routes;