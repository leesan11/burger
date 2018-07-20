var express = require("express");

var burger = require("../models/burger");

var router = express.Router();


router.get("/api/burgers",function(req,res){
    burger.selectAll(function(result){
        res.render("api",{arr:result})
    });
    
});

router.post("/api/burgers",function(req,res){
    
    burger.insertOne(req.body.burger_name,false);
})


router.put("/api/burgers/burgerName",function(req,res){
    
    burger.updateOne(req.body.burger_name,true);
    res.render("index",{arre:{burger_name:(req.body.burger_name),devoured:true}})
})

module.exports = router;