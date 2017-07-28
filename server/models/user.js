var mongoose = require('mongoose');


// customer Schema
var userSchema = mongoose.Schema({
    first_name:{
       type: String,
       required : true
    },
    last_name:{
       type: String,
    },
     email:{
       type: String,
       required : true
    },
    skills:{
       type: String,
       default : "Enter your skills"
       
    },
    CNIC:{
       type: String,
        default : "Enter your CNIC"
       
    },
    uid:{
      type:String,
      required:true
    },
    phone:{
       type: String,
       default : '0300 5552325'
       
    },
    approved:{
       type: Boolean,
       default : false
    },
    experience:{
       type: Number,
       default : 0
       
    },
    freelancer:{
       type: Boolean,
       default : false

    },
    location :{
      type:String

    },
    favorite_language:{
       type: String,
       default : "Enter your language"
       
    },
    area:{
       
       city:String,
       state: String
    },
    createdAt:{
    	type: Date,
    	default: Date.now //gets current date
    },
    events: [{ type : mongoose.Schema.Types.ObjectId, ref: 'event' }],
    startups: [{ type : mongoose.Schema.Types.ObjectId, ref: 'Startup'}]

});

var User = module.exports = mongoose.model('User', userSchema);


// GEt users
module.exports.getUsers = function(callback,limit){
	User.find(callback).limit(limit).sort([['first_name','ascending']]);
}


module.exports.getUserById = function(id,callback){
  User.findById(id,callback);
}


module.exports.addUser = function(user, callback){
    var add = {
       first_name: user.name,
       last_name: user.last_name,
       skills: user.skills,
       CNIC: user.CNIC,
       uid : user.uid,
       email :user.email,
       phone: user.phone,
       experience: user.experience,
       freelancer: user.freelancer,
       favorite_language: user.favorite_language,
       
    }

    console.log(add);

    User.create(add,callback); 
}





