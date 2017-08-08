<template>
	<div class="myaddress-container">
		<header class="myaddress-header">
			<span class="back iconfont icon-fanhui1" @click="goBack">
			</span>
			<h1>
				曾经购买
			</h1>
		</header>
		<div class="myaddress-box">
			<div class="no-goods-list">
				<img src="../../images/address.png" alt="">
				<p>暂无数据</br>您可以到其他页面逛逛</p>
				<a href="#/addaddress">逛逛秒杀</a>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		methods:{
			goBack(){
				history.back();
			}
		}
	}
</script>
<style scoped>
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
	.no-goods-list,.no-shops-list{
		padding-top: 2rem;
	}
	.no-goods-list img,.no-shops-list img{
		width: 1.4rem;
		height: 1.4rem;
		margin: 0 auto;
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
</style>