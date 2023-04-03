const express = require('express');
const router =  express.Router();

const userController = require('../controller/user_controller');

router.get('/login', function(req, res) {
    res.render('login');
  });
  
router.get('/logout', userController.userLogout);
router.post('/login', userController.userLogin);

module.exports = router;
  