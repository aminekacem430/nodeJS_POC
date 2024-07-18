 
const express = require('express');
const path = require('path');  
const http = require('http');

require('./config')

const userRouter = require('./routes/users.route');

const app = express();
 
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.get('/', function(req, res, next) {
  res.json({
    message: 'Hello World!'
  })
});

app.use('/api/user', userRouter);


const port = 3000;
app.set('port', port);


app.listen(port, () => {
  console.log("Server node js is running on http://localhost:" + port);
});