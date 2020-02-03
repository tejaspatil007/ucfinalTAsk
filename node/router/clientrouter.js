const express = require('express');
const cliroutes = express.Router();
const getData = require('../controller/clientcontrol')

cliroutes.get('/getcatClient',getData.getCat);

cliroutes.get('/getsubcatQue/:id',getData.getSubQue);

cliroutes.get('/getqueClient/:id',getData.getQuestion);

cliroutes.get('/getansClient/:id',getData.getAns);

module.exports = cliroutes;