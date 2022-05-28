/** Required External Modules **/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { auth } = require('express-openid-connect');
const path = require("path");
const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
require('dotenv').config();

// Route handlers
const authentication = require('./routes/authentication')
const dashboard = require('./routes/dashboard')
const profile = require('./routes/profile')

/** App Variables **/
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





/** Session Configuration **/
const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};

/** Passport Configuration **/
const strategy = new Auth0Strategy(
  {
    domain: process.env.AUTH0_DOMAIN,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
    /**
     * Access tokens are used to authorize users to an API
     * (resource server)
     * accessToken is the token to call the Auth0 API
     * or a secured third-party API
     * extraParams.id_token has the JSON Web Token
     * profile has all the information from the user
     */
    return done(null, profile);
  }
);

/** App Configuration **/
app.use(auth(config));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('src'))
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(expressSession(session));
passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});


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