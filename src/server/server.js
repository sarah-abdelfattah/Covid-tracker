const express = require('express');
const jwks = require('jwks-rsa');
const { expressjwt } = require("express-jwt");
const bodyParser = require('body-parser');
const cors = require('cors');
var AuthenticationClient = require('auth0').AuthenticationClient;
var ManagementClient = require('auth0').ManagementClient;

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
const dashboard = require('./routes/dashboard')
const user = require('./routes/user')

/************************** ROUTES **************************/
app.use('/auth', authentication);
app.use('/dashboard', dashboard);
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

var auth0 = new AuthenticationClient({
  domain: 'dev-9r9paw-9.us.auth0.com',
  clientId: '{WX140B6rAlMOi3N5r8IkKoqh7Wq6ZkvK}',
});

let data = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkNFNUh5Y19qRW03STdtYXpoazlPciJ9.eyJpc3MiOiJodHRwczovL2Rldi05cjlwYXctOS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjI4NjA3Njg1Mzk1NWIwMDY3MDhjY2ZkIiwiYXVkIjpbImh0dHBzOi8vdGFzay1zZXJ2ZXIuY29tIiwiaHR0cHM6Ly9kZXYtOXI5cGF3LTkudXMuYXV0aDAuY29tL3VzZXJpbmZvIl0sImlhdCI6MTY1NDI2NDkxMCwiZXhwIjoxNjU0MzUxMzEwLCJhenAiOiJXWDE0MEI2ckFsTU9pM041cjhJa0tvcWg3V3E2Wmt2SyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.Ajp-ybpSdDjZJkktxNQGw3EzIZ0BHGpAwbdiGGcp-OodUMr3DbqlOQINBzQdlvqBpHnsBpWLGF7ZKpII-YHwZYnV6arCD_htGkNy_8rVsu7FoPJ7pImgnCpSLjjS7yWKXSunkGsMwJzcL7DEcO9xCzr0rF3Kao5NBSaUitCINcIzx0ofuXcTc30vaiXG1JFajZ9R3P45VapO_gipJTAowuPJZ8RsVdj7JSpr2WYvup_9Fy-EFIND6jjGsfMKne8aVoxYipAfEDwDs2rE1pkGfqdgygEEPOVZBQ_YB5_8QbNbEEqKsF8RLsM9YYwjOPPcByH-A9Px_UiiTketcdeGQQ'
// auth0.getProfile(data, function (err, userInfo) {
//   if (err) {
//     // Handle error.
//   }

//   console.log(userInfo);
// });

// var management = new ManagementClient({
//   token: 'https://dev-9r9paw-9.us.auth0.com/api/v2/',
//   domain: 'dev-9r9paw-9.us.auth0.com',
// });

// management.getUser({ id: "auth0|6286076853955b006708ccfd" }, function (err, user) {
//   console.log("🚀 ~ file: server.js ~ line 66 ~ err", err);
//   console.log(user);
// });

/*********************** START SERVER ***********************/
const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log(`Server successfully started on port ${PORT}`);
})