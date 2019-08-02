const errorHandle = (ctx, next) => {
    return next().catch((err) => {
        if(err.status === 401){
            ctx.status = 401;
            return ctx.sendError('401', '账号未登陆');
        }else {
            throw err;
        }
    })
}

module.exports = errorHandle;