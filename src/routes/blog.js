const userModel = require('../models/user')
const blogModel = require('../models/blog')
const jwt = require('jsonwebtoken')
var secret = require('crypto').randomBytes(64).toString('hex')
module.exports = function(router) {


    router.post('/blog', function(req, res) {
        if (!req.body.title || !req.body.body) {
            res.json({ success: false, message: 'Please provide post title and body' });
        } else {
            res.json({ success: true, message: 'Post created' });
        }
    });


    return router;
}