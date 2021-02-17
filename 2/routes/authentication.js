const express = require('express');
const router = express.Router();
const path = require('path')
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/', (req, res) => {
    let users = require('../public/users')
    let user = users.find(item => item.username == req.body.username)
    if (user === undefined || user.password != req.body.password)
        res.status(400).send("user not found")
    else
        res.status(200).send("successful");
});

module.exports = router;