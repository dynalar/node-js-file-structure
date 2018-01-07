'use strict';

// for adding in express files. these are our dependencies!
const express = require('express');
const app = express();
const routes = require("./routes/routes.js");

// this connects all of our routes together. imported from the variable above.
app.use('/', routes);

// actually runs the application, listens to events and connections
app.listen(3000, function() {
  console.log('App is now running on port 3000.');
});