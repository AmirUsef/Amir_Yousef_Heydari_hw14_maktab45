const express = require('express');
const router = express.Router();

const home = require('./home');
const about = require('./about');
const contact = require('./contact');
const products = require('./products');

router.use('/home', home)
router.use('/about', about)
router.use('/contact', contact)
router.use('/products', products)

module.exports = router;