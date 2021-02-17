const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const cards = require('../public/cards')
    let data = cards;
    if (req.query.search != undefined) {
        data = cards.filter(item => {
            for (const key in item) {
                if (key != 'img' && item[key].includes(req.query.search))
                    return item;
            }
        });
    }
    res.render('index.ejs', { data: data })
})

module.exports = router;