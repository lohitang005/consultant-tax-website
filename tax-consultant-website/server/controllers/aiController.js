const { API_KEYS } = require('../config/keys');

const generateAIResponse = async (req, res) => {
    try {
        const { message, context } = req.body;

        // Validate request
        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        const prompt = `You are a professional tax and business consultant AI assistant for an Indian CA firm.
        Previous context: ${context || 'None'}
        
        Respond to the following query in a professional, helpful manner.
        If the query is about Indian taxation, provide specific references to relevant sections and rules.
        If you're not sure about something, clearly state that.
        Keep the response concise but informative.
        
        Format any numerical data or calculations clearly.
        If discussing tax rates or deadlines, specify the applicable financial year.
        
        User Query: ${message}`;

        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEYS.GEMINI_API_KEY}`
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.7,
                    topK: 40,
                    topP: 0.95,
                    maxOutputTokens: 1024,
                },
                safetySettings: [
                    {
                        category: "HARM_CATEGORY_HARASSMENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_HATE_SPEECH",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    },
                    {
                        category: "HARM_CATEGORY_DANGEROUS_CONTENT",
                        threshold: "BLOCK_MEDIUM_AND_ABOVE"
                    }
                ]
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Gemini API Error:', errorData);
            throw new Error('Failed to get AI response');
        }

        const data = await response.json();
        
        // Extract and format the response
        const aiResponse = {
            text: data.candidates[0].content.parts[0].text,
            timestamp: new Date(),
            messageId: Math.random().toString(36).substring(7)
        };

        // Save to chat history if needed
        // await saveChatHistory(req.user.id, message, aiResponse.text);

        res.json(aiResponse);

    } catch (error) {
        console.error('AI Controller Error:', error);
        res.status(500).json({ 
            error: 'Failed to generate response',
            details: error.message 
        });
    }
};

const getChatHistory = async (req, res) => {
    try {
        // Implement chat history retrieval
        // const history = await ChatHistory.find({ userId: req.user.id })
        //     .sort({ timestamp: -1 })
        //     .limit(50);
        
        res.json([]);
    } catch (error) {
        console.error('Chat History Error:', error);
        res.status(500).json({ error: 'Failed to fetch chat history' });
    }
};

module.exports = {
    generateAIResponse,
    getChatHistory
}; 