const express = require('express');

const foodApi = require('../utility/Food');

const food = express.Router();

food.route('/food').get(foodApi.apiController);

module.exports = food;