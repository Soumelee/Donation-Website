require("dotenv").config();

const express = require('express');
const app = express();
const http = require('http').Server(app);

const paymentRoute = require('./routes/paymentRoute');

// Serve static assets from the 'assets' folder
// app.use(express.static('assets'));
// app.use(express.static('assets/images'));
app.use(express.static(__dirname+'/assets'));

app.use('/', paymentRoute);

http.listen(3000, function () {
    console.log('Server is running at port 3000');
});