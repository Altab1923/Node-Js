const { query } = require('express');
var express = require('express');
const { request } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res,next){

var user_email_address=request.body.user_email_address;
var user_password=request.body.user_password;

if(user_email && user_password){

query=`select * from user_login where user_email="${user_email_address}"`;

database.query(query, function(err,data){
  
    if(data.length>0){

      for(var count=0; count<data.length;count++){

         if(data[count].user_password=user_password){
          
          req.session.user_id=data[count].user_id;
          res.redirect('/');


         }else{

           res.send("Incorrect Password");
         }

      }
  

    }else{
      res.send("Incorrect emailid or Password")
    }
    res.end();

})


}else{
  res.send("Please Enter a Email address and Password");
  res.end();
}

})

router.get('/logout',function(req,res,next){
  req.session.destroy();
  res.redirect("/");
})

module.exports = router;
