var mongoose = require('mongoose');
const bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true },
    bio: String,
    image: String,
    password: { type: String, required: [true, "can't be blank"] }
}, { timestamps: true });


UserSchema.pre('save', function(next) {
    var user = this;

    bcrypt.hash(user.password, 10, function(err, hash) {
        if (err) return next(err)
        user.password = hash;
        next()
    });

});


// Methods to compare password to encrypted password upon login
UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password); // Return comparison of login password to password in database (true or false)
};

module.exports = mongoose.model('User', UserSchema);