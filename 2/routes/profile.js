const express = require('express');
const router = express.Router();

router.get('/product:productID', (req, res) => {
    const cards = require('../public/cards')
    const card = cards.find(item => item.id == req.params.productID)
    if (card != undefined)
        res.render('product.ejs', card)
    else
        res.send('404 page not found')
});

module.exports = router;