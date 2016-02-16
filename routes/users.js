var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'User Page' });
});

router.post('/', function(req, res, next) {
    total_counter++;
    console.log(req.body, total_counter);
});

module.exports = router;
