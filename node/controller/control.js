const connection = require('../dataBase/db');

addCategory = (req,res)=>{
    console.log(req.body);
    let cat = [
        req.body.category,
        req.body.parent_id
    ];
    let addcat = `INSERT INTO Category(category,parent_id) VALUES(?,?)`;
    connection.query(addcat,cat,function(error,rows,field){
        if(error){
            // console.log(rows);
            console.log("error=>>",error)
            res.send({succes:false})
        }else{
            res.send({succes:true})
            console.log("answer added ...")
        }
    })
}

getCategories = (req,res)=>{
    let getcat = `SELECT * FROM Category`;
    connection.query(getcat,function(error,rows){
        if(error){
            res.send({succes:false});
        }else{
            console.log("categories=>",rows)
            res.send({data:rows})
        }
    })
}

addSubcategory = (req, res) =>{
    console.log(req.body);
    let subcat = [
        req.body.subCategory,
        req.body.parent_id
        ];  
    let addSubcat = `INSERT INTO Category(category,parent_id) VALUES(?,?)`;
    connection.query(addSubcat,subcat,function(error,rows,field){
        if(error){
            console.log(rows);
            console.log("error=>>",error)
            res.send({succes:false})
        }else{
            res.send({succes:true})
            console.log("subcategory added ...")
        }
    })
}

getSubcategory = (req,res) =>{
    // let cat_id = req.params.cat_id;
    let getSubcat = `SELECT * FROM Category WHERE parent_id NOT IN ( 0 )`;
    connection.query(getSubcat, function(error, rows){
        if(error){
            console.log(error);
            res.send({succes:false});
        }
        else{
            console.log("subcategories=>",rows)
            res.send({data:rows})
        }
    } )
}

addQuetion = (req,res)=>{
    console.log(req.body);
    let quetion = [
        req.body.question,
        req.body.cat_id
    ];
    console.log("=>>",quetion);
    let addQuestion = `INSERT INTO Questions(questions,cat_id) VALUES(?,?)`;
    connection.query(addQuestion,quetion,function(error,rows,field){
        if(error){
            console.log("error=>>",error)
            res.send({succes:false})
        }else{
            res.send({ "success": true, "getid": rows.insertId });
            console.log("getId", rows.insertId)
        }
    })
}

getQuestion = (req,res)=>{
    let  getQues = `SELECT * FROM Questions`;
    connection.query(getQues,function(error,rows){
        if(error){
            console.log("error=>>",error)
            res.send({succes:false})
        }else{
            console.log("Questions=>",rows);
            res.send({Data:rows})
        }
    })    
}

addAnswer = (req, res) =>{
    console.log("==>", req.body);
    let addAnswer = req.body.answer

    //  let answerData = [];
    console.log(addAnswer.length);
    for(i=0; i< addAnswer.length; i++){
        let ans = [addAnswer[i],req.body.type,req.body.que_id,req.body.next_que[i]];
        console.log("==>",ans);
        // answerData.push(ans);
    // console.log('answers=>',answerData);

    let addAns = `INSERT INTO Answer(answer, type , que_id, next_que) VALUES(?,?,?,?)`;
    connection.query(addAns, ans, function(error, rows, field){
        if(error){
            console.log("error=>>",error)
            // res.send({succes:false})
        }else{
            // res.send({succes:true})
            console.log("answer added ...")
        }
    })
    }
    res.send({succes:true});
}

getAnswer = (req, res) =>{
    let getAnswer =`SELECT Questions.que_id, Questions.questions, Answer.ans_id, Answer.answer FROM Questions INNER JOIN Answer WHERE Questions.cat_id IS NULL`
    connection.query(getAnswer, function(error, rows){
        if(error){
            console.log("error=>>",error)
            res.send({succes:false})
        }else{
            console.log("questions=>",rows);
            res.send({data:rows})
        }
    })
}

// addQueofAns = (req, res)=>{
//     console.log("answerforquetions",req.body);
//     let dataofAns = [
//         req.body.next_que,
//         req.body.ans_id
//     ]
//     let addkey = `UPDATE Answer SET next_que = ? where ans_id = ?`;
//     connection.query(addkey , dataofAns, function(error, rows, field){
//         if(error){
//             console.log("dataofanswer",error);
//             res.send({success:false});
//         }else{
//             res.send({success:true});
//         }
//     } )
// }

module.exports = {
    categoryAdd : addCategory,
    categoryGet : getCategories,
    subcategory : addSubcategory,
    subcategoryget : getSubcategory,
    questionAdd : addQuetion,
    questionGet : getQuestion,
    answerAdd :  addAnswer,
    answerGet :  getAnswer,
    // addQueAns : addQueofAns
}