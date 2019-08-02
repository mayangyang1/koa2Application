const user = require('koa-router')(),
    User = require('../controllers/user.js');

user.get('/userInfo', User.userInfo);
user.post('/login', User.login);
user.post('/register', User.register);

module.exports = user;