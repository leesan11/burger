var con = require("./connection");


//select all Works!
function selectAll(cb){
con.query(`SELECT * FROM burgers`,(err,result)=>{
    cb(result);
})

}

//insert One works!

function insertOne(burgerName,devoured){
    con.query(`INSERT INTO burgers (burger_name,devoured) VALUES (?,?)`,[burgerName,devoured],function(err,result){
        if(err)throw err;
        
    })
}

//update one works!

function updateOne(burgerName,devoured){
    con.query(`UPDATE burgers SET devoured = ${devoured} WHERE burger_name = "${burgerName}"`)
}

module.exports={
    selectAll:selectAll,
    insertOne:insertOne,
    updateOne:updateOne
}