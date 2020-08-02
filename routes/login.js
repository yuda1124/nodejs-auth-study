const express = require('express');
const router = express.Router();
const CookieController = require('../controller/cookie');
const SessionController = require('../controller/session');

const cookieController = new CookieController();
const sessionController = new SessionController();

router.post('/cookie', cookieController.signIn);
router.post('/session', sessionController.signIn);

module.exports = router;
