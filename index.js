const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes/routes');
const res = require('express/lib/response');
require('dotenv').config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', () => {
  console.log('Now Connected...');
});

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is now up at port ${port}`);
});
