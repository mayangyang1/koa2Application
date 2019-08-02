const goodsWaybill = require('koa-router')(),
    GoodsWaybillController = require('../controllers/goodsWaybill.js');

goodsWaybill.post('/addGoodsWaybill', GoodsWaybillController.addGoodsWaybill);
goodsWaybill.get('/getGoodsWaybillList', GoodsWaybillController.getGoodsWaybillList);



module.exports = goodsWaybill;