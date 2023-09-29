var express = require('express');
var router = express.Router();

const bcryptjs = require('bcryptjs');
const saltRounds = 10;

const User = require('../models/User')

router.get('/signup', (req, res, next) => {

  res.render('auth/signup.hbs')

})

module.exports = router;
