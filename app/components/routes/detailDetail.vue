<template>
	<div class="detailDetailContainer">
		<div class="tabs">
			<ul>
				<li @click='change_content(1)' :class='{detail_active:content==1}'>商品详情</li>
				<li @click='change_content(2)' :class='{detail_active:content==2}'>规格包装</li>
			</ul>
		</div>
		<div class="content">
			<div class="goods_details" v-show='content==1'>
				<img :src="ele" v-for="ele in detail_img"/>
			</div>
			<div class="goods_info" v-show='content==2'>
				<table>
					<tr>
						<th>品牌</th>
						<td>{{brand}}</td>
					</tr>
					<tr>
						<th>备注</th>						
						<td>{{remark}}</td>
					</tr>
					<tr>
						<th>到期日</th>
						<td>{{sell_by_data}}</td>
					</tr>
					<tr>
						<th>特点</th>
						<td>{{rule}}</td>
					</tr>
					<tr>
						<th>包装</th>
						<td>{{character}}</td>
					</tr>
				</table>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data(){
			return {
				content:1,
				detail_img:[],
				brand:'',
				remark:'',
				sell_by_data:'',
				rule:'',
				character:''
			}
		},
		methods:{
			change_content(num){
				this.content = num;
			},
			change_content(num){
				this.content = num;
			}
		},
		mounted(){
			var self = this;
			var xhr = new XMLHttpRequest();
			var id = this.$route.query.id;
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4 && xhr.status == 200){
					var currentGood = {};
					for(var i = 0;i < JSON.parse(xhr.responseText).RECORDS.length;i++){
						if(JSON.parse(xhr.responseText).RECORDS[i].id == id){
							currentGood = JSON.parse(xhr.responseText).RECORDS[i];
						}
					}
					self.detail_img = JSON.parse(currentGood.detail_img)
					self.brand = JSON.parse(currentGood.goods_info).brand;
					self.remark = JSON.parse(currentGood.goods_info).remark;
					self.sell_by_data = JSON.parse(currentGood.goods_info).character;
					self.rule = JSON.parse(currentGood.goods_info).place;
					self.character = JSON.parse(currentGood.goods_info).sell_by_date;
				}
			}
			xhr.open('GET','./json/goods_list.json',true);
			xhr.send();
			
		}
	}
</script>

<style scoped>
	.detailDetailContainer {
		padding-top:0.8rem;
		box-sizing: border-box;
		padding-bottom: 0.666666rem;
	}
	.detailDetailContainer ul {
		width: 70%;
		height: 0.4rem;
		font-size: 0.213333rem;
		margin: 0 auto;
	}
	.detailDetailContainer ul li {
		width: 50%;
		border:0.013333rem solid #e5e5e5;
		height: 0.4rem;
		line-height: 0.4rem;
		text-align: center;
		float:left;
		border-radius: 0.066666rem;
	}
	.detail_active {
		background: #e5e5e5;
	}
	.content .goods_details img {
		width: 100%;
		padding-top: 0.266667rem;
	}
	.goods_info {
		margin-top: 0.266666rem;
	}
	.goods_info table {
		width: 80%;
		margin: 0 auto;
		vertical-align: middle;
		text-align: center;
		font-size: 0.186666rem;
		border-collapse: collapse;
		border-spacing: 0;
	}
	.goods_info table td,
	.goods_info table th{
		border: 0.013333rem solid #e5e5e5;
		padding: 0.066666rem;
	}
</style>