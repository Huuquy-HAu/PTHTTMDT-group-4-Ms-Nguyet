const { changePassword, updateUserInfo, upload, changeAvatar } = require('../controllers/userController');
const { checkLogin } = require('../middlewares/auth');
const router = require('express').Router();

router.patch('/change-password', checkLogin, changePassword);
router.patch('/update-info', checkLogin, updateUserInfo);
router.patch('/change-avatar', checkLogin, upload.single('avatar'), changeAvatar);

module.exports = router;