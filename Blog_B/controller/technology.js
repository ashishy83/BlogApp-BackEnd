const express = require('express');

const techApi= require('../utility/technology');

const tech = express.Router();

tech.route('/technology').get(techApi.apiController);

module.exports = tech