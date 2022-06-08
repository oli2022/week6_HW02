var express = require('express');
var router = express.Router();

// 引用 userContr.js
const userContr = require('../controllers/userContr');

router.post('/sign_up', (req, res, next) => userContr.signUp(req, res, next)); // 註冊

module.exports = router;
