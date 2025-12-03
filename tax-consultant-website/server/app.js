const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/aiRoutes');
require('dotenv').config();
const { sendEmail, formatContactEmail } = require('./utils/emailHelper');

const app = express();

// CORS configuration
const corsOptions = {
  origin: [
    'http://localhost:3000',
    'https://tax-consultant-website.vercel.app',
    process.env.FRONTEND_URL // For custom domain
  ].filter(Boolean), // Remove null/undefined values
  methods: ['GET', 'POST'],
  credentials: true,
  optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/ai', aiRoutes);

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    // API key validation (set CONTACT_FORM_API_KEY in env)
    const clientApiKey = req.headers['x-api-key'];
    const serverApiKey = process.env.CONTACT_FORM_API_KEY;
    if (serverApiKey && clientApiKey !== serverApiKey) {
      return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    const { name, email, phone, service, message } = req.body;

    // Validate input
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide all required fields'
      });
    }

    // Format and send email
    const mailOptions = formatContactEmail(req.body);
    await sendEmail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// Subscribe/Lead magnet endpoint
app.post('/api/subscribe', async (req, res) => {
  try {
    const clientApiKey = req.headers['x-api-key'];
    const serverApiKey = process.env.CONTACT_FORM_API_KEY;
    if (serverApiKey && clientApiKey !== serverApiKey) {
      return res.status(401).json({ success: false, error: 'Unauthorized' });
    }

    const { name, email, asset } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, error: 'Email is required' });
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER,
      subject: 'New Lead Magnet Subscription',
      html: `
        <h2>New Lead Magnet Subscription</h2>
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
        <p><strong>Email:</strong> ${email}</p>
        ${asset ? `<p><strong>Asset:</strong> ${asset}</p>` : ''}
      `
    };
    await sendEmail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Subscribe error:', error);
    res.status(500).json({ success: false, error: 'Failed to subscribe' });
  }
});

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

module.exports = app;
