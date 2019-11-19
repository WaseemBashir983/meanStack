const mongoose = require('mongoose');
var url = "mongodb://localhost:27017/blog";
const connection = mongoose.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
});

module.exports = connection;