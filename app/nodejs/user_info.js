//引入fs模块
var fs = require("fs");
//引入multer模块
var multer = require("multer");
// fs.unlink("uploads/111.txt", (err)=>{
// 	if(err) throw err;
// 	console.log("删除成功");
// });

//引入express模块
var express = require("express");
var app = express();
app.listen("6789");

//使用bodyParser模块
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//引入mysql模块
var mysql = require("mysql");

//连接数据库
var connection = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"vue-project"
});

//查询重复路由
app.get("/check",function(req,res){
	var data = req.query;
	res.append("Access-Control-Allow-Origin","*");
	connection.query("SELECT id FROM user_info WHERE username='" + data.username + "'",function(err,results,fields){
		if(results.length == 0){
			res.end("");
		}else{
			res.end("repeated");
		}
	})
})

//注册路由
app.get("/reg",function(req,res){
	var data = req.query;
	res.append("Access-Control-Allow-Origin","*");
	connection.query("INSERT INTO user_info (username,password) VALUES ('" + data.username + "'," + data.password + ")");
	res.end("注册成功");
})

//登录路由
app.get("/log",function(req,res){
	var data = req.query;
	res.append("Access-Control-Allow-Origin","*");
	connection.query("SELECT * FROM user_info WHERE username='" + data.username + "'",function(err,results,fields){
		if(results.length == 0){
			res.end("用户名不存在");
		}else if(results[0].password != data.password){
			res.end("密码错误");
		}else{
			res.end("success");
		}
	})
})

//获取个人信息
app.get("/userinfo",function(req,res){
	var data = req.query;
	res.append("Access-Control-Allow-Origin","*");
	connection.query("SELECT * FROM user_info WHERE username='" + data.username + "'",function(err,results,fields){
		res.end(JSON.stringify(results[0]));
	})
})

//上传头像
var storage = multer.diskStorage({
	//设置上传后文件路径，uploads文件夹会自动创建。
	destination: function(req, file, cb) {
		cb(null, './uploads')
	},
	//给上传文件重命名，获取添加后缀名
	filename: function(req, file, cb) {
		var fileFormat = (file.originalname).split(".");
		//给图片加上时间戳格式防止重名名
		//比如把 abc.jpg图片切割为数组[abc,jpg],然后用数组长度-1来获取后缀名
		cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
	}
});
var upload = multer({
	storage: storage
});
//设置路由
app.post("/headpic",upload.any(),function(req,res){
	res.append("Access-Control-Allow-Origin","*");
	res.end(req.files[0].path);
})