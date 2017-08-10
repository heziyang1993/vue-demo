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

//detail

create();
connection.connect();
var detail = [];
var detail_url = [];
connection.query(`select page from goods_list_copy`, function(err, results, field) {
	if(err) throw err;
	for(var i = 0; i < JSON.parse(JSON.stringify(results)).length; i++) {
		detail.push(JSON.parse(JSON.stringify(results))[i].page);
	};

	;
	(function() {
		for(var i = 0; i < detail.length; i++) {
			detail_url.push('http://product.lefeng.com/product/'+ detail[i] +'.html')
		}

	})();
	

	api(detail_url, j, detail)

	//	connection.end();
})
var j = 0;
function api(detail_url, j, detail) {
	http.get(detail_url[j], function(res) {
		var data = '';
		res.on('data', function(chunk) {
			data += chunk;
		});
		res.on('end', function() {
			var $ = cheerio.load(data);
			var images = [];
			$('.main-left img').each(function(idx, ele) {

				var img = $(ele).attr('src');
				images.push($(ele).attr('src'));
			})
			console.log(images)
			var info = {
				brand: $('.detail-info-table').find('tbody').children('tr').eq(0).find('td').eq(1).text().trim(),
				remark: $('.detail-info-table').find('tbody').children('tr').eq(1).find('td').eq(1).text().trim(),
				sell_by_date: $('.detail-info-table').find('tbody').children('tr').eq(2).find('td').eq(1).text().trim(),
				character: $('.detail-info-table').find('tbody').children('tr').eq(3).find('td').eq(1).text().trim(),
				place: $('.detail-info-table').find('tbody').children('tr').eq(4).find('td').eq(1).text().trim()
			}
			var info2 = JSON.stringify(info)
			var image2 = JSON.stringify(images) 			
			connection.query(`UPDATE goods_list_copy SET 
					goods_brand = '${info.brand}',
					detail_img = '${image2}',
					goods_info = '${info2}'

					WHERE page = '${detail[j]}'
					`, function(err, results, field) {
				if(err) throw err;
				images.length = 0;
				if(j < detail.length) {
					j++;
					api(detail_url, j, detail);
					console.log(j)
					console.log(detail_url[j])


				}

			})

		})
	})
}