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
				<h3 class="title">床上用品<i class="icon iconfont icon-xiayibu"></i></h3>
				<ul class="clearfix">
					<li v-for="n in fruit">
						<a href="javascript:void(0);">
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
				fruit:[{
					classify:"凉席",
					imgurl:"../images/lx.png",
					title:"凉席"
				},{
					classify:"夏凉被空调被",
					imgurl:"../images/ktb.png",
					title:"夏凉被空调被"
				},{
					classify:"蚊帐",
					imgurl:"../images/wz.png",
					title:"蚊帐"
				},{
					classify:"被子",
					imgurl:"../images/bz.png",
					title:"被子"
				},{
					classify:"床品套件",
					imgurl:"../images/cptj.png",
					title:"床品套件"
				},{
					classify:"四件套",
					imgurl:"../images/sjt.png",
					title:"四件套"
				},{
					classify:"床垫/被褥",
					imgurl:"../images/br.png",
					title:"床垫/被褥"
				},{
					classify:"枕头/枕芯",
					imgurl:"../images/zt.png",
					title:"枕头/枕芯"
				},{
					classify:"春秋被",
					imgurl:"../images/cqb.png",
					title:"春秋被"
				}],
				imgs: [{
					id: 1,
					src:"../images/classify07.jpg"
				}, {
					id: 2,
					src:"../images/classify01.jpg"
				}, {
					id: 3,
					src: "../images/classify02.jpg"
				}, {
					id: 4,
					src:"../images/classify03.jpg"
				}, {
					id: 5,
					src: "../images/classify04.jpg"
				}, {
					id: 6,
					src: "../images/classify05.jpg"
				}, {
					id: 7,
					src: "../images/classify06.jpg"
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