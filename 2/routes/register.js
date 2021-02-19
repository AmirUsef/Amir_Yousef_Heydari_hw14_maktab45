const express = require('express');
const router = express.Router();
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public/register/register.html"))
})

router.post('/authentication', (req, res) => {
    let users = require('../public/users')
    let user = users.find(item => item.username == req.body.username)
    if (user == undefined) {
        users.push(req.body)
        fs.writeFile('public/users.json', JSON.stringify(users), "utf8", (err) => {
            if (err) return res.status(400).send("something went wrong")
            res.status(200).send()
        })
    } else
        res.status(400).send("invalid username")
});

module.exports = router;