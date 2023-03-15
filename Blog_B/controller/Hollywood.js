const express = require('express');

const hollyapi = require('../utility/Hollywood');

const holly = express.Router();
holly.route('/hollywood').get(hollyapi.apiController);

module.exports = holly;
