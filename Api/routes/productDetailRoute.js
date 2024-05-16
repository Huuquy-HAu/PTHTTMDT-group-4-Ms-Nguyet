const { createProductDetail, getAllDetailOfProduct, getOneProductDetail, updateProductDetailInfo, updateProductDetailStatus, addProductDetailThumbs, upload, removeProductDetailThumbs} = require('../controllers/productDetailController');
const router = require('express').Router();
const {checkLogin, checkAdmin} = require('../middlewares/auth');

router.get('/get-all-detail/product/:productId', getAllDetailOfProduct);
router.get('/get-one-detail/:productDetailId', getOneProductDetail);
router.post('/create-product-detail/product/:productId', checkLogin, checkAdmin, createProductDetail);
router.patch('/update-product-detail-info/:productDetailId', checkLogin, checkAdmin, updateProductDetailInfo);
router.patch('/update-product-detail-status/:productDetailId', checkLogin, checkAdmin, updateProductDetailStatus);
router.patch('/add-product-detail-thumbs/:productDetailId', checkLogin, checkAdmin, upload.array('thumbs', 10), addProductDetailThumbs);
router.patch('/remove-product-detail-thumbs/:productDetailId', checkLogin, checkAdmin, removeProductDetailThumbs);

module.exports = router;