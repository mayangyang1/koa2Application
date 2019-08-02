const crypto = require('crypto'),
    jwt = require('jsonwebtoken'),
    userModel = require('../models/userModels.js');


class UserController {
    //用户注册
    static async register(ctx) {
        const data = ctx.request.body;
        const checkUser = await userModel.findOne({name: data.name});
        if(checkUser !== null) {
            return ctx.sendError(500, '该用户名已存在');
        }
        const user = new userModel({
            name: data.name,
            password: crypto.createHash('md5').update(data.password).digest('hex'), //密码加密存储
            email: data.email
        }) 
        const result = await user.save();
        return result !== null ? ctx.send('注册成功') : ctx.sendError(500, '注册失败');
    }
    //用户登录
    static async login(ctx) {
        const data = ctx.request.body;
        if(!data.name || !data.password) {
            return ctx.sendError(500, '参数不合法');
        }
        console.log('密码')
        console.log(crypto.createHash('md5').update(data.password).digest('hex'))
        const result = await userModel.findOne({
            name: data.name,
            password: crypto.createHash('md5').update(data.password).digest('hex')
        })
        console.log(result);
        if(result !== null) {
            const token = jwt.sign({
                name: result.name,
                _id: result._id
            },'get_token',{expiresIn:60*60})
            return ctx.send(token);
        }else{
            return ctx.sendError(500, '用户名或者密码错误');
        }
    }
    //获取用户信息
    static async userInfo(ctx) {
        const data = ctx.state.user;
        const user = await userModel.findById(data._id);

        if(user !== null) {
            const result = {
                _id: user._id,
                name: user.name,
                email: user.email
            }
            return ctx.send(result);
        }else{
            return ctx.sendError(500)
        }
    }
}
module.exports = UserController;
