'use strict';

// mongoose dependencies. change the URL to what you need.
const mongoose = require('mongoose');
const mongooseDbUrl = "mongodb://localhost/test_database";
mongoose.connect(mongooseDbUrl);

// express dependencies
const express = require('express');
const app = express();
const routes = require("./routes/routes.js");

// environment variables
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// this connects all of our routes together. imported from the variable above.
app.use('/', routes);

// actually runs the application, listens to events and connections
app.listen(3000, function() {
  console.log('App is now running on port 3000.');
});