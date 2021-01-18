const express = require('express');
const app = express();
const path = require('path');

//Settings
app.set('port', 4000);
app.set('views', path.join(__dirname, '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Middleware

//Routes
app.use(require('./routes/route'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Listening to server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});