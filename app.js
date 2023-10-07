const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const cors = require('cors');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use(cors({
    origin: 'https://cse341-contacts-frontend.netlify.app'
  }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Content-Type","application/json" );
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});
