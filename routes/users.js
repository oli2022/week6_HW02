var express = require('express');
var router = express.Router();

// 引用 userContr.js
const userContr = require('../controllers/userContr');

router.post('/sign_up', (req, res, next) => userContr.signUp(req, res, next)); // 註冊
router.post('/sign_in', (req, res, next) => userContr.signIn(req, res, next)); // 登入
router.post('/updatePassword', (req, res, next) => userContr.isAuth(req, res, next)); // 密碼更新

module.exports = router;
