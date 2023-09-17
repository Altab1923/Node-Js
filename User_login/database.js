const mysql=require('mysql');


const connection=mysql.createConnection({
    host:'localhost',
    database:'user',
    user:'root',
    password: ''
});

connection.connect(function(err){

    if(err) {
         throw err;
    }else{
        console.log("connection successfully established");
    }

});

module.exports = connection;