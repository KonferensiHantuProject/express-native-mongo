// Route
const express = require('express');
const router = express.Router();

// Controller
const userController = require('../controller/main.controller')

// Index
router.get('/', userController.index);

// Create
router.post('/', userController.create);

// Update
router.put('/:_id', userController.update);

module.exports = router;