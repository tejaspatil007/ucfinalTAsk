const express = require('express');
const routes = express.Router();
const addData = require('../controller/control')

routes.post('/addCategory',addData.categoryAdd);

routes.get('/getCategories',addData.categoryGet);

routes.post('/addsubcategory',addData.subcategory);

routes.get('/getsubcategory',addData.subcategoryget);

routes.post('/addQuestion',addData.questionAdd);

routes.get('/getQuetions',addData.questionGet);

routes.post('/addanswers',addData.answerAdd);

routes.get('/getAnswers',addData.answerGet);

//  routes.post('/addAnswerForQuestion',addData.addQueAns);

module.exports = routes;
