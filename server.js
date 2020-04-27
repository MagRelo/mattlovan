const express = require('express');
const app = require('express')();
const server = require('http').Server(app);
const bodyParser = require('body-parser');
const morgan = require('morgan');

// *
// Server
// *

// configure express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(
  morgan('dev', {
    skip: function(req, res) {
      // remove the frontend dev server's 'json' calls from the console output
      return req.originalUrl.indexOf('json') > 0;
    },
  })
);

app.use(
  express.static('build', {
    maxage: '1y',
    index: false,
  })
);

// page routing
const routesApi = require('./routes');
app.use('/', routesApi);

// start server
server.listen(8080, () => {
  console.log('server listening on 8080');
});
