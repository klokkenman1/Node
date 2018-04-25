var express = require('express');
var router = express.Router();

/* GET test page. */
router.get('/', function(req, res, next) {
  res.send('test');
});

/* GET test page. */
router.get('/:year?', function(req, res, next) {
    res.send(req.params.year);
  });

module.exports = router;
