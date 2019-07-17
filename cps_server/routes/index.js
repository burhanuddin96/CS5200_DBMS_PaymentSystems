const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({message: 'Connection Successful'});
  // res.render('index', { title: 'Express' });
});

module.exports = router;
