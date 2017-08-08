<template>
	<div class="myaddress-container">
		<header class="myaddress-header">
			<span class="back iconfont icon-fanhui1" @click="goBack">
			</span>
			<h1>
				管理收货地址
			</h1>
		</header>
		<div class="myaddress-box">
			<div class="myaddress-list">
				<mu-list>
					<mu-list-item v-for="(address,index) in addressArr" :key="index" :title="address.name" :describeText="address.area">
						<mu-icon value="location_on" color="red600" :size="36" slot="left"/>
						<mu-icon value="delete" slot="right" @click="deleteAddress(index)"/>
					</mu-list-item>
				</mu-list>
			</div>
			<div class="no-address-list" v-show="isNoAddress">
				<img src="../../images/address.png" alt="">
				<p>您还没有收货地址哦~</p>
			</div>
			<a href="#/addaddress" class="addaddress-btn">新建地址+</a>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				isNoAddress:true,
				username:"",
				addressArr:[],
			}
		},
		methods:{
			//返回
			goBack(){
				location.href = "#/myinfo"
			},
			//删除地址
			deleteAddress(idx){
				
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
			})
			//根据用户名获取地址信息
			this.$ajax.get("./json/user_info.json").then((data)=>{
				var self = this;
				for(var item of data.data.RECORDS){
					if(self.username == item.username){
						self.addressArr = JSON.parse(item.address);
					}
				}
				if(this.addressArr.length != 0){
					this.isNoAddress = false;
				}
			},(err)=>{
				console.log(err);
			})
		}
	}
</script>
<style scoped>
	body{
		background-color: #f9f9f9;
	}
	.myaddress-container{
		width: 100%;
		height: 100%;
		font-size: 0.186667rem;
		background-color: #f9f9f9;
	}
	/*头部样式*/
	.myaddress-header{
		height: 0.6rem;
		position: relative;
		border-bottom: 1px solid #ddd;
	}
	.myaddress-header .back{
		position: absolute;
		display: block;
		height: 0.6rem;
		width: 0.6rem;
		font-size: 0.333333rem;
		text-align: center;
		line-height: 0.6rem;
		font-weight: bold;
	}
	.myaddress-header h1{
		margin: 0;
		height: 0.6rem;
		font-size: 0.24rem;
		line-height: 0.6rem;
		text-align: center;
	}
	/*无列表信息图片*/
	.no-address-list{
		padding-top: 2rem;
	}
	.no-address-list img{
		width: 1.4rem;
		height: 1.4rem;
		margin: 0 auto;
	}
	.no-address-list p{
		padding: 0.4rem 0;
		font-size: 0.24rem;
		text-align: center;
		color:#6c6c6c;
	}
	.addaddress-btn{
		display: block;
		height: 0.533333rem;
		font-size: 0.24rem;
		line-height:0.533333rem;
		margin: 0.2rem 0.133333rem;
		text-align: center;
		color:#FFF;
		background-color: #d7063b;
	}
</style>