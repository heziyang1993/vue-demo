<template>
	<div class="content">
		<header>
			<span class="icon back iconfont icon-fanhui1" @click='backTo(getprePaths)'></span>
			<div class="top">
				<ul class="clearfix">
					<li :class="{'current':currentTab==1}" @click="changeTab(1)">
						<a :href='"#/detail/detailInfo?id="+id'>商品</a>
					</li>
					<li :class="{'current':currentTab==2}" @click="changeTab(2)">
						<a :href='"#/detail/detailDetail?id="+id'>详情</a>
					</li>
					<li :class="{'current':currentTab==3}" @click="changeTab(3)">
						<a :href='"#/detail/detailComment?id="+id'>评价</a>
					</li>
				</ul>
			</div>
			<span class="icon more iconfont icon-gengduo2"></span>
		</header>
		<router-view></router-view>
		<footer>
			<ul>
				<li :class="{'current':heartlight}" @click="changeheart()">
					<p><span class="icon iconfont icon-xinxing"></span></p>
					<p><span>收藏</span></p>
				</li>
				<li>
					<a href="javascript:void(0);" @click="gobuyCar()">
						<p><span class="icon iconfont icon-gouwuche"></span></p>
						<p><span>购物车</span></p>
					</a>
				</li>

				<li @click="goCar()">	
					<p class="add-to-car"><span>加入购物车</span></p>
				</li>
			</ul>
		</footer>

		<div class="gallery" v-show="isShowGrallery" @click="hideGrallery">
			<div class="container" >
				<img :src="imgUrl" alt="">
			</div>
		</div>
		<div class="carlist" v-show="isshowcar">
			<div class="car">
				<div class="goodNum">
					<span class="jian" @click="del()">-</span>
					<span class="num">{{num}}</span>
					<span class="jia" @click="add()">+</span>
				</div>
				<div class="submits" @click="goback()">
					<span>加入购物车</span>
				</div>
				<div class="submits">
					<span>立即购买</span>
				</div>
				<div class="submits" @click="goback()">
					<span>取消</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				tab:1,
				tabs:null,
				id:'',
				isshowcar:false,
				num:1,
				heartlight:false,
				username:"",
			}
		},
		methods: {
			changeTab: function(tab) {
				this.tab = tab;
			},
			backTo(path){
				location.hash = path;
			},
			//点击收藏，将该用户数据加入到数据库
			//先判断是否是登录用户
			changeheart(){	
				if(this.heartlight){
					this.heartlight = false;
				}else{
					this.heartlight = true;
				}
			},
			//点击图片预览，隐藏图片预览遮罩层
			hideGrallery(){
				this.$store.state.isShowGrallery = false;
			},
			//点击购物车，判断是否登录，登录就进入购物车页面，否则跳转到登录页面
			gobuyCar(){
				if(this.username.length!=0){
					location.href="#/buycar";
				}else{
					location.href="#/login";
				}
			},
			//点击加入购物车，显示编辑加入数量框
			goCar(){
				if(this.username.length!=0){
					this.isshowcar=true;
				}else{
					location.href="#/login";
				}
				
			},
			//点击加入购物车，将该用户名和商品ID，个数发送数据库
			goback(){
				this.isshowcar=false;
			},
			//减数量
			del(){
				if(this.num<=0){
					return;
				}else{
					this.num--;
				}
			},
			//加数量
			add(){
				if(this.num>=60){
					return;
				}else{
					this.num++;
				}
			},
		},
		mounted: function() {
			//此处添加这个，是为了每跳转一个页面都回到最顶端
			window.scrollTo(0,0);
			//获取URL带的参数
			this.id = this.$route.query.id;
			//获取cookie中的用户名
			var str = document.cookie;
			var arr = str.split("; ");
			arr.forEach((item)=>{
				var arr2 = item.split("=");
				if(arr2[0] == "username"){
					this.username = arr2[1];
				}
			});
			//进入页面先判断是否有用户登录，有的话就发送请求判断是否已经收藏当前商品
			if (this.username.length!=0) {
				var self =this;
				this.$http.get("./json/user_info.json").then((response) =>{
					var self = this;
					response.body.RECORDS.forEach(function(item){
						if(item.username == self.username){
							var goodCollection = JSON.parse(item.good_collection);
							goodCollection.forEach(function(item){
								if(item == self.id){
									self.heartlight=true;
								}
							})
						}
					})
					// response.body.forEach(function(item){
					// 	if(item == self.id){
					// 		self.heartlight=true;
					// 	}
					// })
				}).catch((error)=>{

				});	
			}else{
				this.heartlight=false;
			}
		},
		computed: {
			isShowGrallery() {
				return this.$store.state.isShowGrallery;
			},
			imgUrl() {
				return this.$store.state.imgUrl;
			},
			getprePaths(){
				this.prePaths = this.$store.state.prePath;
				return this.$store.state.prePath;
			},
			currentTab(){
				//根据路由判断是否高亮
				switch(this.$route.path){
					case '/detail/detailDetail' :
					this.tab = 2;
					break;
					case '/detail/detailInfo' :
					this.tab = 1;
					break;
					case '/detail/detailComment' :
					this.tab = 3;
					break;
				};
				// this.tab = this.$route.path;
				return this.tab;
			}
		}
	}
</script>
<style scoped>

	.carlist{
		z-index: 10000;
		height:0.666667rem;
		font-size: 0.186667rem;
		width:100%;
		position: fixed;
		bottom: 0;
		background-color: #e5e5e5;
	}
	.carlist .car{
		display: flex;
		height:0.666667rem;
		line-height: 0.666667rem;
	}
	.carlist .car .goodNum{
		width:50%;
		display: flex;
		padding:0.093333rem;
		text-align: center;
		font-size: 0.266667rem;
	}
	.carlist .car .goodNum span{
		flex: 1;
		border:0.013333rem solid #fff;
		display: block;
		height:0.493333rem;
		padding:0.12rem;
		margin:0 0.053333rem;
		line-height: 0.28rem;
	}
	.carlist .car .submits{
		width:25%;
		height:0.666667rem;
		background-color: #d7063b;
		font-size: 0.186667rem;
		text-align: center;
		line-height: 0.666667rem;
		color:#fff;
		margin-right: 0.013333rem;
	}
	.gallery{
		display: flex;
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 10000;
		background-color: #000;
	}
	
	.gallery .container {
		width: 100%;
		height: 2.666667rem;
		position: absolute;
		top:50%;
		margin-top: -62%;
		/* align-self: center; */ 

	}
	
	.gallery img {
		width: 100%;
	}
	
	.clearfix {
		clear: both;
		content: "";
		display: block;
		height: 0;
	}
	
	.content {
		width: 100%;
		background-color: #FFF;
	}
	
	.content header {
		position: fixed;
		top: 0;
		width: 100%;
		height: 0.533333rem;
		background-color: #f9f9f9;
		font-size: 0.186667rem;
		border-bottom: 0.013333rem solid #e5e5e5;
		z-index: 555;
	}
	
	.top {
		height: 0.533333rem;
		width: 2.133333rem;
		margin: 0 auto;
	}
	
	.top ul li {
		float: left;
		text-align: center;
		height: 0.533333rem;
		line-height: 0.533333rem;
		margin-right: 0.133333rem;
		margin-left: 0.2rem;
	}
	
	.top ul .current {
		border-bottom: 0.026667rem solid #FF5053;
		color: #FF5053;
	}
	
	.icon {
		display: block;
		width: 0.533333rem;
		height: 0.533333rem;
		font-size: 0.266667rem;
		line-height: 0.533333rem;
		position: absolute;
		text-align: center;
		top: 0;
	}
	
	.back {
		left: 0.093333rem;
	}
	
	.more {
		right: 0.093333rem;
	}
	
	footer {
		width: 100%;
		position: fixed;
		bottom: 0;
		height: 0.666667rem;
		background-color: white;
		font-size: 0.186667rem;
		z-index: 998;
	}
	
	footer ul {
		overflow: hidden;
		padding-left: 0.026667rem;
		display: flex;
	}
	
	footer ul li {
		float: left;
		flex: 1;
		text-align: center;
	}
	
	footer ul .current {
		color: #FF5053;
	}
	
	footer ul li p:nth-child(1) {
		margin-bottom: 0.026667rem;
		margin-top: 0.026667rem;
	}
	
	footer ul li:nth-child(3) {
		background-color: #FF5053;
		text-align: center;
		height: 0.666667rem;
		line-height: 0.666667rem;
		color: white;
	}
	
	footer ul li .icon {
		font-size: 0.28rem;
		display: block;
		width: 0.28rem;
		line-height: 0.28rem;
		height: 0.28rem;
		position: relative;
		margin: 0 auto;
	}
	footer ul li .add-to-car{
		background-color: #d7063b;
		line-height: 0.666667rem;
	}
</style>