const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// Route handlers
const authentication = require('./routes/authentication')
const dashboard = require('./routes/dashboard')
const profile = require('./routes/profile')

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/', authentication);
app.use('/dashboard', dashboard);
app.use('/profile', profile);

app.listen(PORT, function () {
  console.log(`Server successfully started on port ${PORT}`);
})