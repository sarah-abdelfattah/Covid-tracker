/** Required External Modules **/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { auth } = require('express-openid-connect');
require('dotenv').config();

const path = require("path");

const helmet = require("helmet");
const nocache = require("nocache");

const { errorHandler } = require("./middleware/error.middleware");
const { notFoundHandler } = require("./middleware/not-found.middleware");


// Route handlers
const authentication = require('./routes/authentication')
const dashboard = require('./routes/dashboard')
const profile = require('./routes/profile')

/** App Variables **/
const CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_URL;
const port = process.env.PORT || 3000;
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

/** App Configuration **/
app.use(auth(config));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('src'))
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
// app.use((req, res, next) => {
//   res.contentType("application/json; charset=utf-8");
//   next();
// });
app.use(nocache());
app.use(
  helmet({
    hsts: {
      maxAge: 31536000,
    },
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "default-src": ["'none'"],
        "frame-ancestors": ["'none'"],
      },
    },
    frameguard: {
      action: "deny",
    },
  })
);
app.use(
  cors({
    origin: CLIENT_ORIGIN_URL,
    methods: ["GET"],
    allowedHeaders: ["Authorization", "Content-Type"],
    maxAge: 86400,
  })
);
app.use(errorHandler);
app.use(notFoundHandler);


// Routes
app.all('*', async (req, res, next) => {
  try {
    if (req.oidc.isAuthenticated()) {
      next()
    } else {
      console.log("not auth")
      res.redirect('/login');
    }
    // req.oidc.isAuthenticated() ? next() : res.redirect('/login');
  } catch (err) {
    console.log('~ err', err);
    res.send({ error: err });
  }
});

app.use('/', authentication);
app.use('/dashboard', dashboard);
app.use('/profile', profile);

if (app.get("env") === "production") {
  // Serve secure cookies, requires HTTPS
  session.cookie.secure = true;
}

app.listen(port, function () {
  console.log(`Server successfully started on port ${port}`);
})