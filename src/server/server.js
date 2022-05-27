const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { auth } = require('express-openid-connect');

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('src'))
app.use(cors());

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

// Route handlers
const authentication = require('./routes/authentication')
const dashboard = require('./routes/dashboard')
const profile = require('./routes/profile')



app.all('*', async (req, res, next) => {
  try {
    if (req.oidc.isAuthenticated()) {
      console.log("authenticated indeed")
      next();

    } else {
      console.log("not authenticated")
      res.send({ error: 'not authenticated!' })
    }
  } catch (err) {
    console.log('~ err', err);
    res.send({ error: err });
  }
});


app.get('/', authentication);
app.use('/dashboard', dashboard);
app.use('/profile', profile);



const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server successfully started on port ${PORT}`);
})