require('dotenv').config();

module.exports = {
    API_KEYS: {
        GEMINI_CHAT_API_KEY: process.env.GEMINI_CHAT_API_KEY,
        GEMINI_BLOG_API_KEY: process.env.GEMINI_BLOG_API_KEY
    },
    JWT_SECRET: process.env.JWT_SECRET || 'default-secret-key',
    PORT: process.env.PORT || 5000
}; 