<template>
	<div class="seckill" data-layout="0" data-typeid="6" data-title="飞牛秒杀">

		<div class="ms_bk_ty01" id="J_seckill" data-position="5_2_1">
			<div class="ms_title J_ms_title">
				<div class="logo1">
					<img src="//member-fnapp.feiniu.com/images/home_icon/kill_icon_2x.png">
				</div>
				<div class="place">
					<h4>21点场</h4>
				</div>
				<div class="ms_time">
					<div class="time_span" id="J_time" data-countdown="-42768">
						<span>{{hour}}</span>
						<span>{{minute}}</span>
						<span>{{second}}</span>
					</div>
				</div>
				<div class="one_rush">
					<p>查看更多</p>
					<img src="//mstatic01.fn-mart.com/static/img/v2/index/seckill_more.png">
				</div>

			</div>

			<div class="ms_list_info">
				<swiper :options="seckill_swiperOption" ref="mySwiper">
					<!-- slides -->
					<swiper-slide v-for="(slide,index) in seckill_data" :key="index">
						<a :href='"#/detail/detailInfo?id="+slide.id'>
							<img :src="slide.goods_img" alt="" />
							<p><span>￥</span>{{slide.goods_price_now}}<span>.9</span></p>
							<s>￥{{slide.goods_price_original}}</s>
						</a>
					</swiper-slide>
				</swiper>

			</div>

		</div>

	</div>
	</div>
</template>

<script>
	export default {

		data() {
			return {
				seckill_swiperOption: {
					initialSlide: 1,
					loop: false,
					freeMode: true,
					width:100,
					calculateHeight : true,
					observer:true,//修改swiper自己或子元素时，自动初始化swiper
    				observeParents:true,//修改swiper的父元素时，自动初始化swiper
    				speed:1000,
				},
				swiperSlides: [],
				hour: 3,
				minute: '00',
				second: '00',
				seckill_data: []
			}

		},
		computed: {
			
		},
		mounted() {;

			this.times();

			var clock = 1;
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if(xhr.readyState === 4 && xhr.status === 200) {
					var bannerArr = [];
					for(var i = 20;i < 35;i++){
						bannerArr.push(JSON.parse(xhr.responseText).RECORDS[i]);
					}
					this.seckill_data = bannerArr;
				}
			}.bind(this);
			xhr.open('GET', './json/goods_list.json', true);
			xhr.send();

		},
		methods: {
			times() {
				var now = new Date();
				var self = this;
				var hours = 2;
				var seconds = 59;
				var minutes = 59;

				self.hour = hours;
				setInterval(function() {

					if(seconds === 0) {
						seconds = 60;
						minutes--;
					}
					if(minutes === 0) {
						minutes = 60;
						self.minute = '00';
						self.hours = --hours;
					}
					if(hours === 0) {
						hours = 0
					}
					if(hours === 0 && minutes === 0 && seconds === 0) {
						alert('秒杀结束')
					}
					self.second = --seconds;
					self.second = seconds < 10 ? '0' + seconds : seconds;
					self.minute = minutes;
					self.minute = minutes < 10 ? '0' + minutes : minutes;
				}, 1000)

			},
		},

	}
</script>

<style scoped>
	.seckill {
		height: 2.733333rem;
		overflow-y: hidden;
	}
	
	#J_seckill {
		font-size: 0.186666rem;
		width: 100%;
		overflow: hidden;
		background: #fff;
		padding-top: 0.066666rem;
		box-sizing: border-box;
		position: relative;
	}
	
	#J_seckill .J_ms_title {
		height: 0.4rem;
		width: 100%;
	}
	
	.J_ms_title>div {
		float: left;
		height: 100%;
	}
	
	.J_ms_title .logo1 {
		width: 0.533333rem;
		margin: 0.04rem 0.133333rem;
	}
	
	.J_ms_title .logo1 img {
		width: 100%;
	}
	
	.place,
	.ms_time {
		margin: 0 0.066666rem;
	}
	
	.place {
		height: 0.266666rem;
	}
	
	.time_span span {
		display: block;
		width: 0.266666rem;
		height: 0.266666rem;
		border: 0.013333rem solid #999;
		text-align: center;
		line-height: 0.266666rem;
		float: left;
		border-radius: 0.026666rem;
	}
	
	.one_rush p,
	.one_rush img {
		float: left;
	}
	
	.one_rush {
		margin-left: 1.2rem;
	}
	
	.one_rush img {
		height: 50%;
		margin-top: 0.04rem;
		margin-left: 0.04rem
	}
	
	.ms_list_info a {
		width: 1.333333rem;
		float: left;
		padding: 0 0.066666rem;
	}
	
	.ms_list_info a p {
		font-size: 0.213333rem;
		color: #d7063b;
		margin-left: 0.066666rem;
	}
	
	.ms_list_info a p span {
		font-size: 0.16rem;
	}
	
	.ms_list_info a s {
		font-size: 0.186666rem;
		color: #999;
		margin-left: 0.066666rem;
	}
	
	.ms_list_info a img {
		width: 100%;
	}
	.seckill .swiper-container {
		width: 100%;
	}
</style>