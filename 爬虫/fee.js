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
//list
var arr = ['面膜', '洁面', '防晒隔离', '护肤套装', '眼部护理', '面部护肤', '底妆', '眼妆', '唇妆', '卸妆', '美甲', '彩妆套装', '女士香水', '男士香水', '头部护理', '手足护理', '美体瘦身', '胸部护理','洗发水','沐浴露','男士护理','女士护理','香氛精油']
var add = [];
for(var i = 0; i < arr.length; i++) {
	for(var k = 1;k<=20;k++){
	
		add.push('http://search.lefeng.com/search/showresult?keyword=' + arr[i] + '&is_has_stock=0&page='+ k +'&moreBrand=0')
		
	}

}

var len = arr.length;
var j = 0;

function api(j) {

	http.get(encodeURI(add[j]), function(res) {
		var data = '';
		res.on('data', function(chunk) {
			data += chunk;
		});
		res.on('end', function() {
			var $ = cheerio.load(data);

			create();
			connection.connect();
			$('#productDivGroup .pruwrap dl').each(function(idx, ele) {
				var img = $(ele).find('dt').find('a').find('img').attr('src');
				
				var title = $(ele).find('dt').find('a').attr('title').trim();
				var classify = arr[j];

				var discount = $(ele).find('dd').eq(1).find('b').text().trim().match(/\d+\.\d+/);
				var pricenow = $(ele).find('.pri').find('.price').text().trim().match(/\d+/);
				var priceoriginal = $(ele).find('.pri').find('.spri').text().trim().match(/\d+/);
				var page = $(ele).find('dt').find('a').attr('href').match(/\d+/);
				var temp = $(ele).find('dt').find('a').attr('href');
				var brand_id = $(ele).find('dt').find('a').attr('href').slice(temp.indexOf('=')).slice(1)

				console.log(page)
				connection.query(`insert into goods_list_copy (goods_name,goods_classify,goods_discount,goods_price_now,goods_price_original,goods_img,brand_id,page) values 
				('${title}', '${classify}', '${discount}', '${pricenow}','${priceoriginal}','${img}','${brand_id}','${page}')`, function(err, results, field) {
					if(err) throw err;
					
					if(j<len){
						j++;
						api(j);
					}
//					connection.end();
				})
			})
		})
	})
}
api(j);
