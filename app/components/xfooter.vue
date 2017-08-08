<template>
	<div id="footNavOutBox">
		<div class="foot_nav" id="footNav">
			<ul class="clearfix foot_ul_number_5">
				<li data-pressed="//img02.fn-mart.com/pic/6b8e133d8a9b25f9ee6c/h28z22sT_nLdhlugOT/79eyoGcajijYfG/CsmRsVkcAdmAUAlsAABAESUnFkk651_org_q75s500.png">
					<a href="#/index/home" rel="nofollow" data-href="//m.feiniu.com/" data-ind="1" class="J_nav_button">
						<p class="iconfont icon-iconfontshouye" :class = "{actives:page===1}" @click="change(1)"></p>
						<p>首页</p>
					</a>
				</li>
				<li data-pressed="//img02.fn-mart.com/pic/725d133d8a9a25f7df92/h26n22sT_2tMKludjn/1ioRmycaXi39LG/CsmRslkcAeWAShP9AAA-IntDHqM960_org_q75s500.png">
					<a href="#/classify/list/whotclassify" rel="nofollow" data-href="//m.feiniu.com/category/all.html" data-ind="2" class="J_nav_button"> 
						<p class="iconfont icon-shangpinfenlei" :class = "{actives:page===2}" @click="change(2)"></p>
						<p>商品分类</p>
					</a>
				</li>
				<li data-pressed="//img03.fn-mart.com/pic/5c86133d8a9c25f921ea/BTqn225nv2LgBMUM32/5iSymGEy3iXYta/CsmRslkcAfqAZW76AAA-c13PaSM387_org_q75s500.png">
					<a href="#/buycar" rel="nofollow" data-href="//buy.m.feiniu.com/cart/index" data-ind="4" class="J_nav_button"> 
						<p class="iconfont icon-gouwuche" :class = "{actives:page===3}" @click="change(3)"></p>
						<p>购物车</p>
					</a>
				</li>
				<li data-pressed="//img06.fn-mart.com/pic/ea0c133d8a9725f9c970/Kn6zTT5n_zLMBdVMXn/1YSGmyQGXijxCa/CsmRslkcAgSALhaVAAA-d-9IjEI552_org_q75s500.png">
					<a href="#/mine" rel="nofollow" data-href="https://home.m.feiniu.com/" data-ind="5" class="J_nav_button"> 
						<p class="iconfont icon-yonghu" :class = "{actives:page===4}" @click="change(4)"></p>
						<p>我的飞牛</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				page:1
			}
		},
		methods:{
			change(num){
				this.page = num;
			}
		},
		mounted(){
			var footNavOutBox = document.getElementById('footNavOutBox');
			//根据路由判断foot是否显示高亮
			var hash=window.location.hash;
			switch(hash){
				case '#/index/home':
				this.page=1;
				break;
				case '#/classify/list/whotclassify':
				this.page=2;
				break;
				case '#/buycar':
				this.page=3;
				break;
				case '#/mine':
				this.page=4;
				break;
			}
		}
	}
</script>

<style scoped>
	#footNav {
		width: 100%;
		height: 0.666666rem;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		box-sizing: border-box;
		padding-top: 0.066666rem;
		z-index: 999;
		border:1px solid #ddd
	}
	.actives {
		color:#FF5053;
	}
	.foot_ul_number_5 {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	
	.foot_ul_number_5 li {
		float: left;
		width: 1rem;
		width: 25%;
	}
	
	.foot_ul_number_5 li a {
		font-size: 0.16rem;
		text-align: center;
		width: 100%;
		color: #333;
		height: 100%;
		line-height: 1.5;
		display: block;
	}
	
	.foot_ul_number_5 li a img {
		margin: 0 auto;
		width: 0.346666rem;
		height: 0.346666rem;
	}
	.iconfont{
		font-size: 0.213333rem;
	}
</style>