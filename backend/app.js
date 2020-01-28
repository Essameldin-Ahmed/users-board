const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const users = require('./routes/users');


const app = express();

app.listen('3000', () => console.log(`Example app listening on port ${'3000'}!`))
app.use(bodyParser.json({limit: '10mb', extended: true}));

// allaw access
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  if ('OPTIONS' === req.method) {
   res.sendStatus(200);
  }
  else {
    next();
  }
});


app.use('/api/auth', authRouter);
app.use('/api/users', users);

module.exports = app;

