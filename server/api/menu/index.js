/**
 * Created by kanglg on 16/5/18.
 */
var express = require('express');
var controller = require('./menu.controller');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;
