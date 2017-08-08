<template>
	<div class="myaddress-container">
		<header class="myaddress-header">
			<span class="back iconfont icon-fanhui1" @click="goBack">
			</span>
			<h1>
				帮助中心
			</h1>
		</header>
		<mu-list class="info-list">
			<mu-list-item title="飞牛客服">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="常见问题">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="优惠卷说明">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="积分说明">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="会员说明">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="成长值">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="账户余额说明">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="花呗分期">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="自提说明">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="服务协议">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
			<mu-divider/>
			<mu-list-item title="防诈骗公告说明">
				<mu-icon slot="right" value="chevron_right"/>
			</mu-list-item>
		</mu-list>
		<div class="helpfoot">
			<p>Copyright © 2013-2016 飞牛网,ALL Rights Reserved.</p>
			<p>沪ICP备13025776号 营业执照</p>
		</div>
	</div>
</template>
<script>
	export default {
		
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
	.helpfoot{
		padding-top: 0.533333rem;
		text-align: center;
		padding-bottom: 0.266667rem;
		/*color: #ccc;*/
		font-size: 0.16rem;
		background-color: #ddd;
	}
</style>