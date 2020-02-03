const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'DataBase'
})

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log('mysql connected successfuly');
    }
})

module.exports = connection;