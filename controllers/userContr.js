const express = require('express');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const router = express.Router();

// 引用檔案 - 錯誤訊息
const appError = require('../servers/appError');
const handleErrorAsync = require('../servers/handleErrorAsync');
const { isAuth, generateSendJWT } = require('../servers/auth');

const User = require('../Models/usersModel');

const userControllers = {
    signUp: handleErrorAsync(async (req, res, next) => {
        let { email, password, confirmPassword, name } = req.body;
        // 內容不可為空
        if (!email || !password || !confirmPassword || !name) {
            return next(appError('400', '欄位未填寫正確！', next));
        }
        // 密碼正確
        if (password !== confirmPassword) {
            return next(appError('400', '密碼不一致！', next));
        }
        // 密碼 8 碼以上
        if (!validator.isLength(password, { min: 8 })) {
            return next(appError('400', '密碼字數低於 8 碼', next));
        }
        // 是否為 Email
        if (!validator.isEmail(email)) {
            return next(appError('400', 'Email 格式不正確', next));
        }

        // 加密密碼
        password = await bcrypt.hash(req.body.password, 12);
        const newUser = await User.create({
            email,
            password,
            name,
        });
        console.log(newUser);
        generateSendJWT(newUser, 201, res);
    }),
};
module.exports = userControllers;