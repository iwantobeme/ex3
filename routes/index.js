

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fucking Web' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: "Let's Git it Web" });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: "ME!" });
});
module.exports = router;