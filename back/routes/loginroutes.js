const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var config = require('./../config');
var connection = mysql.createConnection(config.mysql);

connection.connect(function(err){
  if(!err) {
    console.log("Database is connected ...");
  } else {
    console.log("Error connecting database ...",err);
  }
});

exports.register = function(req,res){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.password, salt, function(err, hash) {
      var today = new Date();
      var user={
        "first_name":req.body.first_name,
        "last_name":req.body.last_name,
        "email":req.body.email,
        "id":req.body.userid,
        "password":hash,
        "created":today,
        "modified":today
      }
      connection.query('INSERT INTO users SET ?',user, function (error, results, fields) {
        if (error) {
          console.log("error ocurred",error);
          res.send({
            "code":400,
            "failed":"error ocurred"
          })
        } else {
          res.send({
            "code":200,
            "success":"user registered sucessfully"
          });
        }
      });
    });
  });
}

exports.login = function(req,res){
  var email= req.body.email;
  var password = req.body.password;
  var role = req.body.role;
  console.log(req.body);
  connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
  if (error) {
    console.log("error ocurred",error);
    res.send({
      "code":400,
      "failed":"error ocurred"
    })
  } else {
    if(results.length >0){
      bcrypt.compare(req.body.password, results[0].password, function(err, match) {
	if(match) {
          var token = jwt.sign({ id: email }, config.jwt.secret, {
            expiresIn: 86400
          });
          res.status(200).send({
	    message: "login successful",
	    auth: true,
            token: token
	  });
        } else {
          res.send({
            "code":204,
            "success":"Wrong password"
          });
        }
      });
    } else {
      res.send({
        "code":204,
        "success":"Email does not exits"
      });
    }
  }
  });
}
