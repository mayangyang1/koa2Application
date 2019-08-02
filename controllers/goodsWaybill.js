const goodsWaybillModel = require('../models/goodsWaybillSchema.js');

class goodsWaybillController  {
    //新建货单
    static async addGoodsWaybill(ctx) {
        
        const data = ctx.request.body;
        const goodsWaybill = new goodsWaybillModel({
            company: data.company,
            routeName: data.routeName,
            perWeight: data.perWeight,
            address: data.address,
            goodsName: data.goodsName,
            goodsWeight: data.goodsWeight,

        })
        const result = await goodsWaybill.save();
        return result !== null ? ctx.send('新建成功') : ctx.sendError(500, '新建失败');

    }
    //获取运单详情
    static async getGoodsWaybillList(ctx) {
        const data = ctx.request.query;
        const goodsWaybillList = await goodsWaybillModel.find({}).skip((data.page-1) * 10).limit(10).sort({'_id' : -1});
        if(goodsWaybillList != null) {
            ctx.send(goodsWaybillList);
        }else{
            ctx.sendError(500, '系统错误');
        }
    }
}

module.exports = goodsWaybillController;