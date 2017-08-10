var http = require('http')
var mysql = require('mysql')
var cheerio = require('cheerio');
var connection;

function create() {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'yang',
		password: '12345',
		database: 'goods'
	})
}
//index
http.get('http://www.lefeng.com/', function(res) {
	var data = '';
	res.on('data', function(chunk) {
		data += chunk;
	});
	res.on('end', function() {
		var $ = cheerio.load(data);
		create();
		connection.connect();
		$('.content-2 .brand-item a').each(function(idx, ele) {
			var img = $(ele).children('img').attr('original');
			var title = $(ele).attr('title');
			var discount = $(ele).next('.brand-info').find('b').text();
			var info = $(ele).children('.pms-wrap').children('p').text();

			connection.query(`insert into goods_index (brand_name,goods_discount,goods_info,goods_img) values ('${title}', '${discount}', '${info}', '${img}')`,function(err,results,field){
				if(err) throw err;
//				connection.end();
			})
		})
	})
})