const userModel = require('../models/user')
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
                    res.json({ success: true, message: err });
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
    return router;
}