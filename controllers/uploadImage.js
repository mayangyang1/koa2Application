const fs = require('fs')
const path = require('path')

class unloadImagController {
    //上传单个文件
    static async uploadSingleImage(ctx) {
        const file = ctx.request.files.file; //获取上传的文件
        //创建可读流
        const reader = fs.createReadStream(file.path);
        const timeStamp = new Date().getTime();
        let filePath = path.join(__dirname, '../public/upload') + `/${timeStamp}` + `.${file.name.split('.')[1]}`;
        //创建可写流
        const upStream = fs.createWriteStream(filePath);
        //可读流通过管道写入可写流
        reader.pipe(upStream);
        return ctx.send({
            url: filePath,
            resourceCode: timeStamp
        });
    }
    //上传多个文件
    static async uploadMultipleImage(ctx) {
        const files = ctx.request.files.file;//获取上传文件
        for(let file of files) {
            //创建可读流
            const reader = fs.createReadStream(file.path);
            const timeStamp = new Date().getTime();
            let filePath = path.join(__dirname, '../public/upload') + `/${timeStamp}` + `.${file.name.split('.')[1]}`;
            //创建可写流
            const upStream = fs.createWriteStream(filePath);
            //可读流通过管道写入可写流
            reader.pipe(upStream);
            return ctx.send({
                url: filePath,
                reasourceCode: timeStamp
            })
        }
    }
}
module.exports = unloadImagController;