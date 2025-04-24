const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/roleCheck');
const userController = require('../controllers/userController');

router.get('/', auth, roleCheck(['admin']), userController.getAllUsers);
router.get('/:id', auth, userController.getUser);
router.put('/:id', auth, userController.updateUser);
router.delete('/:id', auth, roleCheck(['admin']), userController.deleteUser);

module.exports = router;