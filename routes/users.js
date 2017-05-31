var express = require('express');
var router = express.Router();
var FB = require('fb');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/fboauth', function(req, res, next){

})



module.exports = router;
