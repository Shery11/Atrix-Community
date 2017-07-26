var mongoose = require('mongoose');


// customer Schema
var eventSchema = mongoose.Schema({
    name:{
       type: String,
       required : true
    },
    createdAt:{
    	type: Date,
    	default: Date.now //gets current date
    }

});

var Startup = module.exports = mongoose.model('event', eventSchema);


// GEt users
module.exports.getEvent = function(callback,limit){
	Startup.find(callback).limit(limit).sort([['first_name','ascending']]);
}


module.exports.getEventById = function(id,callback){
  Startup.findById(id,callback);
}


module.exports.addEvent = function(user, callback){
    var add = {
       name: user.name,
    }

    console.log(add);

    Startup.create(add,callback); 
}





