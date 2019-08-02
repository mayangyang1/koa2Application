const mongoose = require('mongoose'),
    goodsWaybillSchema = require('../schema/goodsWaybillSchema.js');

module.exports = mongoose.model('goods_waybill', goodsWaybillSchema, 'goods_waybill');