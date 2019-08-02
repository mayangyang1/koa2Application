const sendHandle = () => {
    //处理请求成功方法
    const render = ctx => {
        return (data, code = 200) => {
            ctx.set('Content-Type', 'application/json');
            ctx.body = {
                code: code,
                content: data
            }
        }
    }
    //处理请求失败的方法
    const renderError = ctx => {
        return (code, data = '请求失败') => {
            ctx.set('Content-Type', 'application/json');
            ctx.body = {
                code,
                content: data
            }
        }
    }

    return async (ctx, next) => {
        ctx.send = render(ctx);
        ctx.sendError = renderError(ctx);
        await next();
    }
}

module.exports = sendHandle;