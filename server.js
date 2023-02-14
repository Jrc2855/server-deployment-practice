'use strict';

// require('dotenv').config();
const express = require('express');
const logger = require('./middleware/logger.js');
const notFound = require('./handlers/404.js')
const errorHandler = require('./handlers/500.js')
const PORT = process.env.PORT || 3001;

//  creates an express singleton
const app = express();

app.get('/', logger, (req, res, next) => {

  res.status(200).send(req.log);
});

app.get('/bad', (req, res, next) => {
  next('we have an error');
})

app.use('*', notFound);

app.use(errorHandler)

const start = () => {
  app.listen(PORT, console.log('Proof of Life'));

}

module.exports = { start, app };

// Code taken from in class Code Review