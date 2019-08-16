const router = require('koa-router')(),
    Upload = require('../controllers/uploadImage.js');

router.post('/upload', Upload.uploadSingleImage);
router.post('/uploadFiles', Upload.uploadMultipleImage);

module.exports = router;