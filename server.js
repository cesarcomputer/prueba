'use strict';
require('dotenv').config();
const express = require('express');
const path = require('path');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views/pug'));

// FCC testing
fccTesting(app);

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Render index.pug at root
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'Hello', 
    message: 'Please log in',
    showLogin: true,
    showRegistration: true,
    showSocialAuth: true
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port', PORT));
