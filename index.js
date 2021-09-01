'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
require('dotenv').config();
require('./configuraciones/databaseMongodb');

//Configuracion.
app.set('port', process.env.PORT);
app.set('views', path.join(__dirname, 'views'));

//Middlewares.
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes.