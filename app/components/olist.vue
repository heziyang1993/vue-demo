<template>
	<div class="listproduct">
		<ul>
			<li v-for='i in classifyList'>
				<a :href='"#/detail/detailInfo?id="+i.id'>
					<div class="listproductimg">
						<img :src="i.goods_img">
					</div>
					<div class="listproductinfo">
						<p class="productdesc">
							<span class="ziying">
								<img src="//st02.fn-mart.com/vue-statics/src/assets/images/goods/icon_selfsupport2_2x.png">
							</span>
							{{i.goods_name}}
						</p>
						<p class="listproduct_sale">
							<span style="color:#c70034">￥</span>
							<span class="product_now_price">{{i.goods_price_now}}</span>
							<span class="product_old_price">
								<s>￥{{i.goods_price_original}}</s>
							</span>
							<span class="limittime_sale">限时特惠</span>
						</p>
						<p class="comment">
							<span class="nicecomment">好评率100%</span>
							<span class="comment_count">评论{{i.goods_price_original}}条</span>
							
						</p>
						
					</div>
					<a class="buy_product" @click="addCar(i.id)">
						<i class="iconfont icon-gouwuche2"></i>
					</a>
				</a>
			</li>
		</ul>

	</div>
</template>
<script>
	export default{
		data(){
			return{
				page:1,
				num:1,
				username:"",
			}
		},
		methods:{
			// 点击列表图片，跳转到详情页
			goDetail(id){
				window.location.href="#/detail/detailInfo?id="+id;
			},
			//点击列表购物车，该用户购物车数据库添加一件商品
			addCar(id){
				if(this.username.length != 0){
					var self =this;
					var hash=id;
				}else {
					alert('请登录');
					location.hash = '/login';
				}
				
			}
		},
		mounted(){
			//获取cookie中的用户名
			var str = document.cookie;
			var arr = str.split("; ");
			arr.forEach((item)=>{
				var arr2 = item.split("=");
				if(arr2[0] == "username"){
					this.username = arr2[1];
				}
			});

			//接收商品分类传过来的参数，再发送商品类名到数据库并返回该类商品数据渲染列表页面
			var self=this;
			this.$http.get("./json/goods_list.json").then((response) =>{
					var goodsArr = [];
					for(var i = 0;i < 20;i++){
						goodsArr.push(response.body.RECORDS[i]);
					}
					self.$store.dispatch('classifyList',goodsArr);
					
				}).catch((error)=>{

				});
			},
			computed:{
				classifyList(){
					return this.$store.state.classifyList;
				}
			},

	}
</script>
<style scoped>
	.listproduct{
		width: 100%;
		height: 100%;
		background-color: #f8f8f8;
	}
	.listproduct li{
		background-color: #fff;
		width: 100%;
		height: 1.6rem;
		overflow: hidden;
		position: relative;
		border-bottom: 0.013333rem solid #ccc;
	}
	.listproductimg,.listproductinfo{
		float: left;
		padding: 0.066666rem;
	}
	.listproductimg{
		padding-right: 0.133333rem;
	}
	.listproductimg>img{
		width: 1.4rem;
		height: 1.4rem;
	}
	.listproductinfo{
		font-size: 0.16rem;
		width: 2.7rem;
		height: 1.5rem;
		margin: 0 auto;
		position: relative;
	}
	.ziying{
		display: inline-block;
		width: 0.373333rem;
		height: 0.2rem;
		padding-top: 0.04rem;
	}
	.ziying>img{
		width: 0.373333rem;
		height: 0.2rem;
	}
	.listproduct_sale{
		margin-top: 0.25rem;
		margin-bottom: 0.15rem;
	}
	.product_now_price{
		font-size: 0.213333rem;
		color:#c70034;
		padding-right: 0.266666rem;
	}
	.product_old_price{
		padding-right: 0.266666rem;
	}
	.limittime_sale{
		border: 0.013333rem solid red;
		color: red;
	}
	.comment{
		font-size: 0.16rem;
		color: #ccc;
	}
	.nicecomment{
		padding-right: 0.133333rem;
	}
	.buy_product{
		display: block;
		width: 0.453333rem;
		height: 0.453333rem;
		position: absolute;
		right: 0.106666rem;
		bottom: 0.266666rem;
		font-size: 0.16rem;
	}
	.icon-gouwuche2{
		font-size: 0.4rem;
		color: #c70034;
	}
</style>