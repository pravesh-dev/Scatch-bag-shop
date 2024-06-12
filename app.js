const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
require('dotenv').config()
const db = require('./config/mongoose-connection')

const index = require('./routes/index');
const ownerRouter = require('./routes/ownerRouter');
const productsRouter = require('./routes/productsRouter');
const usersRouter = require('./routes/usersRouter');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/', index)
app.use('/owner', ownerRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)

app.listen(3000);