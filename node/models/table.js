const connection = require('../dataBase/db');

module.exports = {
    
    category : ()=>{
        let table = `CREATE TABLE IF NOT EXISTS Category(
            cat_id int(10) PRIMARY KEY AUTO_INCREMENT,
            category varchar(200) NOT NULL,
            parent_id int(10) NOT NULL DEFAULT 0
        )`
        connection.query(table,function(error,result,field){
            if(error){
                console.log(error);
            }
            else{
                console.log("table created..");
            }
        })
    },
    
    quetionTable : ()=>{
       let tableOne = `CREATE TABLE IF NOT EXISTS Questions(
           que_id int(10)  PRIMARY KEY AUTO_INCREMENT,
           questions varchar(200) NOT NULL,
           cat_id int(10),
           FOREIGN KEY(cat_id) REFERENCES Category(cat_id)
       )`
       connection.query(tableOne,function(error,result,field){
            if(error){
                console.log(error);
            }
            else{
                console.log("table two created..");
            }
        })
    },

    answerTable : ()=>{
        let tableTwo =  `CREATE TABLE IF NOT EXISTS Answer(
            ans_id int(10) PRIMARY KEY AUTO_INCREMENT,
            answer varchar(200) NOT NULL,
            type varchar(20),
            que_id int(10),
            next_que int(10),
            FOREIGN KEY(que_id) REFERENCES Questions(que_id),
            FOREIGN KEY(next_que) REFERENCES Questions(que_id)
        )`
        connection.query(tableTwo,function(error,result,field){
            if(error){
                console.log(error);
            }
            else{
                console.log("table one created..");
            }
        })
    }
}