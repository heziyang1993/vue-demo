<template>
	<div id="r_wrapper" class="wrapper wrapper2">
		<div class="contain">
			<div class="banner">
				<a href="#">
					<swiper :options="swiperOption" ref="mySwiper">
						<!-- slides -->
						<swiper-slide v-for="i in imgs" :key="i.id"><img :src="i.src" /></swiper-slide>
						<!-- Optional controls -->
						<div class="swiper-pagination" slot="pagination"></div>
					</swiper>
				</a>
			</div>
			<div id="listblock">
				<h3 class="title">推荐分类</h3>
				<ul class="clearfix">					
					<li v-for="n in goods">
						<a :href='"#/list?classify="+n.classify'>
							<img :src="n.imgurl" alt="">
							<p>{{n.title}}</p>
						</a>
					</li>			
				</ul>	
			</div>
		</div>			
	</div>
</template>
<script>
	import {
		swiper,
		swiperSlide
	} from 'vue-awesome-swiper';
	export default{
		data(){
			return{
				goods:[{
					classify:"洁面",
					imgurl:"../images/xians.jpg",
					title:"洁面"
				},{
					classify:"面膜",
					imgurl:"../images/mm.png",
					title:"面膜"
				},{
					classify:"防晒隔离",
					imgurl:"../images/fangsai.jpg",
					title:"防晒隔离"
				},{
					classify:"香氛精油",
					imgurl:"../images/jy.png",
					title:"香氛精油"
				},{
					classify:"沐浴露",
					imgurl:"../images/muyu.jpg",
					title:"沐浴露"
				},{
					classify:"洗发水",
					imgurl:"../images/xfs.png",
					title:"洗发水"
				},{
					classify:"女士香水",
					imgurl:"../images/xians.jpg",
					title:"女士香水"
				},{
					classify:"底妆",
					imgurl:"../images/dz.png",
					title:"底妆"
				},{
					classify:"眼妆",
					imgurl:"../images/yz.png",
					title:"眼妆"
				},],
				imgs: [{
					id: 1,
					src:"../images/classify01.jpg"
				}, {
					id: 2,
					src:"../images/classify02.jpg"
				}, {
					id: 3,
					src: "../images/classify03.jpg"
				}, {
					id: 4,
					src:"../images/classify04.jpg"
				}, {
					id: 5,
					src: "../images/classify05.jpg"
				}, {
					id: 6,
					src: "../images/classify06.jpg"
				}, {
					id: 7,
					src: "../images/classify07.jpg"
				}, {
					id: 8,
					src:"../images/classify08.jpg"
				}, {
					id: 9,
					src: "../images/classify09.jpg"
				}, {
					id: 10,
					src: "../images/classify10.jpg"
				}],
				swiperOption: {
					autoplay: 3000
				}
			}
		},
		methods:{
			
		},
		mounted(){
			}
		}
</script>
	<style scoped>
		.clearfix:after {
			clear: both;
			content: "";
			display: block;
			height: 0;
		}
		a{
			text-decoration: none;
		}
		ul li {
			list-style: none;
		}
		#r_wrapper{
			width: 100%;
			z-index: 11;
			background-color: #fff;
		}
		#r_wrapper .contain{
			padding-left:1.2rem;
			padding-right:0.133333rem; 
			padding-top: 0.133333rem;
		}
		#r_wrapper .banner a img{
			height:1.2rem;
			width: 100%; 
		}
		#listblock{
			position: relative;
			border-bottom: 0.013333rem solid #eee;
			margin:0 0.093333rem;
		}
		#listblock .title {
			font-size: 0.186667rem;
			color: #000;
			position: relative;
			line-height: 0.533333rem;
			height: 0.533333rem;
			padding-left: 0.186667rem;
		} 
		#listblock .title .icon{
			position: absolute;
			right:0.133333rem;
			font-size: 0.186667rem;
			line-height: 0.533333rem;
			height:0.533333rem;
			text-align: center;
			color:#666;
		}
		#listblock>ul li {
			float: left;
			width: 31.4%;
			margin-right: 1.4%;
			margin-bottom: 0.133333rem;
			height:1.413333rem;
		}
		#listblock>ul li a{
			display: block;
			color:#333;
		}
		#listblock>ul li p {
			font-size: 0.186667rem;
			color: #000;
			padding-top: 0.066667rem;
			padding-bottom: 0.16rem;
			width: 100%;
			text-align: center;
		}
		#listblock>ul li img{
			border:none;
			width:0.906667rem;
			height:0.906667rem;
			margin:auto;
			display: block;
		}

</style>