<template>
	<div class="reg-container">
		<!-- 头部 -->
		<header class="reg-header">
			<span class="back iconfont icon-fanhui1" @click="goBack">
				
			</span>
			<h1>
				注册
			</h1>
		</header>
		<!-- 账号密码登录 -->
    	<div class="reg-psw-wrap">
			<form action="" id="user-info">
				<ul>
					<li class="user-li">
						<span>账号：</span><input type="text" placeholder="请输入账号" @keyup="test" v-model="username">
					</li>
					<li class="psw-li">
						<span>密码：</span><input type="password" placeholder="请输入密码" v-model="password" @keyup="test">
					</li>
				</ul>
			</form>
			<div class="reg-err" v-show="isShowErr">
				<p v-text="errInfo"></p>
			</div>
			<div class="reg-btn-box">
				<p class="reg-btn" :class="{'active':isRegBtnActive}" @click="reg">注 册</p>
			</div>
			<div class="reg-user-remind">
				<p>注册代表您已同意<a href="javascript:void(0);" class="reg-agreement">《飞牛网服务协议》</a></p>
			</div>
			<!-- 注册成功提示 -->
			<mu-dialog :open="dialog" title="系统提示">
			    注册成功
			    <mu-flat-button class="success-tips" label="确定" slot="actions" primary @click="close"/>
			</mu-dialog>
		</div>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {
				username:"",
				password:"",
				isShowErr:false,
				errInfo:"",
				isRegBtnActive:false,
				dialog:false
			}
		},
		methods:{
			goBack(){
				this.$router.back();
			},
			//对输入的信息进行判断
			test(){
				//当用户名及密码都为空时不显示错误信息
				if(this.username == "" && this.password == ""){
					this.errInfo = "";
					this.isShowErr = false;
					this.isRegBtnActive = false;
					return
				//判断用户名
				}else if(this.username && !/^[a-z]/.test(this.username)){
					this.errInfo = "用户名请以字母开头";
					this.isShowErr = true;
					this.isRegBtnActive = false;
					return
				}else if(this.username && !/\w{6,20}/.test(this.username)){
					this.errInfo = "用户名的长度为6~20位";
					this.isShowErr = true;
					this.isRegBtnActive = false;
					return
				}else if(this.username && !this.password){
					this.errInfo = "";
					this.isShowErr = false;
					this.isRegBtnActive = false;
					return
				//判断密码
				}else if(this.password && !/\w{6,20}/.test(this.password)){
					this.errInfo = "密码的长度为6~20位";
					this.isShowErr = true;
					this.isRegBtnActive = false;
					return
				}else if(this.password && !this.username){
					this.errInfo = "";
					this.isShowErr = false;
					this.isRegBtnActive = false;
					return
				}else if(this.password && this.username){
					//判断用户名是否存在
					this.$ajax.get("./json/user_info.json").then((data)=>{
						var self = this;
						for(var item of data.data.RECORDS){
							if(item.username == self.username){
								self.isShowErr = true;
								self.errInfo = "用户名已存在";
								self.isRegBtnActive = false;
								break
							}else{
								self.errInfo = "";
								self.isShowErr = false;
								self.isRegBtnActive = true;
							}
						}
					},(err)=>{
						console.log(err);
					})
				}
			},
			//连接后台进行注册
			reg(){
				if(this.isRegBtnActive){
					this.dialog = true;
				}
			},
			//注册成功跳转至首页、添加用户信息至cookie
			close(){
				this.dialog = false;
				window.localStorage.setItem("username",this.username);
				location.href = "#/index/home";
				this.dialog = true;
				var now = new Date();
				now.setDate(now.getDate() + 7);
				document.cookie = "username=" + this.username + ";expires=" + now;
			}
		}
	}
</script>
<style>
	.reg-container{
		font-size: 0.186667rem;
		width: 100%;
		height: 100%;
		background-color: #fff;
	}
	/*头部样式*/
	.reg-header{
		height: 0.6rem;
		position: relative;
		border-bottom: 1px solid #ddd;
	}
	.reg-header .back{
		position: absolute;
		display: block;
		height: 0.6rem;
		width: 0.6rem;
		font-size: 0.333333rem;
		text-align: center;
		line-height: 0.6rem;
		font-weight: bold;
	}
	.reg-header h1{
		margin: 0;
		height: 0.6rem;
		font-size: 0.24rem;
		line-height: 0.6rem;
		text-align: center;
	}
	/*输入样式*/
	#user-info,#user-phone{
		height: 1.28rem;
	}
	#user-info ul,#user-phone ul{
		height: 100%;
	}
	#user-info ul li,#user-phone ul li{
		height: 0.64rem;
		line-height: 0.373333rem;
		padding: 0.133333rem;
		font-size: 0.213333rem;
		border-bottom: 0.013333rem solid #ddd;
	}
	#user-info ul li span,#user-phone ul li span{
		display: block;
		float: left;
		margin-right: 0.133333rem;
	}
	#user-info ul li input{
		display: block;
		float: left;
		border: 0;
		outline-style: none;
	}
	/*错误提示*/
	.reg-err{
		padding: 0 0.16rem;
		padding-top: 0.16rem;
		font-size: 0.186667rem;
		color:red;
	}
	/*登录按钮*/
	.reg-btn-box{
		height: 0.906667rem;
		padding: 0.16rem;
	}
	.reg-btn-box .reg-btn{
		height: 0.586667rem;
		background-color: rgb(222, 222, 222);
		font-size: 0.24rem;
		line-height: 0.586667rem;
		text-align: center;
		color:#fff;
		border-radius: 0.053333rem;
	}
	.reg-btn-box .reg-btn.active{
		background-color: #d7063b;
	}
	/*服务协议*/
	.reg-user-remind{
		padding: 0 0.16rem;
		font-size: 0.186667rem;
		color:#999;
	}
	.reg-user-remind .reg-agreement{
		color:#007aff!important;
	}
	/*成功提示*/
	.success-tips{
		font-size: 0.24rem;
		color:#d7063b;
	}
</style>