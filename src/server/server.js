const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { auth } = require('express-openid-connect');
require('dotenv').config();

// Route handlers
const authentication = require('./routes/authentication')
const dashboard = require('./routes/dashboard')
const profile = require('./routes/profile')

const PORT = process.env.PORT || 3000;

const app = express();
const config = {
  authRequired: false,
  auth0Logout: true,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  secret: process.env.SECRET,
  idpLogout: true,
};

app.use(auth(config));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('src'))
app.use(cors());
app.use(bodyParser.json());

// Routes
app.all('*', async (req, res, next) => {
  try {
    req.oidc.isAuthenticated() ? next() : res.redirect('/login');
  } catch (err) {
    console.log('~ err', err);
    res.send({ error: err });
  }
});
app.use('/', authentication);
app.use('/dashboard', dashboard);
app.use('/profile', profile);

app.listen(PORT, function () {
  console.log(`Server successfully started on port ${PORT}`);
})