var express = require('express');
var router = express.Router();


var User = require('../models/user')

// get All Users
router.get('/getAllUsers',function(req,res){
 	User.getUsers(function(err, users){
 		if(err)
 			res.send(err);
 		res.json(users);
 	});
 });


// get Single User
router.get('/getUser/:id',function(req,res){
 	User.getUserById(req.params.id,function(err, user){
 		if(err)
 			res.send(err);

 		res.json(user);
 	});
 });


//add User
router.post('/addUser' , function(req,res){
        var user = req.body;
       
        User.addUser(user, function(err,user){
        	if(err)
        		res.send(err);

        	res.json(user);
        });
 });




module.exports = router;