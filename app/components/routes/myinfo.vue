<template>
	<div class="myinfo-container">
		<header class="myinfo-header">
			<span class="back iconfont icon-fanhui1" @click="goBack">
			</span>
			<h1>
				个人信息
			</h1>
		</header>
		<mu-list class="info-list">
			<mu-list-item title="用户名" :describeText="username">
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="昵称">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="性别">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
		</mu-list>
		<mu-list class="info-address">
			<a href="#/myaddress">
				<mu-list-item title="收货地址管理">
					<mu-icon slot="right" value="chevron_right"/>
				</mu-list-item>
				<mu-divider/>
			</a>
			<mu-list-item title="增票资质管理">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
		</mu-list>
		<mu-list class="info-phonenum">
			<mu-list-item title="绑定手机" describeText="18********67">
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="登录密码" describeText="修改登录密码">
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="支付密码" describeText="设置支付密码">
			</mu-list-item>
		</mu-list>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				username:""
			}
		},
		methods:{
			goBack(){
				location.href = "#/mine";
			}
		},
		mounted(){
			var str = document.cookie;
			var arr = str.split("; ");
			arr.forEach((item)=>{
				var arr2 = item.split("=");
				if(arr2[0] == "username"){
					this.username = arr2[1];
				}
			})
		}
	}
</script>
<style scoped>
	.myinfo-container{
		width: 100%;
		height: 100%;
		font-size: 0.186667rem;
		background-color: #f9f9f9;
	}
	/*头部样式*/
	.myinfo-header{
		height: 0.6rem;
		position: relative;
		border-bottom: 1px solid #ddd;
	}
	.myinfo-header .back{
		position: absolute;
		display: block;
		height: 0.6rem;
		width: 0.6rem;
		font-size: 0.333333rem;
		text-align: center;
		line-height: 0.6rem;
		font-weight: bold;
	}
	.myinfo-header h1{
		margin: 0;
		height: 0.6rem;
		font-size: 0.24rem;
		line-height: 0.6rem;
		text-align: center;
	}
	.myinfo-header .to-reg{
		font-size: 0.213333rem;
		position: absolute;
		right: 0.2rem;
		top: 0;
		height: 0.6rem;
		line-height: 0.6rem;
	}
	/*列表样式*/
	.info-list,.info-address,.info-phonenum{
		background-color:#fff;
	}
	.info-address,.info-phonenum{
		margin-top: 0.2rem;
	}
</style>