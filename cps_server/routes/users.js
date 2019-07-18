const express = require('express');
const router = express.Router();
const UserService = require('../public/javascripts/userService');


const service = new UserService();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res) {
  console.log('Login request ', req.body);
  service.getUserByUsernameAndPassword(req.body.username, req.body.password)
      .then(result => {
        res.json(result);
      })
      .catch(error => console.log("Promise rejected"));
});

router.post('/register', function(req, res) {
  console.log(`Register request ${req}`);
});

module.exports = router;
