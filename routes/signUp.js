const express = require('express');
const router = express.Router();
const SignUpController = require('../controller/signUp');
/* GET home page. */

const controller = new SignUpController();

router.get('/', controller.get);

router.post('/', controller.signUp);

module.exports = router;
