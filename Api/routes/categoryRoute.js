const { createCategory, upload, updateCategory, getAllCategories, getOneCategory, findCategoryByName } = require('../controllers/categoryController');
const { checkLogin, checkAdmin } = require('../middlewares/auth');
const router = require('express').Router();

router.get('/get-all-categories', getAllCategories);
router.get('/get-one-category/:categoryId', getOneCategory);
router.get('/find-categories-by-name', findCategoryByName);
router.post('/create-category', checkLogin, checkAdmin, upload.single('thumb'), createCategory);
router.patch('/update-category/:categoryId', checkLogin, checkAdmin, upload.single('thumb'), updateCategory);

module.exports = router;