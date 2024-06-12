const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config()
const db = require('./config/mongoose-connection')

const expressSession = require('express-session');
const flash = require('connect-flash');

const index = require('./routes/index');
const ownerRouter = require('./routes/ownerRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.EXPRESS_SESSION_SECRET,
}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/', index)
app.use('/owner', ownerRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(3000);