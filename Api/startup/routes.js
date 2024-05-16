const router = require('express').Router();
const authRoute = require('../routes/authRoute');
const userRoute = require('../routes/userRoute');
const cartRoute = require('../routes/cartRoute');
const categoryRoute = require('../routes/categoryRoute');
const orderRoute = require('../routes/orderRoute');
const productDetailRoute = require('../routes/productDetailRoute');
const productRoute = require('../routes/productRoute');

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/cart', cartRoute);
router.use('/category', categoryRoute);
router.use('/order', orderRoute);
router.use('/productDetail', productDetailRoute);
router.use('/product', productRoute);

module.exports = router;