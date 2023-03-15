const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

const CONSTANTS = require('./config/constants');

// const homeRouter = require('./controller/Bollywood');
const bolly = require('./controller/Bollywood');
const holly = require('./controller/Hollywood');
const fitness = require('./controller/fitness');
const food = require('./controller/Food');
const tech = require('./controller/technology');

app.use(cors());

app.use('/',bolly)
app.use('/',holly);
app.use('/',fitness);
app.use('/',food);
app.use('/',tech);


app.listen(CONSTANTS.PORT,()=>{
    console.log(`Server is Listening at http://localhost:${CONSTANTS.PORT}`);
});


module.exports = app;
