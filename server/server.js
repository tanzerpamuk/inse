'use strict';

const express = require('express');
const app = express();
// const db = ...

app.listen(8080, (err) => {
  if (err) console.log('error starting server', err);
  else console.log('server started');
});

app.use('/', express.static('webpages', { extensions: ['html'] }));

// SERVER FUNCTIONS //
 
