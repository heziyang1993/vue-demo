<template>
	<div class="log-container">
		<header class="log-header">
			<span class="back iconfont icon-fanhui1" @click="goBack">
				
			</span>
			<h1>
				账号密码登录
			</h1>
			<span class="to-reg">
				<a href="#/register">立即注册</a>
			</span>
		</header>
		<!-- tab标签切换 -->
		<mu-tabs :value="activeTab" @change="handleTabChange" class="log-tab">
    		<mu-tab value="psw" title="账号密码登录" class="log-psw"/>
    		<mu-tab value="phone" title="手机验证登录" class="log-phone"/>
    	</mu-tabs>
    	<!-- 账号密码登录 -->
    	<div class="log-psw-wrap" v-if="activeTab === 'psw'">
			<form action="" id="user-psw">
				<ul>
					<li class="user-li">
						<span>账号：</span><input type="text" placeholder="请输入用户名/邮箱/手机号" v-model="username">
					</li>
					<li class="psw-li">
						<span>密码：</span><input type="password" placeholder="请输入密码" v-model="password">
					</li>
				</ul>
			</form>
			<div class="log-err" v-show="isShowErr">
				<p v-text="errInfo"></p>
			</div>
			<div class="log-btn-box">
				<p class="log-btn" @click="log" :class="{'active':isLogBtnActive}">登 录</p>
			</div>
			<div class="log-forget">
				<a href="javascript:void(0);">忘记密码</a>
			</div>
		</div>
		<!-- 手机验证登录 -->
		<div class="log-phone-wrap" v-if="activeTab === 'phone'">
			<form action="" id="user-phone">
				<ul>
					<li class="user-li">
						<span>手机号：</span><input type="text" placeholder="请输入用户名/邮箱/手机号"><span class="get-code">获取验证码</span>
					</li>
					<li class="psw-li">
						<span>验证码：</span><input type="password" placeholder="请输入密码">
					</li>
				</ul>
			</form>
			<div class="log-btn-box">
				<p class="log-btn">登 录</p>
			</div>
			<div class="log-user-remind">
				<p>注册/登录代表您已同意<a href="javascript:void(0);" class="log-agreement">《飞牛网服务协议》</a></p>
			</div>
		</div>
		<!-- 登录成功提示 -->
		<mu-dialog :open="dialog" title="系统提示">
		    登录成功
		    <mu-flat-button class="success-tips" label="确定" slot="actions" primary @click="close"/>
		</mu-dialog>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				activeTab: "psw",
				username:"",
				password:"",
				isShowErr:false,
				errInfo:"",
				dialog: false
			}
		},
		methods:{
			handleTabChange (val) {
		        this.activeTab = val
		    },
			changeTab(str){
				this.logTab = str;
			},
			goBack(){
				this.$router.back();
			},
			//登录方法
			log(){
				this.$ajax.get("./json/user_info.json").then((data)=>{
					var has = false;
					//判断用户名是否存在
					for(var item of data.data.RECORDS){
						if(item.username == this.username){
							has = true;
						}
					}
					//如存在则判断密码是否正确
					if(has){
						for(var item of data.data.RECORDS){
							if(item.username == this.username){
								if(item.password == this.password){
									//如验证成功则添加入cookie、7天免登陆
									this.dialog = true;
									var now = new Date();
									now.setDate(now.getDate() + 7);
									document.cookie = "username=" + this.username + ";expires=" + now;
									window.localStorage.setItem("username",this.username);
									break
								}else{
									this.isShowErr = true;
									this.errInfo = "密码错误";
								}
							}
						}
					}else{
						this.isShowErr = true;
						this.errInfo = "用户名不存在";
					}
				},(err)=>{
					console.log(err);
				})
			},
			//关闭提示窗口并跳转
			close(){
				this.dialog = false;
				location.href = "#/index/home";
			}
		},
		computed:{
			isLogBtnActive(){
				if(this.username && this.password){
					return true;
				}else{
					return false;
				}
			}
		}
	}
</script>
<style>
	.log-container{
		width: 100%;
		height: 100%;
		font-size: 0.186667rem;
		background-color: #fff;
	}
	/*头部样式*/
	.log-header{
		height: 0.6rem;
		position: relative;
		border-bottom: 1px solid #ddd;
	}
	.log-header .back{
		position: absolute;
		display: block;
		height: 0.6rem;
		width: 0.6rem;
		font-size: 0.333333rem;
		text-align: center;
		line-height: 0.6rem;
		font-weight: bold;
	}
	.log-header h1{
		margin: 0;
		height: 0.6rem;
		font-size: 0.24rem;
		line-height: 0.6rem;
		text-align: center;
	}
	.log-header .to-reg{
		font-size: 0.213333rem;
		position: absolute;
		right: 0.2rem;
		top: 0;
		height: 0.6rem;
		line-height: 0.6rem;
	}
	/*tab样式*/
	.log-tab{
		height: 0.6rem;
		display: flex;
		border-bottom: 0.013333rem solid #ddd;
		background-color: #fff;
	}
	.log-tab .log-psw,.log-tab .log-phone{
		font-size: 0.213333rem;
		display: block;
		float: left;
		flex: 1;
		line-height: 0.56rem;
		text-align: center;
		color:#333;
		height: 100%;
	}
	/*登录样式*/
	#user-psw,#user-phone{
		height: 1.28rem;
	}
	#user-psw ul,#user-phone ul{
		height: 100%;
	}
	#user-psw ul li,#user-phone ul li{
		height: 0.64rem;
		line-height: 0.373333rem;
		padding: 0.133333rem;
		font-size: 0.213333rem;
		border-bottom: 0.013333rem solid #ddd;
	}
	#user-psw ul li span,#user-phone ul li span{
		display: block;
		float: left;
		margin-right: 0.133333rem;
	}
	#user-psw ul li input,#user-phone ul li input{
		display: block;
		float: left;
		border: 0;
		outline-style: none;
	}
	/*获取验证码*/
	#user-phone ul li .get-code{
		display: block;
		float: right;
		margin: 0;
		border-left: 0.013333rem solid #ddd;
		padding-left: 0.066667rem;
		color: #d7063b;
	}
	/*错误提示*/
	.log-err{
		padding: 0 0.16rem;
		padding-top: 0.16rem;
		font-size: 0.186667rem;
		color:red;
	}
	/*登录按钮*/
	.log-btn-box{
		height: 0.906667rem;
		padding: 0.16rem;
	}
	.log-btn-box .log-btn{
		height: 0.586667rem;
		background-color: rgb(222, 222, 222);
		font-size: 0.24rem;
		line-height: 0.586667rem;
		text-align: center;
		color:#fff;
		border-radius: 0.053333rem;
	}
	.log-btn-box .log-btn.active{
		background-color: #d7063b;
	}
	/*忘记密码*/
	.log-forget{
		text-align: right;
		padding: 0.16rem;
	}
	.log-forget a{
		color:#666;
	}
	/*服务协议*/
	.log-user-remind{
		padding: 0 0.16rem;
		font-size: 0.186667rem;
		color:#999;
	}
	.log-user-remind .log-agreement{
		color:#007aff!important;
	}
	/*成功提示*/
	.success-tips{
		font-size: 0.24rem;
		color:#d7063b;
	}
</style>