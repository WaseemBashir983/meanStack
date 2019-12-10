const userModel = require('../models/user')
const blogModel = require('../models/blog')
const jwt = require('jsonwebtoken')
var secret = require('crypto').randomBytes(64).toString('hex')
module.exports = function(router) {


    router.post('/createBlog', function(req, res) {
        if (!req.body.title) {
            res.json({ success: false, message: 'Please provide post title' });
        } else if (!req.body.body) {
            res.json({ success: false, message: 'Please provide post  body' });
        } else if (!req.body.createdBy) {
            res.json({ success: false, message: 'Post creater is required' });
        } else {

            var blog = new blogModel();
            blog.title = req.body.title;
            blog.body = req.body.body;
            blog.createdBy = req.body.createdBy;
            blog.save(function(err) {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    res.json({ success: true, message: 'Blog Created' });
                }
            });
        }
    });


    router.get('/getBlogs', (req, res) => {

        // Search for user in database
        blogModel.find({}, (err, blogs) => {
            // Check if error connecting
            if (err) {
                res.json({ success: false, message: err }); // Return error
            } else {
                // Check if user was found in database
                if (!blogs) {
                    res.json({ success: false, message: 'No blogs found' }); // Return error, user was not found in db
                } else {
                    res.json({ success: true, blogs: blogs }); // Return success, send user object to frontend for profile
                }
            }
        }).sort({ '_id': -1 });
    });


    router.get('/get/:id', (req, res) => {

        if (!req.params.id) {
            res.json({ success: false, message: 'NO Blog ID was provided' });
        } else {

            blogModel.findOne({ _id: req.params.id }, (err, blog) => {
                // Check if error connecting
                if (err) {
                    res.json({ success: false, message: err }); // Return error
                } else {
                    // Check if user was found in database
                    if (!blog) {
                        res.json({ success: false, message: 'Blog not found' }); // Return error, user was not found in db
                    } else {
                        res.json({ success: true, blog: blog }); // Return success, send user object to frontend for profile
                    }
                }
            });

        }

    });


    return router;
}