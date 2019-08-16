const router = require('koa-router')(),
    userRouter = require('./user')
    goodsWaybillRoute = require('./goodsWaybill'),
    uploadImageRoute = require('./uploadImage');

router.use(userRouter.routes(), userRouter.allowedMethods());
router.use(goodsWaybillRoute.routes(), goodsWaybillRoute.allowedMethods());
router.use(uploadImageRoute.routes(), uploadImageRoute.allowedMethods());

module.exports = router;

//汇总所有路由
