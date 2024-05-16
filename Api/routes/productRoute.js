const { getAllProducts, createProduct, getOneProduct, upload, updateProductThumb, updateProductInfo, findProductByName } = require('../controllers/productController');
const { checkLogin, checkAdmin } = require('../middlewares/auth');
const router = require('express').Router();

router.get('/get-all-products', getAllProducts);
router.get('/find-products-by-name', findProductByName);
router.get('/get-one-product/:productId', getOneProduct);
router.post('/create-product', checkLogin, checkAdmin, upload.single('thumbnail'), createProduct);
router.patch('/update-product-thumb/:productId', checkLogin, checkAdmin, upload.single('thumb'), updateProductThumb);
router.patch('/update-product-info/:productId', checkLogin, checkAdmin, updateProductInfo);

module.exports = router;