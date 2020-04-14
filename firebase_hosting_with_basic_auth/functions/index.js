const functions = require('firebase-functions')
const express = require('express')
const basicAuth = require('basic-auth-connect')
const app = express()

app.all('/*', basicAuth((user, password) => {
  return user === 'youruser' && password === 'yourpassword';
}));

app.use(express.static(`${__dirname}/static/`))

exports.app = functions.https.onRequest(app)
