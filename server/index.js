const express = require('express');
const path = require('path'); // provides a way of working with directories and file paths.
const morgan = require('morgan'); // middleware to log HTTP requests and errors
const mysqlConnection = require('./mysqlConnection'); // enables DB connection

const routes = require('./routes');

const app = express();

// localhost port - would hide (like in .env) for production
const PORT = 8080;

module.exports = app;

const createApp = () => {
  //logging middleware
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    next();
  });

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

app.use('/donations', routes);

// function to tell app which port to listen for on localhost
const startListening = () => {
  // the app's .listen method - takes in port as 1st arg, CB func as 2nd arg
  const server = app.listen(PORT, () =>
    console.log(`Listening on port ${PORT}`));

  // can set up socket control center here if needed
};

async function bootApp() {
  await createApp();
  await startListening();
}

// conditional evaluates as true when file is run directly from command line, and false when this module is required by another module (i.e., requiring this app in a test spec)
if (require.main === module) {
  bootApp();
} else {
  createApp();
}
