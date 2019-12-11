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
            blog.authorId = req.decoded.userId;
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




    router.put('/updateBlog', (req, res) => {

        if (!req.body._id) {
            res.json({ success: false, message: 'NO Blog ID was provided' });
        } else {


            blogModel.findOne({ _id: req.body._id }, (err, blog) => {
                // Check if error connecting
                if (err) {
                    res.json({ success: false, message: err }); // Return error
                } else {
                    // Check if user was found in database
                    if (!blog) {
                        res.json({ success: false, message: 'Blog not found' }); // Return error, user was not found in db
                    } else {

                        userModel.findOne({ _id: req.decoded.userId }).select('username email').exec((err, user) => {
                            // Check if error connecting
                            if (err) {
                                res.json({ success: false, message: err }); // Return error
                            } else {
                                // Check if user was found in database
                                if (!user) {
                                    res.json({ success: false, message: 'You are not authenticated' }); // Return error, user was not found in db
                                } else {

                                    if (user.username !== blog.createdBy) {
                                        res.json({ success: false, message: 'You are not authenticated' }); // Return error, user was not found in db
                                    } else {
                                        blog.title = req.body.title;
                                        blog.body = req.body.body;
                                        blog.save(function(err) {
                                            if (err) {
                                                res.json({ success: false, message: err });
                                            } else {
                                                res.json({ success: true, message: 'Blog Updated' });
                                            }
                                        });

                                    }
                                }
                            }
                        });


                    }
                }
            });
        }

    });


    router.delete('/delete/:id', (req, res) => {

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

                        userModel.findOne({ _id: req.decoded.userId }).select('username email').exec((err, user) => {
                            // Check if error connecting
                            if (err) {
                                res.json({ success: false, message: err }); // Return error
                            } else {
                                // Check if user was found in database
                                if (!user) {
                                    res.json({ success: false, message: 'You are not authenticated' }); // Return error, user was not found in db
                                } else {

                                    if (user.username !== blog.createdBy) {
                                        res.json({ success: false, message: 'You are not authenticated' }); // Return error, user was not found in db
                                    } else {

                                        blog.remove(function(err) {
                                            if (err) {
                                                res.json({ success: false, message: err });
                                            } else {
                                                res.json({ success: true, message: 'Blog Removed' });
                                            }
                                        });

                                    }
                                }
                            }
                        });


                    }
                }
            });

        }

    });

    router.put('/like/', (req, res) => {
        if (!req.body.id) {
            res.json({ success: false, message: 'Please provide Blog ID' });
        } else {
            blogModel.findOne({ _id: req.body.id }, (err, blog) => {
                if (err) {
                    res.json({ success: false, message: 'Blog Id is not Valid' });
                } else {
                    if (!blog) {
                        res.json({ success: false, message: 'Blog Not found' });
                    } else {

                        userModel.findOne({ _id: req.decoded.userId }).select('username email').exec((err, user) => {
                            // Check if error connecting
                            if (err) {
                                res.json({ success: false, message: err }); // Return error
                            } else {
                                // Check if user was found in database
                                if (!user) {
                                    res.json({ success: false, message: 'You are not authenticated' }); // Return error, user was not found in db
                                } else {

                                    if (req.decoded.userId === blog.authorId) {
                                        res.json({ success: false, message: 'Cannot like your own post' }); // Return error, user was not found in db
                                    } else {
                                        if (blog.likedBy.includes(req.decoded.userId)) {
                                            res.json({ success: false, message: 'You have already liked the post' });
                                        } else {

                                            if (blog.dislikedBy.includes(req.decoded.userId)) {
                                                blog.dislikes--;
                                                const dislikedIndex = blog.dislikedBy.indexOf(req.decoded.userId);
                                                blog.dislikedBy.splice(dislikedIndex, 1);
                                                blog.likes++;
                                                blog.likedBy.push(req.decoded.userId);
                                            } else {
                                                blog.likes++;
                                                blog.likedBy.push(req.decoded.userId);
                                            }

                                            blog.save(function(err) {
                                                if (err) {
                                                    res.json({ success: false, message: err });
                                                } else {
                                                    res.json({ success: true, message: 'Blog Liked' });
                                                }
                                            });

                                        }


                                    }
                                }
                            }
                        });

                    }
                }
            });
        }
    });


    router.put('/dislike/', (req, res) => {

        if (!req.body.id) {
            res.json({ success: false, message: 'Please provide Blog ID' });
        } else {
            blogModel.findOne({ _id: req.body.id }, (err, blog) => {
                if (err) {
                    res.json({ success: false, message: 'Blog Id is not Valid' });
                } else {
                    if (!blog) {
                        res.json({ success: false, message: 'Blog Not found' });
                    } else {

                        userModel.findOne({ _id: req.decoded.userId }).select('username email').exec((err, user) => {
                            // Check if error connecting
                            if (err) {
                                res.json({ success: false, message: err }); // Return error
                            } else {
                                // Check if user was found in database
                                if (!user) {
                                    res.json({ success: false, message: 'You are not authenticated' }); // Return error, user was not found in db
                                } else {

                                    if (req.decoded.userId === blog.authorId) {
                                        res.json({ success: false, message: 'Cannot Dislike your own post' }); // Return error, user was not found in db
                                    } else {
                                        if (blog.dislikedBy.includes(req.decoded.userId)) {
                                            res.json({ success: false, message: 'You have already Disliked the post' });
                                        } else {

                                            if (blog.likedBy.includes(req.decoded.userId)) {
                                                blog.likes--;
                                                const likedIndex = blog.likedBy.indexOf(req.decoded.userId);
                                                blog.likedBy.splice(likedIndex, 1);
                                                blog.dislikes++;
                                                blog.dislikedBy.push(req.decoded.userId);
                                            } else {
                                                blog.dislikes++;
                                                blog.dislikedBy.push(req.decoded.userId);
                                            }

                                            blog.save(function(err) {
                                                if (err) {
                                                    res.json({ success: false, message: err });
                                                } else {
                                                    res.json({ success: true, message: 'Blog Disliked' });
                                                }
                                            });

                                        }


                                    }
                                }
                            }
                        });

                    }
                }
            });
        }

    });

    return router;
}