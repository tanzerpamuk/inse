'use strict';

const express = require('express');
const app = express();
const db = require('./model-mysql');

app.listen(8080, (err) => {
  if (err) console.log('error starting server', err);
  else console.log('server started');
});

app.use('/', express.static('../webpages', { extensions: ['html'] }));

// SERVER FUNCTIONS //

app.get('/api/login', login);

async function login(req, res) {
  try {
    const loginstatus = await db.login(req.query.username, req.query.password);
    res.send(loginstatus);
  } catch (e) {
    error (res, e);
  }
}

function error (res, msg) {
  res.sendStatus(500);
  console.error(msg);
}
