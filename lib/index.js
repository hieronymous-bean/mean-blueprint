"use strict";
const express = require('express');
const morgan = require('morgan');
const pug = require('pug');
const winston = require ('winston');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

module.exports(app);