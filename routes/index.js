const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  if (req.cookies.user || req.session.user) res.render('success');
  else res.render('index');
});

module.exports = router;
