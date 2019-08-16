const Koa = require('koa'),
    app = new Koa(),
    json = require('koa-json'),
    bodyparser = require('koa-bodyparser'),
    koajwt = require('koa-jwt');
    static = require('koa-static'),
    cors = require('koa2-cors'),
    koaBody = require('koa-body'),
    router = require('koa-router')();


const db = require('./config/db'),
    errorHandle = require('./middleWares/errorHandle'),
    sendHandle = require('./middleWares/sendHandle'),
    unlessRules = require('./config/unlessValidateRules.js'),
    routerCollection = require('./routes/index');

app.use(cors())
app.use(koaBody({
    multipart:true,
    formidable: {
        maxFileSize: 20*1024*1024 //限制文件上传大小 默认2M
    }
}))
app.use(static('./dist'))
app.use(json());
app.use(bodyparser());
app.use(sendHandle());
app.use(errorHandle);
app.use(koajwt({
    secret: 'get_token',
}).unless({
    path: unlessRules
}))


router.use(routerCollection.routes(), routerCollection.allowedMethods());
app.use(router.routes(),router.allowedMethods());


app.listen(3000,()=>{
    console.log('server is success in port 3000')
})