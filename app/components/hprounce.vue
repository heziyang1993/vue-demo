<template>
	<div class="ind_box relative new no_blank" data-layout="0" data-typeid="10" data-title="飞牛快报">

		<div class="nav_broadcast_hot">
			<div class="broadcast_hot new">
				<div class="b_img">
					<img src="//img02.fn-mart.com/C/web/layout/kk/20160318/201603181559551458287995_kk-1_org_q75.png" class="m_img_0">
				</div>
				<div class="broadcast_icon_div">
					<i class="iconfont icon-laba" style="font-size:20px"></i>
				</div>

				<div class="broadcast_item">
					<div style="height: 100%;" class="circle">
						<div v-for="ele in content" class="broadcast_item_container">
							<a class="J_broadcast_a" href="javascript:void(0)" data-pos="4_1_3" data-order="3" data-fnlink="//sale.feiniu.com/m-72387/touch/CS000026" data-href="//sale.feiniu.com/m-72387/touch/CS000026">
								<strong>{{ele}}</strong>
							</a>
						</div>
					</div>

					<!--<div v-for="ele in content" class="broadcast_item_container">
						<a class="J_broadcast_a" href="javascript:void(0)" data-pos="4_1_3" data-order="3" data-fnlink="//sale.feiniu.com/m-72387/touch/CS000026" data-href="//sale.feiniu.com/m-72387/touch/CS000026">
							<strong>{{ele}}</strong>
						</a>
					</div>
					<div v-for="ele in content" class="broadcast_item_container">
						<a class="J_broadcast_a" href="javascript:void(0)" data-pos="4_1_3" data-order="3" data-fnlink="//sale.feiniu.com/m-72387/touch/CS000026" data-href="//sale.feiniu.com/m-72387/touch/CS000026">
							<strong>{{ele}}</strong>
						</a>
					</div>-->

				</div>

			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				content: ['酒水饮料 低至买2免1', '浙商联名卡超99随机减50~99', '家电放暑假 小家电满300减60']
			}
		},
		methods: {

		},
		mounted() {
			
				var bro = document.getElementsByClassName('broadcast_item')[0];
				var circle = document.getElementsByClassName('circle')[0];
				var broadcast_item_container = document.getElementsByClassName('broadcast_item_container')[0];
				var i = 0;
				var timer;
				var bros = broadcast_item_container.cloneNode(true);
				circle.appendChild(bros);
				setInterval(function() {
					i++;
					if(i >= 4) {
						i = 1;
						bro.style.top = 0;
					}
					var target = -(bro.clientHeight) * i;
					clearInterval(timer)
					timer = setInterval(function() {
						var speed = (target - bro.offsetTop) / 5;

						speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
						if(speed === 0) {
							clearInterval(timer)
						}
						bro.style.top = bro.offsetTop + speed + 'px';
					}, 30)

				}, 3000)
			

		}
	}
</script>

<style scoped>
	.ind_box {
		width: 100%;
		height: 0.466666rem;
		position: relative;
		box-sizing: border-box;
		overflow: hidden;
		background: #fff;
		margin-bottom: 0.133333rem;
	}
	
	.ind_box .m_img_0 {
		width: 0.826666rem;
	}
	
	.broadcast_icon_div,
	.broadcast_item {
		position: absolute;
	}
	
	.nav_broadcast_hot {
		height: 100%;
	}
	
	.broadcast_icon_div {
		left: 0.933333rem;
		top: 0.04rem;
		height: 0;
		font-size: 0.266666rem;
		color: rgb(219, 56, 76);
	}
	
	.broadcast_item {
		color: #db384c;
		font-size: 0.213333rem;
		left: 1.333333rem;
		top: 0;
		height: 100%;
		width: 100%;

		z-index: 10;
	}
	
	.broadcast_item_container {
		overflow: hidden;
		height: 100%;
		overflow: hidden;
	}
	
	.broadcast_item_container a {
		height: 100%;
		line-height: 2.5;
		color: rgb(219, 56, 76);
	}
</style>