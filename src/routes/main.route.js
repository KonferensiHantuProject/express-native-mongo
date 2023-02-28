// Route
const express = require('express');
const router = express.Router();

// Controller
const userController = require('../controller/main.controller')

// Home
router.get('/', userController.index);

module.exports = router;