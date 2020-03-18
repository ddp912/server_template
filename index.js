const express = require('express');
const bodyParser = require('body-parser');

//routers
const mainRouter = require('./router/main');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//Main Router
app.use(mainRouter);

//404 - Page Not Found
app.use((req, res, next) => {
    res.sendStatus(404);
});


app.listen(3000);