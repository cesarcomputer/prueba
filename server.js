'use strict';
require('dotenv').config();
const express = require('express');
const path = require('path');
const myDB = require('./connection');
const fccTesting = require('./freeCodeCamp/fcctesting.js');

const app = express();

// Set Pug as the view engine
app.set('view engine', 'pug');
// Set the views directory to ./views/pug
app.set('views', './views/pug');

fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/').get((req, res) => {
  // Render the Pug template for the index page
  res.render('index', { title: 'Hello', message: 'Please log in' });

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
