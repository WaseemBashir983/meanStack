const mongoose = require('mongoose');
//var url = "mongodb://localhost:27017/blog";
var url = 'mongodb+srv://waseem:Kualitatem1@angular2-57ddw.mongodb.net/test?retryWrites=true&w=majority';
const connection = mongoose.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
});

module.exports = connection;