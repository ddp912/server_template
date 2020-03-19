const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

//dotenv
require('dotenv').config();

//router
const mainRouter = require('./router/main');

//Initialize express app
const app = express();

//EJS View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Serve static file
app.use(express.static(path.join(__dirname, 'public')));

//Request body Parser
app.use(bodyParser.urlencoded({extended: true}));

//Main Router
app.use(mainRouter);

//404 - Page Not Found
app.use((req, res, next) => {
    res.sendStatus(404);
});

//MongoDB Connection
const dbUser = process.env.DBUSER;
const dbPass = process.env.DBPASSWORD;

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0-zxtkz.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('DB Connection Successful! Listening in Port 3000');
        app.listen(3000);
    }
});