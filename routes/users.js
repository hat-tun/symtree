var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'User Page' });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
});

module.exports = router;
