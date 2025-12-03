const express = require('express');
const router = express.Router();
const { generateAIResponse, getChatHistory } = require('../controllers/aiController');

// Generate AI response
router.post('/generate', generateAIResponse);

// Get chat history
router.get('/history', getChatHistory);

module.exports = router; 