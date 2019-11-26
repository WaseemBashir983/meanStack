const userModel = require('../models/user')
const jwt = require('jsonwebtoken');

module.exports = function(router) {
    router.post('/register', function(req, res) {
        if (!req.body.email || !req.body.username) {
            res.json({ success: false, message: 'Please provide all data' });
        } else {
            var user = new userModel();
            user.username = req.body.username;
            user.email = req.body.email;
            user.bio = req.body.bio;
            user.password = req.body.password;
            user.save(function(err) {
                if (err) {
                    res.json({ success: false, message: err });
                } else {
                    res.json({ success: true, message: 'User Created' });
                }
            });
        }
    });
    router.get('/checkEmail/:email', function(req, res) {
        if (!req.params.email) {
            res.json({ success: false, message: 'Please provide Email' });
        } else {
            userModel.findOne({ email: req.params.email }, (err, user) => {
                if (err) {
                    res.json({ success: false, message: err });
                } else if (user) {
                    res.json({ success: false, message: 'Email is already exist' });
                } else {
                    res.json({ success: true, message: 'Email is avaialble' });
                }
            })
        }
    });


    router.post('/login', function(req, res) {
        if (!req.body.email) {
            res.json({ success: false, message: 'Please provide useranme/email' });
        } else if (!req.body.password) {
            res.json({ success: false, message: 'Please provide  password' });
        } else {
            userModel.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
                if (err) {
                    res.json({ success: false, message: err });
                } else if (user) {
                    const validPassword = user.comparePassword(req.body.password);
                    if (!validPassword) {
                        res.json({ success: false, message: 'Password not matched' });
                    } else {
                        var secret = require('crypto').randomBytes(64).toString('hex');
                        var token = jwt.sign({ userId: user._id }, secret, { expiresIn: '24h' });

                        res.json({ success: true, message: 'User found', token: token, user: { username: user.username, email: user.email } });
                    }
                } else {
                    res.json({ success: false, message: 'User not found' });
                }
            })
        }
    });

    app.use((req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) {
            res.json({ success: false, message: 'Please provide token' });
        } else {
            var secret = require('crypto').randomBytes(64).toString('hex');

            jwt.verify(token, secret, (err, decoded) => {


            });
        }
    });
    router.get('/profile/', function(req, res) {
        if (!req.params.token) {
            res.json({ success: false, message: 'Please provide Email' });
        } else {
            userModel.findOne({ email: req.params.email }, (err, user) => {
                if (err) {
                    res.json({ success: false, message: err });
                } else if (user) {
                    res.json({ success: false, message: 'Email is already exist' });
                } else {
                    res.json({ success: true, message: 'Email is avaialble' });
                }
            })
        }
    });


    return router;
}