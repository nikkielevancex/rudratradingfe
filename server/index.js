
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/contact', async (req, res) => {
    const { name, email, phone, company, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rudratradingorg@gmail.com',
            pass: process.env.GMAIL_APP_PASSWORD
        }
    });

    const mailOptions = {
        from: 'rudratradingorg@gmail.com',
        to: 'rudra_trading@yahoo.com',
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nMessage: ${message}`,
        html: `<html>
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
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong><br>${message}</p>
      </div>
      <div class="footer">
        <p>Rudra Trading Co.<br>
        A-75 Marketing Yard, Hapa Industrial Area, Jamnagar, Gujarat, India - 361120<br>
        🌐 <a href="http://rudra-trading.com" style="color:#2e7d32;text-decoration:none;">rudra-trading.com</a></p>
      </div>
    </div>
  </body>
</html>
`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Message sent successfully.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send message.' });
    }
});

app.listen(PORT, () => {
    console.log(`SMTP server running on port ${PORT}`);
});
