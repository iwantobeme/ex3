

var express = require('express');
var router = express.Router();
var connect = require('../config/database')

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = "SELECT * FROM positions";
  connect.query(query,function(error,result){
    res.json(result)
    
  })
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: "Let's Git it Web" });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: "ME!" });
});
module.exports = router;