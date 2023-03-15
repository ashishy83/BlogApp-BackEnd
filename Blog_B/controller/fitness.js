const express = require('express');

const fitnessApi = require('../utility/Fitness');

const fitness = express.Router();

fitness.route('/fitness').get(fitnessApi.apiController);
 module.exports = fitness;