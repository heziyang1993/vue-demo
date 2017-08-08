<template>
	<div class="myhistory-container">
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
	</div>
</template>
<script>
	export default{
		methods:{
			 //返回
		    goBack(){
		    	history.back();
		    }
		}
	}
</script>
<style scoped>
	.myhistory-container{
		width: 100%;
		height: 100%;
		font-size: 0.186667rem;
		background-color: #f9f9f9;
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
</style>