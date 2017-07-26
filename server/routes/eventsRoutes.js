var express = require('express');
var router = express.Router();


var Startup = require('../models/events')


router.get('/getAllEvent',function(req,res){
        Startup.getEvent(function(err, users){
                if(err)
                        res.send(err);
                res.json(users);
        });
 });


router.get('/getEvent/:id',function(req,res){
        Startup.getEventById(req.params.id,function(err, user){
                if(err)
                        res.send(err);

                res.json(user);
        });
 });


router.post('/addEvent' , function(req,res){
        var user = req.body;
       
        Startup.addEvent(user, function(err,user){
                if(err)
                        res.send(err);

                res.json(user);
        });
 });

module.exports = router;