const express = require('express');
const jwks = require('jwks-rsa');
const { expressjwt } = require("express-jwt");
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json());

/********************** AUTHENTICATION **********************/
var verifyJwt = expressjwt({
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

/********************** ROUTE HANDLERS **********************/
const authentication = require('./routes/authentication')
const diagnosis = require('./routes/diagnosis')
const user = require('./routes/user')

/************************** ROUTES **************************/
app.use('/auth', authentication);
app.use('/diagnosis', diagnosis);
app.use('/user', user);

/********************** ERROR HANDLING **********************/
app.use((next) => {
  const error = new Error("Not found")
  error.status = 404;
  next(error)
})

app.use((error, res) => {
  const status = error.status || 500;
  const message = error.message || "Internal server error"
  res.status(status).send(message)
})

/*********************** START SERVER ***********************/
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log(`Server successfully started on port ${PORT}`);
})