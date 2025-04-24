const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getAllCategories);
router.get('/:id', categoryController.getCategory);
router.post('/', auth, roleCheck(['admin']), categoryController.createCategory);
router.put('/:id', auth, roleCheck(['admin']), categoryController.updateCategory);
router.delete('/:id', auth, roleCheck(['admin']), categoryController.deleteCategory);

module.exports = router;