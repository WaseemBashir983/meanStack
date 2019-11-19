const userModel = require('../models/user')
module.exports = function(router){
router.post('/register', function(req, res) {
  
  if(!req.body.email){
     res.json({success:false,message:'Please provide email'});
  }else{

    var user = new userModel();
    user.username = req.body.username;
    user.email = req.body.email;
    user.bio = req.body.bio;
    user.password = req.body.password;
    user.save(function(err){
     if(err){
        res.send(err);
     }else{
        res.send('User Created');
     }
    });
  }

})
return router;
}
