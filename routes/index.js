const router = require('koa-router')(),
    userRouter = require('./user')
    goodsWaybillRoute = require('./goodsWaybill');

router.use(userRouter.routes(), userRouter.allowedMethods());
router.use(goodsWaybillRoute.routes(), goodsWaybillRoute.allowedMethods());

module.exports = router;

//汇总所有路由
