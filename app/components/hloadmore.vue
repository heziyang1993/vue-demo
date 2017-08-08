<template>
	<div class="loadmore_foot">
		<p class="loading_btm" v-show=bool><b></b><i>正在努力加载...</i></p>
		<p v-show=bools>我是有底线哒~~</p>
		<div class="bottom_line" v-show=bools></div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				bool: false,
				bools: false
			}
		},
		computed: {

		},
		mounted() {
			var self = this;
			var page = 2;
			document.body.onscroll = function(e) {
				if(e.target.scrollingElement.scrollTop >= 200){
					self.$store.dispatch('isActives');
				}else{
					self.$store.dispatch('isNotActives');
				}
				
				if(e.target.scrollingElement.scrollTop + window.innerHeight >= e.target.scrollingElement.scrollHeight) {
					self.bool = true;
					var xhr = new XMLHttpRequest();
					xhr.onreadystatechange = function() {
						if(xhr.readyState === 4 && xhr.status === 200) {
							if(page >= 5) {
								self.bool = false;
								self.bools = true;
								return 
							}
							page++;
							var bannerArr = [];
							for(var i = 20;i < 35 + (page*5);i++){
								bannerArr.push(JSON.parse(xhr.responseText).RECORDS[i]);
							}
							self.$store.dispatch('promotion_goods_l', bannerArr)
							self.bool = false;
						}
					}
					xhr.open('GET', './json/goods_list.json' , true);
					xhr.send();

				}
			}
		}
	}
</script>

<style scoped>
	.loadmore_foot {
		height: 0.4rem;
		font-size: 0.213333rem;
		padding: 0.133333rem 0;
		margin-bottom: 0.133333rem;
	}
	.loadmore_foot p {
		text-align: center;
		border-bottom: 0.013333rem solid #eee;
		color: #999;
	}
	.bottom_line {
		width: 75%;
		height: 0.013333rem;
		background :#999;
		margin: 0 auto;
	}

</style>