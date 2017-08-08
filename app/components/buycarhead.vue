<template>
	<div>
		<p>
			<i class="iconfont icon-fanhui1" @click="backhead"></i>
			购物车
			<span class="compile">编辑</span>
			<i class="iconfont icon-liebiao"></i>
		</p>
	</div>
</template>
<script>
	export default({
		
		methods:{
			backhead(){
    			history.back();
    		}
		}
		
	})
</script>
<style scoped>
	p{
		width: 100%;
		height: 0.666667rem;
		line-height: 0.666667rem;
		background-color: #fff;
		text-align: center;
		font-size: 0.213333rem;
		/*font-weight: bolder;*/
		position: relative;
		border-bottom: 0.013333rem solid #ddd;
	}
	.icon-fanhui1{
		font-size: 0.266667rem;
		position: absolute;
		top: 0.026667rem;
		left: 0.133333rem;
	}
	.compile{
		position: absolute;
		top: 0;
		right: 0.666667rem;
		/*left: 0;*/
	}
	.icon-liebiao{
		font-size: 0.266667rem;
		position: absolute;
		top: 0px;
		right: 0.133333rem;
	}

</style>