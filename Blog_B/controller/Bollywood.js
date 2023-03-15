const express = require('express');

const bollyapi = require('../utility/Bollywood');

const bolly = express.Router();

bolly.route('/bollywood').get(bollyapi.apiController);

module.exports = bolly;
