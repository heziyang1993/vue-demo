<template>
	<div style="background-color:#f2f2f2">
		<div class="left">
			<!-- 线和文字一起控制, 图标单独控制 S-->
			<p class="line"></p>
			<p style="color:#e73462;margin: 0 .14rem"> 促销专享 </p>
			<p class="line"></p>
			<!-- 线和文字一起控制, 图标单独控制 E-->
		</div>
		<ul class="promotion">
			<li v-for="ele in promotion_goods_p">
				<a :href='"#/detail/detailInfo?id="+ele.id' style="display: block;" :data-id="ele.id">
					<div class="rl_img">
						<img :src="ele.goods_img">
					</div>
					<div class="rl_adc">
						<div class="rc_name">{{ele.goods_name}}</div>
						<div class="rc_price">
							<p>
								￥<span class="fd_C">
							<em>{{ele.goods_price_now}}</em><b style="font-size:0.16rem;color: #d7063b;">.9</b>
						</span>
								<s>¥{{ele.goods_price_original}}</s>
							</p>

						</div>
						<div class="cart_case J_addCartBtn">
							<a class="iconfont icon-gouwuche2" href="javascript:;" @click="addCar(ele.id)"></a>
						</div>
					</div>
				</a>

			</li>
		</ul>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				//查找cookie里面的username
				username: '',
				goods_car: []
			}
		},
		mounted() {
			var self = this;
			var page = 1;
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if(xhr.readyState === 4 && xhr.status === 200) {
					var bannerArr = [];
					for(var i = 20;i < 34;i++){
						bannerArr.push(JSON.parse(xhr.responseText).RECORDS[i]);
					}
					self.$store.dispatch('promotion_goods_m', bannerArr)
				}
			}
			xhr.open('GET', './json/goods_list.json', true);
			xhr.send();
			//判断cookie是否存在username
			var cookies = document.cookie.split('; ');
			cookies.forEach(function(ele) {
				var temp = ele.split('=');
				if(temp[0] == 'username') {
					self.username = temp[1]
				}
			})
		},
computed: {
		promotion_goods_p() {
			return this.$store.state.promotion_goods;
		}
	},
	methods: {
		addCar(goods_id) {
			
			}
		}
	}
</script>

<style scoped>
	.promotion {
		overflow: hidden;
		font-size: 0.186666rem
	}
	
	.rl_adc {
		position: relative;
	}
	
	.promotion li {
		width: 50%;
		box-sizing: border-box;
		border: 1px solid #ddd;
		float: left;
		height: 4.4rem;
		background: #fff;
	}
	
	.promotion li img {
		width: 100%;
	}
	
	.rc_name {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		color: #333;
		line-height: 0.266666rem;
		height: 0.533333rem;
		padding: 0 .18rem;
		margin: 0.133333rem 0;
		text-shadow: 0.013333rem 0.013333rem 0.013333rem;
	}
	
	.rc_price {
		margin-left: 0.106666rem;
	}
	
	.rc_price .fd_C p {
		font-size: 0.213333rem;
	}
	
	.rc_price p .fd_C em {
		font-size: 0.32rem;
		color: #d7063b;
	}
	
	.rc_price s {
		margin-left: 0.213333rem;
		color: #999;
		font-size: 0.16rem;
	}
	
	.cart_case {
		position: absolute;
		right: 0.266666rem;
		bottom: 0.04rem;
		color: #d7063b;
	}
	
	.cart_case a {
		color: #d7063b;
		font-size: 0.4rem
	}
	
	.left {
		width: 100%;
		height: 0.4rem;
		padding: 0.066666rem 1rem;
	}
	
	.left p {
		font-size: 0.213333rem;
		float: left;
	}
	
	.left .line {
		height: 0.04rem;
		width: 0.88rem;
		border-top: 3px solid #e73462;
		margin-top: 0.133333rem;
	}
</style>