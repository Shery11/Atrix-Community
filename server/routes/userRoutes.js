var express = require('express');
var router = express.Router();


var User = require('../models/user')

// get All Users
router.get('/getAllUsers',function(req,res){
 	User.getUsers(function(err, users){
 		if(err){
			res.json({success:false,data:err});
		}else{
	       res.json({success:true,data:users});
		}
 		
 	});
 });


// get Single User
router.get('/getUserData/:id',function(req,res){
   User.getUserByuid(req.params.id,function(err, user){
 		if(user){
    		res.json({success:true,data:user});
    	}else{
           res.json({success:false,data:"No user found"});
    	}
    });
 });


//add User
router.post('/addUser' , function(req,res){
        var user = req.body;

        console.log(user);

        User.addUser(user, function(err,user){
        	if(err){
        		res.json({success:false,data:err});
        	}else{
               res.json({success:true,data:user});
        	}
        });
 });	




module.exports = router;