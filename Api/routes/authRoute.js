const { signUp, signIn, getLogedInUser } = require('../controllers/authController');
const { checkLogin } = require('../middlewares/auth');
const router = require('express').Router();

router.post('/sign-up', signUp);
router.post('/sign-in', signIn);
router.get('/get-loged-in-user', checkLogin, getLogedInUser);

module.exports = router;