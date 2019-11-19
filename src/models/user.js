var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    username: {type: String,unique:true, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
    email:  {type: String, lowercase: true,unique:true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
    bio: String,
    image: String,
    password: {type:String,required: [true, "can't be blank"]}
}, { timestamps: true });


UserSchema.pre('save',function(next){
var user = this;

bcrypt.hash(user.password, 10, function(err, hash) {
    if(err) return next(err)
  user.password = hash;
  next()
});

})

module.exports = mongoose.model('User', UserSchema);