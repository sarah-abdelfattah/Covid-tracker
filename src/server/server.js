const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { expressjwt: jwt } = require("express-jwt");
const jwks = require('jwks-rsa');
const axios = require('axios');
require('dotenv').config();

// Route handlers
const authentication = require('./routes/authentication')
const dashboard = require('./routes/dashboard')
const user = require('./routes/user')

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json());

var verifyJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.VITE_AUTH0_ISSUER}.well-known/jwks.json`
  }),
  audience: process.env.VITE_AUTH0_AUDIENCE,
  issuer: process.env.VITE_AUTH0_ISSUER,
  algorithms: [process.env.VITE_AUTH0_ALGORITHM]
}).unless({ path: '/' })

app.use(verifyJwt);

// Routes
app.use('/', authentication);
app.use('/dashboard', dashboard);
app.use('/user', user);

app.listen(PORT, function () {
  console.log(`Server successfully started on port ${PORT}`);
})