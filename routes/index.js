var express = require('express');
var router = express.Router();
var md5 = require("md5");
var UserModel = require("../model/UserModel")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '登录画面' });
});


//router.get("/login",function(req,res){
//	res.render("login",{});
//})
//后台页面
router.get("/houtai",function(req,res){
	res.render("houtai",{});
})



//登录
router.post("/api/login",function(req,res){
	var username = req.body.username;
	var psw = md5(req.body.psw);//md5 对密码进行加密；
	var result = {
		status:1,
		message:"登录成功"
	}
	UserModel.find({username:username,psw:psw},function(err,docs){
	if(!err&&docs.length>0){
			console.log("登录成功");
			res.send(result);
	}else{
		console.log("登录失败，请检查您的用户名和密码");
		result.status = -109;
		result.message = "登录失败，请检查您的用户名和密码";
		res.send(result);
	}
})
	})
module.exports = router;
