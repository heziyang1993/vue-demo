var express = require('express');
var app = express();
var mysql = require('mysql');
var connection;

function create() {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'goods'
	})
}
app.listen(1111)
//seckill
app.get('/seckill', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	create();
	connection.connect();
	//前端传过来的clock
	var clock = req.query.clock;

	connection.query("select * from goods_list limit " + 6 * (clock - 1) + ",15", function(err, results, field) {
		if(err) throw err;
		res.send(results);
//		connection.end();
	})

})

//banner
app.get('/banner', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	create();
	connection.connect();
	connection.query('select * from goods_index limit 0,5', function(err, results, field) {
		if(err) throw err;
		res.send(results)
		connection.end();
	})
})

//carousel
app.get('/carousel', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	create();
	connection.connect();
	connection.query('select * from goods_index limit 5,5', function(err, results, field) {
		if(err) throw err;
		res.send(results)
		connection.end();
	})
})

//promotion
app.get('/promotion', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	create();
	connection.connect();
	var page = req.query.page;
	if(page === NaN){
		page = 1;
	}
	var qty = 6;

	connection.query("select * from goods_list limit " + 6 * (page - 1) + ",6", function(err, results, field) {
		if(err) throw err;
		res.send(results);

//		connection.end();
	})
})

//detail
app.get('/detail', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	create();
	connection.connect();
	//获取前端传过来的id
	var id = req.query.id;
	connection.query(`select * from goods_list where id = ${id}`, function(err, results, field) {
		if(err) throw err;
		res.send(results)
//		connection.end();
	})
})
//list模糊搜索
//app.get('/list',function(req,res){
//	res.append('Access-Control-Allow-Origin','*');
//	create();
//	connection.connect();
//	//获取前端传过来的keyword
//	var keyword = req.query.keyword;
//	var page = req.query.page;
//	connection.query("select * from goods_list where goods_name like '%"+ keyword +"%' limit "+ 10*(page-1) +",10",function(err,results,field){
//		if(err) throw err;
//		res.send(results)
//		connection.end();
//	})
//})

//list模糊搜索
app.get('/list',function(req,res){
	res.append('Access-Control-Allow-Origin','*');
	create();
	connection.connect();
	//获取前端传过来的keyword
	var keyword = req.query.keyword;
	connection.query("select * from goods_list where goods_name like '%"+ keyword +"%'or goods_classify like '%"+ keyword +"%'or goods_brand like '%"+ keyword +"%' limit 10",function(err,results,field){
		if(err) throw err;
		res.send(results)
	})
})


app.get('/search', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	create();
	connection.connect();
	//获取前端传过来的id
	var brand = req.query.brand;
	if(brand != '') {

		connection.query(`select * from goods_list where goods_brand = "${brand}"`, function(err, results, field) {
			if(err) throw err;
			res.send(results)
			connection.end();
		})
	}

})

//test
app.get('/test', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	create();
	connection.connect();
	connection.query("select * from goods_list limit 0,1", function(err, results, field) {
		if(err) throw err;
		res.send(results);
		connection.end();
	})
})
//channel
app.get('/channel', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	create();
	connection.connect();
	connection.query("select * from goods_list limit 80,3", function(err, results, field) {
		if(err) throw err;
		res.send(results);
		connection.end();
	})
})
//swipersecond
app.get('/bannersecond', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	create();
	connection.connect();
	connection.query('select * from goods_index limit 5,3', function(err, results, field) {
		if(err) throw err;
		res.send(results)
//		connection.end();
	})
})
//swiperthird
app.get('/bannerthird', function(req, res) {
	res.append('Access-Control-Allow-Origin', '*');
	create();
	connection.connect();
	connection.query('select * from goods_index limit 12,3', function(err, results, field) {
		if(err) throw err;
		res.send(results)
//		connection.end();
	})
})

//classify
app.get('/classify',function(req,res){
	res.append('Access-Control-Allow-Origin','*');
	create();
	connection.connect();
	//获取前端传过来的keyword
	var classify = req.query.classify;
	console.log(classify)
	var page = req.query.page;
	if(classify == undefined){
		console.log(111)
		connection.query("select * from goods_list limit "+ 10*(page-1) +",10",function(err,results,field){
			if(err) throw err;
			res.send(results)
			connection.end();
		})
	}else {
		console.log(222)
		connection.query("select * from goods_list where goods_classify ='" + classify + "'", function(err, results, field) {
			if(err) throw err;
			res.send(results)
			connection.end();
		})
	}
})

//cargo
app.get('/cargo',function(req,res){
	res.append('Access-Control-Allow-Origin','*');
	var goods_res = [];
	var id = JSON.parse(req.query.id);//id为数组
	var idx = 0;
	for(var i = 0;i<id.length;i++){
		create();
		connection.connect();
		
		connection.query("select * from goods_list where id = "+ id[i] ,function(err,results,field){
			if(err) throw err;
			goods_res.push(results[0])
			idx++;
			if(idx === id.length){
				res.send(goods_res);
			}
		})		
	}

})

//sort_price
app.get('/sort_price',function(req,res){
	res.append('Access-Control-Allow-Origin','*');
	create();
	connection.connect();
	//获取前端传过来的keyword
	var classify = req.query.classify;
	var page = req.query.page;
	var status = req.query.status;
	if(status == 0){
		connection.query("select * from goods_list where goods_classify ='" + classify + "'limit "+ 10*(page-1) +",10",function(err,results,field){
			if(err) throw err;
			results = JSON.parse(JSON.stringify(results));
			for(var i = 0;i<results.length;i++){
				for(var j = i+1;j<results.length;j++){
					if(parseInt(results[i].goods_price_now)<parseInt(results[j].goods_price_now)){
						var temp = results[i];
						results[i] = results[j];
						results[j] = temp;
					}
				}
			}
			res.send(JSON.stringify(results))
			connection.end();
		})
	}
	console.log(status)
	if(status == 1){
		connection.query("select * from goods_list where goods_classify ='" + classify + "'limit "+ 10*(page-1) +",10",function(err,results,field){
			if(err) throw err;
			results = JSON.parse(JSON.stringify(results));
			for(var i = 0;i<results.length;i++){
				for(var j = i+1;j<results.length;j++){
					if(parseInt(results[i].goods_price_now)>parseInt(results[j].goods_price_now)){
						var temp = results[i];
						results[i] = results[j];
						results[j] = temp;
					}
				}
			}
			res.send(JSON.stringify(results))
			connection.end();
		})
	}
})