const { onRequest } = require("firebase-functions/v2/https");
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

const emailUser = 'toptechautomation@theoutsourcepro.com.au'; // Your email
const emailPass = 'J7OJb*ZwQD25HpC2KO8*n'; // Your email password

const transporter = nodemailer.createTransport({
  service: 'Outlook365',
  auth: {
    user: emailUser,
    pass: emailPass,
  },
});

// Send email API
app.post('/api/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  // Basic validation
  if (!subject || !text) {
    return res.status(400).send('Missing required fields: subject, text.');
  }

  const mailOptions = {
    from: emailUser,
    to: 'narsingh@theoutsourcepro.com.au', // Your support email
    subject: `Help Request: ${subject}`, // Prefix the subject for clarity
    text: `Message from: ${to}\n\n${text}`, // Include user's email in the message body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Failed to send email: ' + error.message);
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

// Send demo email API
app.post('/api/send-demo-email', (req, res) => {
  const { name, email, company, message } = req.body;

  const mailOptions = {
    from: emailUser,
    to: 'narsingh@theoutsourcepro.com.au', // Your support email
    subject: `Demo Request from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending demo request email:', error);
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Demo request email sent: ' + info.response);
  });
});

// Firebase Functions export
exports.api = onRequest(app);
