const connection = require('../dataBase/db');

getcategory = (req,res)=>{
    // console.log(req.body.params);
    let  key = 0;
    let getallcategory = `SELECT Category.cat_id, Category.category  FROM Category WHERE parent_id = (?)`;
    connection.query(getallcategory,[key],function(error,rows){
        if(error){
            console.log(error);
            res.send({succes:"false"});
        }else{
            console.log("clientcategories=>",rows)
            res.send({data:rows})
        }        
    })
}

getSubOrQues = (req,res)=>{
    console.log(req.params);

    let foreignKey = [req.params.id];

    
    console.log(foreignKey);
    let getallcategory = `SELECT Category.cat_id, Category.category FROM Category WHERE Category.parent_id = ?`;
    connection.query(getallcategory,foreignKey,function(error,rows){
        if(error){
            // res.send({succes:false});
            // let ques = `SELECT Questions.que_id, Questions.questions, Answer.ans_id,Answer.answer,Answer.type FROM Questions INNER JOIN Answer ON Questions.que_id = Answer.que_id AND Questions.cat_id = ?`;
            // connection.query(ques,foreignKey,function(error,rows){
            //     if(error){
            //         res.send({succes:false});
            //     }else{
            //         console.log("clientcategories=>",rows)
            //         res.send({data:rows})
            //     }        
            // })
        
        }else{
            console.log("rows length====>",rows.length);
            // res.send({data:rows})
            if(rows.length === 0){
                console.log("foreignKey", foreignKey)
                let ques = `SELECT Questions.que_id, Questions.questions,Answer.ans_id,Answer.answer,Answer.type,Answer.next_que FROM Questions INNER JOIN Answer ON Questions.que_id = Answer.que_id AND Questions.cat_id = ?`;
                connection.query(ques,foreignKey,function(error,rows){
                    if(error){
                        res.send({succes:false});
                    }else{
                        console.log("clientcategories=>",rows)
                        res.send({data:rows})
                    }        
                })
    
            }else{
                res.send({data:rows})
            }
        }        
    })
}

getQue = (req,res)=>{
    console.log(req.params.id);
    let key = [req.params.id];
    let ques = `SELECT Questions.que_id, Questions.questions, Answer.ans_id, Answer.answer, Answer.type FROM Answer INNER JOIN Questions ON Questions.que_id = Answer.que_id AND Questions.cat_id = ?`;
    connection.query(ques,key,function(error,rows){
        if(error){
            res.send({succes:false});
            console.log(error);
        }else{
            console.log("get quetions=>",rows)
            res.send({data:rows})
        }        
    })
}

getanswer = (req,res)=>{
    console.log(req.params);
    let key = [req.params.id]
    let getclientans = `SELECT Questions.que_id, Questions.questions, Answer.ans_id,Answer.answer,Answer.type, Answer.next_que FROM Questions  INNER JOIN Answer  ON Answer.que_id=Questions.que_id AND Questions.que_id = ?`;
    connection.query(getclientans,key,function(error,rows){
        if(error){
            res.send({succes:false});
        }else{
            console.log("clientcategories=>",rows)
            res.send({data:rows})
        }        
    })
}

module.exports ={
    getCat : getcategory,
    getSubQue : getSubOrQues,
    getQuestion : getQue,
    getAns : getanswer
}