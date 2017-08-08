<template>
	<div class="container">
		<div class="mine-log">
			<a href="javascript:void(0);" class="iconfont icon-iconfontlttb mine-xinxi"></a>
			<div class="mine-info">
				<img class="mine-headpic" :src="headpicSrc" alt="">
				<form action="" id="upload-headpic-box">
					<input type="file" id="upload-headpic" @change="uploadHeadpic">
				</form>
				<label for="upload-headpic" class="upload-headpic-btn"></label>
				<div class="upload-headpic-toast" v-if="isShowHeadpicToast"></div>
				<div class="to-log-reg" v-show="isShowToLogReg">
					<a href="#/login" class="mine-to-log" >登录</a>
					<a href="javascript:void(0);" class="line">|</a>
					<a href="#/register" class="mine-to-reg" >注册</a>
				</div>
				<div class="mine-username" v-show="!isShowToLogReg">
					<a href="javascript:void(0);" class="log-username" v-text="username"></a>
					<a href="javascript:void(0);" class="line">|</a>
					<a href="javascript:void(0);" @click="quit">退出</a>
				</div>
			</div>
		</div>
		<ul class="mine-collection">
			<li>
				<a href="#/myfavorite" @click="toGoodsFavorite">
					<span v-text="myfavoriteNum">0</span>
					商品收藏
				</a>
			</li>
			<li>
				<a href="#/myfavorite" @click="toShopsFavorite">
					<span>0</span>
					店铺收藏
				</a>
			</li>
			<li>
				<span class="iconfont icon-zuji"></span>
				我的足迹
			</li>
			<li>
				<span class="iconfont icon-qiandao"></span>
				签到领积分
			</li>
		</ul>
		<section class="mine-orders">
			<h3>我的订单
				<span class="mine-all-orders">查看全部订单
					<i class="iconfont icon-xiayibu"></i>
				</span>
			</h3>
			<ul class="section-box">
				<li>
					<span class="iconfont icon-daifukuan"></span>
					待付款
				</li>
				<li>
					<span class="iconfont icon-daifahuo"></span>
					待发货
				</li>
				<li>
					<span class="iconfont icon-daishouhuo"></span>
					待收货
				</li>
				<li>
					<span class="iconfont icon-daipingjia"></span>
					待评价
				</li>
				<li>
					<span class="iconfont icon-tuihuo"></span>
					退货
				</li>
			</ul>
		</section>
		<section class="mine-orders">
			<h3>我的资产</h3>
			<ul class="section-box">
				<li>
					<span class="iconfont icon-yue"></span>
					账户余额
				</li>
				<li>
					<span class="iconfont icon-gouwuqia"></span>
					购物卡
				</li>
				<li>
					<span class="iconfont icon-youhuiquan"></span>
					优惠券
				</li>
				<li>
					<span class="iconfont icon-jifen"></span>
					积分
				</li>
				<li>
					<span class="iconfont icon-chongzhi"></span>
					卡券充值
				</li>
			</ul>
		</section>
		<section class="mine-option">
			<ul class="mine-option-box">
				<li>
					<a href="#/myinfo">
						<span class="iconfont icon-geren mine-userinfo"></span>
						个人信息
					</a>
				</li>
				<li>
					<a href="#/bought">
						<span class="iconfont icon-gouwu mine-bought"></span>
						曾经购买
					</a>
				</li>
				<li>
					<a href="javascript:void(0);">
						<span class="iconfont icon-liwu mine-bonus"></span>
						积分商城
					</a>
				</li>
				<li>
					<a href="#/helpcenter">
						<span class="iconfont icon-wenti mine-help"></span>
						帮助中心
					</a>
				</li>
			</ul>
		</section>
		<xfooter></xfooter>
	</div>
</template>
<script>
	import xfooter from '../xfooter.vue';
	export default{
		data(){
			return {
				username:"",
				isShowToLogReg:true,
				headpicSrc:"",
				isShowHeadpicToast:true,
				myfavoriteNum:0
			}
		},
		components:{
			xfooter
		},
		methods:{
			//上传头像
			uploadHeadpic(event){
				let formData = new FormData();
				formData.append("file",event.target.files[0]);
				formData.append("username",this.username);
				let config = {
					headers:{
						"Content-Type":"multipart/form-data"
					}
				};
			},
			//用户退出
			quit(){
				let now = new Date();
				now.setDate(now.getDate() - 7);
				document.cookie = "username=null;expires=" + now;
				this.username = "";
				this.headpicSrc = "uploads/mine-headerpic.jpg";
				this.isShowToLogReg = true;
				localStorage.removeItem("username");
				self.myfavoriteNum = 0;
			},
			//前往商品收藏
			toGoodsFavorite(){
				this.$store.state.myfavoriteTab = "goods";
			},
			//前往店铺收藏
			toShopsFavorite(){
				this.$store.state.myfavoriteTab = "shops";
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
					this.isShowToLogReg = false;
				}
			})
			//通过用户名发送请求获取用户信息
			this.$ajax.get("./json/user_info.json").then((data)=>{
				var self = this;
				for(var item of data.data.RECORDS){
					if(item.username == self.username){
						self.isShowHeadpicToast = false;
						self.headpicSrc = item.head_pic
						if(item.good_collection){
							self.myfavoriteNum = JSON.parse(item.good_collection).length;
						}
						break
					}else{
						self.isShowHeadpicToast = true;
						self.headpicSrc = "uploads/mine-headerpic.jpg";
						self.myfavoriteNum = 0;
					}
				}
			},(err)=>{
				console.log(err);
			})
		}
	}
</script>
<style scoped>
	/*容器样式*/
	.container{
		background-color: rgb(238, 238, 238);
		font-size: 0.186667rem;
		color:#666;
		height: 100%;
		width:100%;
		margin-bottom: 0.666667rem;
	}
	/*顶部样式*/
	.mine-log{
		width: 100%;
		height: 1.866667rem;
		background-image: url("../../images/mine-log.jpg");
		background-size: 100% 100%;
		position: relative;
	}
	.mine-log .mine-xinxi{
		position: absolute;
		width: 0.333333rem;
		height: 0.333333rem;
		font-size: 0.333333rem;
		color: #fff;
		right: 0.133333rem;
		top: 0.133333rem;
	}
	.mine-log .mine-info{
		top: 0.466667rem;
		left: 0.16rem;
		position: absolute;
	}
	.mine-log .mine-info .mine-headpic{
		display: block;
		float: left;
		height: 0.973333rem;
		width: 0.973333rem;
		border-radius: 50%;
		border: 0.026667rem solid rgb(249, 181, 182);
	}
	.mine-log .mine-info #upload-headpic-box,.mine-log .mine-info #upload-headpic,.mine-log .mine-info .upload-headpic-btn,.mine-log .mine-info .upload-headpic-toast{
		position: absolute;
		display: block;
		height: 0.973333rem;
		width: 0.973333rem;
		border-radius: 50%;
		z-index: -10;
		left: 0;
		font-size: 0;
	}
	.mine-log .mine-info .upload-headpic-btn{
		z-index: 99;
	}
	.mine-log .mine-info .upload-headpic-toast{
		z-index: 100;
	}
	.mine-log .mine-info .to-log-reg,.mine-log .mine-info .mine-username{
		line-height: 0.973333rem;
		float: left;
	}
	.mine-log .mine-info .mine-username .log-username{
		margin-left: 0.133333rem;
	}
	.mine-log .mine-info a{
		padding: 0.053333rem;
		display: block;
		float: left;
		font-size: 0.213333rem;
		color:#fff;
	}
	.mine-log .mine-info .line{
		font-size: 0.213333rem;
		line-height: 0.92rem;
	}
	.mine-log .mine-info .mine-to-log{
		margin-left: 0.133333rem;
	}
	/*我的收藏样式*/
	.mine-collection{
		height: 0.866667rem;
		display: flex;
		background-color: #fff;
	}
	.mine-collection li{
		float: left;
		flex: 1;
		text-align: center;
		font-size: 0.186667rem;
	}
	.mine-collection li span{
		font-size: 0.24rem;
		display: block;
		width: 100%;
		height: 0.466667rem;
		line-height: 0.466667rem;
	}
	/*中间部分样式*/
	section{
		margin-top: 0.133333rem;
		background-color: #fff;
		padding: 0 0.133333rem;
	}
	section h3{
		padding-left: 0.133333rem;
		position: relative;
		line-height: 0.6rem;
		height: 0.6rem;
		font-size: 0.213333rem;
		border-bottom: 1px solid #eee;
	}
	section .mine-all-orders{
		display: block;
		height: 0.6rem;
		font-size: 0.186667rem;
		position: absolute;
		right: 0.133333rem;
		top:0;
	}
	section .mine-all-orders i{
		font-size: 0.226667rem;
	}
	section .section-box{
		display: flex;
		height: 0.933333rem;
	}
	section .section-box li{
		float: left;
		flex: 1;
		text-align: center;
		font-size: 0.186667rem;
	}
	section .section-box li span{
		height: 0.6rem;
		line-height: 0.666667rem;
		font-size: 0.333333rem;
		font-weight: bold;
		color:#666;
		display: block;
		width: 100%;
	}
	.mine-option{
		padding: 0;
		height: 1.333333rem;
	}
	.mine-option ul{
		height: 100%;
		overflow: hidden;
	}
	/*个人选项样式*/
	.mine-option ul li{
		float: left;
		width: 25%;
		text-align: center;
		border-right: 0.013333rem solid #eee;
		border-bottom: 0.013333rem solid #eee;
		height: 100%;
	}
	.mine-option ul li span{
		font-weight: bold;
		display: block;
		height: 0.933333rem;
		line-height: 1.066667rem;
		font-size: 0.4rem;
	}
	.mine-userinfo{
		color: #8897c4;
	}
	.mine-bought{
		color: #1bc0af;
	}
	.mine-bonus{
		color:#fddc83;
	}
	.mine-help{
		color:#8fd6ad;
	}
</style>