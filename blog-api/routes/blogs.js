const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const ownerCheck = require('../middleware/ownerCheck');
const blogController = require('../controllers/blogController');

router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlog);
router.post('/', auth, roleCheck(['author', 'admin']), blogController.createBlog);
router.put('/:id', auth, ownerCheck, blogController.updateBlog);
router.delete('/:id', auth, ownerCheck, blogController.deleteBlog);
router.get('/category/:categoryId', blogController.getBlogsByCategory);

module.exports = router;