var express = require('express');
var router = express.Router();


var Startup = require('../models/startup')


router.get('/getAllStartup',function(req,res){
        Startup.getStartup(function(err, users){
                if(err)
                        res.send(err);
                res.json(users);
        });
 });


router.get('/getStartup/:id',function(req,res){
        Startup.getStartupById(req.params.id,function(err, user){
                if(err)
                        res.send(err);

                res.json(user);
        });
 });


router.post('/addStartup' , function(req,res){
        var user = req.body;
       
        Startup.addStartup(user, function(err,user){
                if(err)
                        res.send(err);

                res.json(user);
        });
 });

module.exports = router;