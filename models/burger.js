var orm = require("../config/orm");

var burger = require("../controllers/burgers_controllers");


module.exports={
selectAll:function(cb){
    orm.selectAll(function(res){
        cb(res);
    })
},
insertOne:orm.insertOne,
updateOne:orm.updateOne
}



