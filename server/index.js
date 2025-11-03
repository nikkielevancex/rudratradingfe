
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import SibApiV3Sdk from '@sendinblue/client';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration - allow all origins for testing
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).json({ 
        status: 'ok', 
        message: 'Rudra Trading SMTP Server is running',
        timestamp: new Date().toISOString()
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'healthy', 
        service: 'SMTP Server',
        timestamp: new Date().toISOString()
    });
});

app.post('/contact', async (req, res) => {
    const { name, email, phone, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({ 
            success: false, 
            message: 'Name, email, and message are required fields.' 
        });
    }

    // Check if BREVO_API_KEY is set
    if (!process.env.BREVO_API_KEY) {
        console.error('BREVO_API_KEY environment variable is not set');
        return res.status(500).json({ 
            success: false, 
            message: 'Email service configuration error.' 
        });
    }

    // Initialize Brevo client
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    const apiKey = apiInstance.authentications['apiKey'];
    apiKey.apiKey = process.env.BREVO_API_KEY;

    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    
    sendSmtpEmail.sender = { 
        name: 'Rudra Trading Co. Website', 
        email: 'rudratradingorg@gmail.com' 
    };
    sendSmtpEmail.to = [{ 
        email: 'vgajjar1010@gmail.com', 
        name: 'Rudra Trading Co' 
    }];
    sendSmtpEmail.subject = `New Contact Form Submission from ${name}`;
    sendSmtpEmail.htmlContent = `<html>
  <head>
    <style>
      body {
        font-family: 'Segoe UI', Arial, sans-serif;
        background-color: #f6f8fa;
        margin: 0;
        padding: 20px;
      }
      .container {
        max-width: 600px;
        background: #ffffff;
        margin: 0 auto;
        border-radius: 10px;
        padding: 25px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      }
      .header {
        text-align: center;
        border-bottom: 2px solid #2e7d32;
        padding-bottom: 10px;
        margin-bottom: 20px;
      }
      .header h2 {
        color: #2e7d32;
        margin: 0;
      }
      .content p {
        margin: 8px 0;
        color: #333;
        font-size: 15px;
      }
      .content strong {
        color: #000;
      }
      .footer {
        text-align: center;
        font-size: 13px;
        color: #666;
        margin-top: 25px;
        border-top: 1px solid #eaeaea;
        padding-top: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>📩 New Inquiry from Rudra Trading Co. Website</h2>
      </div>
      <div class="content">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong><br>${message}</p>
      </div>
      <div class="footer">
        <p>Rudra Trading Co.<br>
        A-75 Marketing Yard, Hapa Industrial Area, Jamnagar, Gujarat, India - 361120<br>
        🌐 <a href="https://rudra-trading.com" style="color:#2e7d32;text-decoration:none;">rudra-trading.com</a></p>
      </div>
    </div>
  </body>
</html>`;
    sendSmtpEmail.textContent = `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nCompany: ${company || 'Not provided'}\nMessage: ${message}`;

    try {
        await apiInstance.sendTransacEmail(sendSmtpEmail);
        console.log(`Email sent successfully for ${name} (${email})`);
        res.status(200).json({ success: true, message: 'Message sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        console.error('Error details:', error.response?.body || error.message);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send message. Please try again later or contact us directly.',
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
});

app.listen(PORT, () => {
    console.log(`SMTP server running on port ${PORT}`);
});
