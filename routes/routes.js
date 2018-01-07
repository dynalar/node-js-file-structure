// all of our routes for our application will be declared here.
// keep everything organized! Comment your code!!!

const routes = require('express').Router();

// all of your routes go here.
routes.get('/', (req, res) => {
  res.status(200).json({ 
  	message: 'Connection established.',
  });
});


// export routes, so they can be used in the require statement in app.js
module.exports = routes;