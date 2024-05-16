const { createOrder, getAllOrder, getOneOrder, getOrderByUserId, changeOrderStatus } = require('../controllers/orderController');
const { checkLogin, checkAdmin } = require('../middlewares/auth');
const router = require('express').Router();

router.get('/get-all-order', checkLogin, checkAdmin, getAllOrder);
router.get('/get-one-order/:orderId', checkLogin, getOneOrder);
router.get('/get-order-by-userId/user/:userId', checkLogin, getOrderByUserId);
router.post('/create-order', checkLogin, createOrder);
router.patch('/change-order-status/:orderId', checkLogin, changeOrderStatus);

module.exports = router;