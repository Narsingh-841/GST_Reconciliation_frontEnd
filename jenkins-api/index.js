const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const { URLSearchParams } = require('url');
const functions = require('firebase-functions');
require('dotenv').config();
const emailApi = require('./email').api; // Ensure this is importing the exported function

// Retrieve Jenkins credentials from environment variables
const JENKINS_USERNAME = process.env.JENKINS_USERNAME || functions.config().jenkins?.username;
const JENKINS_API_TOKEN = process.env.JENKINS_API_TOKEN || functions.config().jenkins?.token;

if (!JENKINS_USERNAME || !JENKINS_API_TOKEN) {
  console.error('Jenkins credentials are missing in environment variables');
  process.exit(1);
}

// Create an Express app
const app = express();

// CORS configuration
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser middleware to parse JSON data
app.use(bodyParser.json());

// Endpoint to trigger Jenkins job
app.post('/api/runJenkinsJob', async (req, res) => {
  const { formData, formType } = req.body;

  // Convert JSON payload to URL-encoded format
  const urlEncodedData = new URLSearchParams(formData).toString();
  console.log('Sending to Jenkins:', urlEncodedData);

  // Define Jenkins job URLs based on form type
  const jenkinsUrl = formType === "xero"
    ? 'https://jenkins.theoutsourcepro.com.au/job/Xero/buildWithParameters'
    : formType === "myob"
      ? 'https://jenkins.theoutsourcepro.com.au/job/myob-job/buildWithParameters'
      : null;

  if (!jenkinsUrl) {
    return res.status(400).send('Invalid form type');
  }

  try {
    const response = await axios.post(jenkinsUrl, urlEncodedData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${JENKINS_USERNAME}:${JENKINS_API_TOKEN}`).toString('base64')}`
      }
    });
    console.log('Jenkins response:', response.status, response.data);

    if (response.status === 201) {
      res.status(200).send('Job triggered successfully');
    } else {
      res.status(response.status).send('Failed to trigger job');
    }
  } catch (error) {
    console.error('Error triggering Jenkins job:', error.response ? error.response.data : error.message);
    res.status(500).send('Error occurred while triggering Jenkins job');
  }
});

// Use email API routes
app.use(emailApi);

// Firebase Functions export
exports.api = onRequest(app);
