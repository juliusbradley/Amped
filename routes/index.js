var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:song', function(req, res, next) {
  console.log(req.params)
  res.render('index', { title: 'Express' });
});

module.exports = router;
