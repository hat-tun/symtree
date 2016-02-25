var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('adminsym', { total: total_counter });
});

router.post('/', function(req, res, next) {
    console.log(req.body);
    if(req.body.totalReset == '0')
    {
	total_counter = 0;
    }
});

module.exports = router;
