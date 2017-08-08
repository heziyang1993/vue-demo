<template>
	<div class="banner-top">
		<swiper :options="opt">
			<swiper-slide v-for="(slide,index) in swiperTop" :key="index">
				<img :src="slide.goods_img" />
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>

</template>

<script>
	export default {
		computed: {
			opt() {
				return this.$store.state.swiperOption;
			},
			swiperTop() {
				return this.$store.state.swiperSlides;
			}
		},
		mounted() {
			setInterval(() => {
				let swiperSlides = this.$store.state.swiperSlides;
				if(swiperSlides.length < 5) swiperSlides.push(swiperSlides.length + 1)
			}, 3000);

			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if(xhr.readyState === 4 && xhr.status === 200) {
					var bannerArr = [];
					for(var i = 0;i < 5;i++){
						bannerArr.push(JSON.parse(xhr.responseText).RECORDS[i]);
					}
					this.$store.dispatch('swiperTop', bannerArr)

				}
			}.bind(this);
			xhr.open('GET', './json/goods_index.json', true);
			xhr.send();
		}
	}
</script>
<style scoped>
	.banner-top {
		overflow: hidden;
		width: 100%;
		height: 2.32rem;
	}
	
	.banner-top img {
		width: 100%;
		height: 100%;
	}
	.swiper-pagination {
		bottom: -0.4rem;
	}

</style>