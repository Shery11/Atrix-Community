var mongoose = require('mongoose');


// customer Schema
var StartupSchema = mongoose.Schema({
    name:{
       type: String,
       required : true
    },
    createdAt:{
    	type: Date,
    	default: Date.now //gets current date
    }

});

var Startup = module.exports = mongoose.model('Startup', StartupSchema);


// GEt users
module.exports.getStartup = function(callback,limit){
	Startup.find(callback).limit(limit).sort([['first_name','ascending']]);
}


module.exports.getStartupById = function(id,callback){
  Startup.findById(id,callback);
}


module.exports.addStartup = function(user, callback){
    var add = {
       name: user.name,
    }

    console.log(add);

    Startup.create(add,callback); 
}





