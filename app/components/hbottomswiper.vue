<template>
	<div class="hswiperbottom">
		<swiper :options="swiper_bannerthird">
			<swiper-slide v-for="(slide,index) in swiper_bannerthird_data" :key="index">
				<img :src="slide.goods_img" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				swiper_bannerthird: {
					autoplay: 3000,
					setWrapperSize: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					mousewheelControl: true,
					observeParents: true,
					autoplayDisableOnInteraction: false
				},
				swiper_bannerthird_data: []
			}
		},

		mounted() {
			setInterval(() => {
				let swiperSlides = this.$store.state.swiperSlides;
				if(swiperSlides.length < 3) swiperSlides.push(swiperSlides.length + 1)
			}, 3000);

			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if(xhr.readyState === 4 && xhr.status === 200) {
					var bannerArr = [];
					for(var i = 8;i < 11;i++){
						bannerArr.push(JSON.parse(xhr.responseText).RECORDS[i]);
					}
					this.swiper_bannerthird_data = bannerArr;

				}
			}.bind(this);
			xhr.open('GET', './json/goods_index.json', true);
			xhr.send();
		}
	}
</script>
<style scoped>
	.hswiperbottom{
		padding-top: 0.066666rem;
	}
	.hswiperbottom .swiper-container {

		height: 1.333333rem;
	}
	
	.hswiperbottom .swiper-wrapper {

		height: 1.333333rem;
	}
	
	.hswiperbottom .swiper-container img {
		width: 100%;
		height: 100%;
	}
	.swiper-pagination {
		bottom: -0.48rem;
	}

</style>