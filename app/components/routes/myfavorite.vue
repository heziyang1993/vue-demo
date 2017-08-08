<template>
	<div class="myfavorite-container">
		<header class="myfavorite-header">
			<span class="back iconfont icon-fanhui1" @click="goBack">
				
			</span>
			<!-- tab标签切换 -->
			<mu-tabs :value="activeTab" @change="handleTabChange" class="myfavorite-tab">
	    		<mu-tab value="goods" title="商品" class="myfavorite-goods"/>
	    		<mu-tab value="shops" title="店铺" class="myfavorite-shops"/>
	    	</mu-tabs>
		</header>
		<div class="myfavorite-goods-list-box" v-if="activeTab === 'goods'">
			<div class="no-goods-list" v-show="noFavoriteGoods">
				<img src="../../images/blank_icon.png" alt="">
				<p>您还没有收藏过任何商品</br>去逛逛吧</p>
				<a href="javascript:void(0);">逛逛秒杀</a>
			</div>
			<div class="myfavorite-goods-list">
				<ul class="goods-list">
					<li v-for="good in goodsList">
						<img :src="good.goods_img" alt="">
						<div class="goods-info">
							<p class="goods-name"><span class="shops-type">自营</span>{{good.goods_name}}</p>
							<p class="goods-price"><span class="price-now">￥<b>{{good.goods_price_now}}</b></span><span class="price-origin"><s>￥<span>{{good.goods_price_original}}</span></s></span></p>
							<span class="to-shopcart">
								<i class="iconfont icon-gouwuche"></i>
							</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="myfavorite-shops-list-box" v-if="activeTab === 'shops'">
			<div class="no-shops-list" v-show="noFavoriteShops">
				<img src="../../images/blank_icon.png" alt="">
				<p>您还没有收藏过任何店铺</br>去逛逛吧</p>
				<a href="javascript:void(0);">逛逛秒杀</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				activeTab: "",
				noFavoriteGoods:true,
				noFavoriteShops:true,
				username:"",
				goodsId:"",
				goodsList:[],
			}
		},
		methods:{
			//tab标签切换
			handleTabChange (val) {
		        this.activeTab = val
		    },
		    //返回
		    goBack(){
		    	history.back();
		    }
		},
		mounted(){
			//根据状态确定为商品收藏或店铺收藏
			this.activeTab = this.$store.state.myfavoriteTab;
			//获取cookie中的用户名
			var str = document.cookie;
			var arr = str.split("; ");
			arr.forEach((item)=>{
				var arr2 = item.split("=");
				if(arr2[0] == "username"){
					this.username = arr2[1];
				}
			})
			//根据用户名获取用户信息
			this.$ajax.get("/json/user_info.json").then((data)=>{
				var self = this;
				for(var item of data.data.RECORDS){
					//如有收藏记录则进行筛选
					if(item.good_collection){
						if(item.username == self.username){
							self.$ajax.get("./json/goods_list.json").then((data)=>{
								self.noFavoriteGoods = false;
								var goodsArr = [];
								//获取对应的商品
								for(var currentGood of data.data.RECORDS){
									for(var currentId of JSON.parse(item.good_collection)){
										if(currentId == currentGood.id){
											goodsArr.push(currentGood);
										}
									}
								}
								self.goodsList = goodsArr;
							},(err)=>{
								console.log(err);
							})
							break
						}
					}
				}
			},(err)=>{
				console.log(err);
			})

		}
	}
</script>
<style scoped>
	.myfavorite-container{
		width: 100%;
		height: 100%;
		font-size: 0.186667rem;
		background-color: #eee;
		position: relative;
	}
	/*头部样式*/
	.myfavorite-header{
		height: 0.6rem;
		position: relative;
		border-bottom: 1px solid #ddd;
		background-color: #f9f9f9;
	}
	.myfavorite-header .back{
		position: absolute;
		display: block;
		height: 0.6rem;
		width: 0.6rem;
		font-size: 0.333333rem;
		text-align: center;
		line-height: 0.6rem;
		font-weight: bold;
	}
	/*tab样式*/
	.myfavorite-tab{
		position: absolute;
		left: 50%;
		margin-left: -0.96rem;
		height: 100%;
		line-height: 100%;
		display: flex;
		width: 1.92rem;
		background-color: #f9f9f9;
	}
	.myfavorite-tab .myfavorite-goods,.myfavorite-tab .myfavorite-shops{
		font-size: 0.213333rem;
		display: block;
		float: left;
		flex: 1;
		line-height: 0.56rem;
		text-align: center;
		color:#333;
		height: 100%;
	}
	/*无列表信息图片*/
	.no-goods-list,.no-shops-list{
		padding-top: 2rem;
	}
	.no-goods-list img,.no-shops-list img{
		width: 100%;
	}
	.no-goods-list p,.no-shops-list p{
		padding: 0.4rem 0;
		font-size: 0.24rem;
		text-align: center;
		color:#6c6c6c;
	}
	.no-goods-list a,.no-shops-list a{
		display: block;
		height: 0.533333rem;
		font-size: 0.293333rem;
		line-height:0.533333rem;
		margin: 0.2rem 0.133333rem;
		text-align: center;
		color:#FFF;
		background-color: #d7063b;
	}
	/*商品收藏列表*/
	.myfavorite-goods-list{
		background-color: #f8f8f8;
	}
	.myfavorite-goods-list .goods-list li{
		border-bottom: 0.013333rem solid #d5d5d5;
		height: 1.6rem;
	}
	/*商品图片*/
	.myfavorite-goods-list .goods-list li img{
		float: left;
		height: 1.586667rem;
		width: 1.586667rem;
	}
	/*商品信息*/
	.myfavorite-goods-list .goods-list li .goods-info{
		float: left;
		padding: 0.133333rem;
		position: relative;
		height: 100%;
	}
	.myfavorite-goods-list .goods-list li .goods-info .goods-name{
		height: 0.56rem;
		line-height: 0.28rem;
		width: 3.1rem;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.myfavorite-goods-list .goods-list li .goods-info .goods-name .shops-type{
		font-size: 0.15rem;
		padding: 0.013333rem;
		border:0.013333rem solid #ed2656;
		color:#ed2656;
		line-height: 0.15rem;
		display: inline-block;
		height: 0.186667rem;
		margin-right: 0.066667rem;
	}
	.myfavorite-goods-list .goods-list li .goods-info .goods-price .price-now{
		font-size: 0.16rem;
		color:#d7063b;
	}
	.myfavorite-goods-list .goods-list li .goods-info .goods-price .price-now b{
		font-size: 0.24rem;
	}
	.myfavorite-goods-list .goods-list li .goods-info .goods-price .price-origin{
		margin-left: 0.066667rem;
		color: #bfbfbf;
		font-size: 0.16rem;
	}
	.myfavorite-goods-list .goods-list li .goods-info .to-shopcart{
		border: 1px solid #e7809a;
		border-radius: 50%;
		background-color: #ffefef;
		position: absolute;
		height: 0.4rem;
		width: 0.4rem;
		right: 0.133333rem;
		bottom: 0.133333rem;
		line-height: 0.4rem;
		text-align: center;
		color:#d7063b;
		font-size: 0.213333rem;
	}
</style>