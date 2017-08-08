<template>
	<div>
		<!-- 如果购物车没有东西，则显示这个，如果有则显示下面的 -->
		<div class="car_no_good" v-show="nothing_in_car">
			<img src="//st02.fn-mart.com/mstatics/assets/img/v2/cart/null.png" alt="">
			<p class="nothing">您的购物车内还没任何商品！</p>
			<div class="gotohome">
				<a href="">去首页看看~</a>
			</div>
		</div>
		
		<div class="feiniu"  v-show="!nothing_in_car">
			<div class="autotrophy">
				<input type="checkbox" class="chooseall" v-model="isClear">
				<p class="feiniuword">
					<span class="iconfont icon-niu"></span>
					<a href="">飞牛自营</a>
				</p>
			</div>
			<div class="remind_postage" v-show="postage">
				再买￥{{95-totalprice}}元即享￥95包邮（10kg以内）
			</div>
			<div class="goods_radio" v-for="(good,index) in lists">
				<div class="choose_radio">
					<input type="checkbox" :value="good" v-model="name">
				</div>
				<div class="goods_img">
					<img :src="good.goods_img">
				</div>
				<div class="goods_desc">
					<p class="desc">
						{{good.goods_name}}
					</p>
					<span class="iconfont icon-lajixiang" @click="open(good.id,index)"></span>
					<span class="weight"></span>
					<br>	
					<span class="limitsale">限时特惠</span>
					<br>
					<span class="price">￥</span><span class="price" v-text="good.goods_price_now"></span>
					<div class="calcount">
						<input type="text" value="-" class="subtract" readonly @click="subtract(index)"><input type="text" :value="good.number" class="val" readonly><input type="text" value="+" class="plus" readonly @click="plus(index)">
					</div>
					 <!-- @click="delet_buy_good(good.id)" -->
				</div>
			</div>
	
			<!-- 弹出框 -->
			<div>
	  			<!-- <mu-raised-button label="1111"/> -->
	  			<mu-dialog :open="dialog" title="" @close="close">
	  			  您确认要删除此件物品吗？
	  			  <mu-flat-button slot="actions" @click="close" primary label="取消"/>
	  			  <mu-flat-button slot="actions" primary @click="makesure(idNo)" label="确定"/>
	  			</mu-dialog>
			</div>
		</div>
	</div>
</template>
<script>
	// import Vue from 'vue';
	import axios from "axios";
	// Vue.prototype.$ajax = axios;
	export default({
		data(){
			return {
 				// ajax请求回数据前是空数组
 				lists:[],
 				// 用来制作全选，每点击一个input，即往数组添加一个数，当数组满时，全选键打勾
 				name:[],
 				isClear:false,
 				postage:false,
 				// deletcount:[]
 				// 弹出框初始值
 				dialog: false,
 				idNo:"",
 				nothing_in_car:false,
 				//用户名
 				username:"",
 				//商品列表中的索引
 				idx:0
 			}
 		},
 		filters:{
 			// 货物数量过滤器，因为传过来是字符串
 			goodVolum(input){
 				var str = JSON.stringify(input);
 				var arr = JSON.parse(input);
 				return arr.place
 			}
 		},
 		computed:{

 			// 计算总价
 			totalprice(){
 				if(this.name){
 					var sum = 0;
 					for(var i=0;i<this.name.length;i++){
 						sum += (this.name[i]['goods_price_now'] * this.name[i]['number']);
 					}
 					
 					this.$store.state.totalPrice = sum;

 					// 保佑与否的运算
 					if(sum<=95 && sum>=0){
 						this.postage = true
 						this.$store.state.ispostage = false;
 					};
 					
 					if(sum>95){
 						this.postage = false
 						this.$store.state.ispostage = true;
 					}
 					return sum
 				}
 			}
 		},
 		watch: {
 			// 监听全选键
 			isClear(val) {
 				if(this.isClear) {
 					this.name = [];
 					var i = 0;
 					for(; i < this.lists.length; i++) {
 						this.name.push(this.lists[i])
 					}
 					this.isClear = true
 				} else {
					//这一步很关键，要判断全选是否在全选和全不选时候的切换，如果是则清空
					//如果不是则是多选下的一个或多个不选
					if(this.name.length == this.lists.length) {
						// 为什么要为空？因为this.name.length == this.lists.length时是全选，所以再次点击必须清空
						this.name = [];
					} else {
						this.name = this.name;
					}
						this.isClear = false
					}
			},

			// 监听单选键
			name(){
				if(this.name.length == 0) {
					this.isClear = false
				
				} else if(this.name.length == this.lists.length) {
					this.isClear = true
				} else {
					this.isClear = false
				}
			}
		},
		methods:{
 			// 数量-
 			subtract(index){
 				if(this.lists[index].number != 1){
 					this.lists[index].number--;
 					//上传购物车信息
 				}
 			},
 			// 数量+
 			plus(index){
 				this.lists[index].number++;
				//上传购物车信息
 			},
 			delet_buy_good(delet_id){
 			},
 			open (idnum,index) {
    			  this.dialog = true;
    			  this.idNo = idnum;
    			  this.idx = index;
    		},
    		close () {
    			  this.dialog = false
    		},
    		makesure(good_id){
    			var cookies = document.cookie;
 				var arr = cookies.split('=')
 				var user = arr[1];
 				var self = this;
 				this.lists.splice(this.idx,1);
    			this.dialog = false;
    		},
    		
 		},
 		mounted(){
 			// 获取cookie中的用户名
 			var cookies = document.cookie;
 			var arr = cookies.split('=')
 			var user = arr[1];
 			this.username = user;

 			// 发送请求，铺垫数据库
			var self = this;
 			axios.get('./json/user_info.json').then((response) => {
 				for(var item of response.data.RECORDS){
 					if(item.username == self.username){
 						var products = JSON.parse(item.buy_car);
 					}
 				}
 				if(products.length != 0){
					//获取对应商品
					axios.get('./json/goods_list.json').then((data)=>{
						for(var item of data.data.RECORDS){
							for(var currentGood of products){
								if(currentGood.id == item.id){
									self.lists.push(item);
								}
							}
						}
					})
 				}else{
 					this.nothing_in_car = true;
 				}
			}).catch((error) => {
 				console.log(error);
 			});
		}
	})
</script>
<style scoped>
	.car_no_good{
		width: 100%;
	}
	.car_no_good>img{
		width: 75%;
		margin: 0 auto;
	}
	.nothing{
		text-align: center;
		line-height: 0.48rem;
		font-size: 0.213333rem;
		color: #666;
	}
	.gotohome{
		width: 90%;
		margin: 0 auto;
		line-height: 0.533333rem;
		background-color: #d7063b;
		font-size: 0.213333rem;
		text-align: center;
		/*margin-bottom: 20px;*/
		margin-top: 0.133333rem;
	}
	.gotohome>a{
		color: white;
	}
	.feiniu{
		width:100%;
		font-size: 0.186667rem;
		background-color: #fff;
	}
	.autotrophy{
		margin: 0 auto;
		width: 96%;
		height: 0.533333rem;
		position: relative;
		border-bottom: 0.013333rem solid #ddd;
	}
	.remind_postage{
		width: 100%;
		height: 0.266667rem;
		line-height: 0.266667rem;
		font-size: 0.16rem;
		background-color: #ff6162;
		text-align: center;
		color: white;
	}
	input{
		width: 0.266667rem;
		height: 0.266667rem;
		text-align: center;
	}
	.chooseall{
		position: absolute;
		left: 6%;
		top: 50%;
		margin-top: -0.133333rem;
	}
	.feiniuword{
		padding-left: 0.666667rem;
		line-height: 0.533333rem;
	}
	.icon-niu{
		color: red;
	}
	.goods_radio{
		position: relative;
		margin: 0 auto;
		width: 96%;
		border-bottom: 0.013333rem solid #ddd;
		margin-top: 0.133333rem;
		padding-bottom: 0.133333rem;
	}
	.choose_radio{
		position: absolute;
		left: 6%;
		top: 50%;
		margin-top: -0.133333rem;
	}
	.goods_img{
		padding-left: 0.8rem;
		display: inline-block;
		margin-bottom: 0.266667rem;

	}
	.goods_img img{
		height: 1.066667rem;
		width: 1.066667rem;
	}
	.goods_desc{
		display: inline-block;
		width: 50%;
		height: 100%;
		padding-left: 0.133333rem;
		position: relative;
	}
	.desc{
		height: 0.533333rem;
		padding-right: 0.266667rem;
		font-size: 0.16rem;
		display: inline-block;
		text-overflow: ellipsis;
		overflow: hidden;
		/*white-space: nowrap;*/
	}
	.icon-lajixiang{
		position: absolute;
		top: 0;
		right: 0;
	}
	.weight{
		font-size: 0.16rem;
		color: #ddd;
	}
	.price{
		color: red;
	}
	.limitsale{
		font-size: 0.16rem;
		color: red;
		border: 0.013333rem solid red;
	}
	.calcount{
		display: inline-block;
		padding-left: 0.213333rem;
	}
	
	.subtract,.val,.plus{
		height: 0.32rem;
		width: 0.32rem;
		outline:none;

	}
	.subtract{
		margin-left: 0.133333rem;
	}
	.mu-dialog-body{
		text-align: center;
	}
	.mu-dialog{
		background-color: #ff0;
	}
</style>

