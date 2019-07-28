const express = require('express');
const createError = require('http-errors');
const router = express.Router();
const UserService = require('../public/javascripts/userService');


const service = new UserService();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  service.getUserByUsernameAndPassword(req.body.username, req.body.password)
      .then(result => {
        res.json(result);
      })
      .catch(error => {
          console.log("Promise rejected", error);
          next(createError(500));
      });
});

router.post('/register', function(req, res) {
    service.addNewUser(req.body)
        .then(result => {
            res.json(true);
        })
        .catch(error => console.log("Promise rejected ", error));
});

module.exports = router;
