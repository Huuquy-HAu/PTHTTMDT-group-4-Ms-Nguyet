const { getLogedInCart, addToCart, removeFromCart, updateCartQuantity, updateCartSelect } = require('../controllers/cartController');
const { checkLogin } = require('../middlewares/auth');
const router = require('express').Router();

router.get('/get-loged-in-cart', checkLogin, getLogedInCart);
router.patch('/add-to-cart', checkLogin, addToCart);
router.patch('/remove-from-cart', checkLogin, removeFromCart);
router.patch('/update-cart-quantity', checkLogin, updateCartQuantity);
router.patch('/update-cart-select', checkLogin, updateCartSelect);

module.exports = router;