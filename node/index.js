const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

const routes = require('./router/adminroutes');
app.use(routes);

const clientroutes = require('./router/clientrouter');
app.use(clientroutes);

const query = require('./models/table');
query.category();
query.quetionTable();
query.answerTable();


app.listen(4000,()=>console.log("port running on 4000"));