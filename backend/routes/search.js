const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');
const auth = require('../middleware/auth');

router.get('/tasks', searchController.searchTasks);
router.get('/users', auth, searchController.searchUsers);

module.exports = router; 