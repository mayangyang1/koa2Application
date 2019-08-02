const mongoose = require('mongoose');

const goodsWaybillSchema = new mongoose.Schema({
    company: String,
    waybillNo: {
        type: String,
        default: function () {
           return new Date().getTime().toString()
        }
    },
    routeName: String,
    perWeight: Number,
    perWeightUnitCode: {
        type: String,
        default: function() {
            return '吨';
        }
    },
    address: String,
    goodsName: String,
    goodsWeight: Number,
    goodsWeightUnitCode: {
        type:String,
        default: function() {
            return '吨';
        }
    },
    createTime:  {
        type: String,
        default: function() {
            return new Date().toString()
        }
    },
    goodsStatus: {
        type: String,
        default: function() {
            return 'ready'
        }
    }
})

module.exports = goodsWaybillSchema;