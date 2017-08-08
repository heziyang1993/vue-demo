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
				<h3 class="title">孕婴奶粉<i class="icon iconfont icon-xiayibu"></i></h3>
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
					classify:"1段",
					imgurl:"../images/1d.png",
					title:"1段"
				},{
					classify:"2段",
					imgurl:"../images/2d.png",
					title:"2段"
				},{
					classify:"3段",
					imgurl:"../images/3d.png",
					title:"3段"
				},{
					classify:"4段",
					imgurl:"../images/4d.png",
					title:"4段"
				},{
					classify:"5段",
					imgurl:"../images/5d.png",
					title:"5段"
				},{
					classify:"羊奶粉",
					imgurl:"../images/yn.png",
					title:"羊奶粉"
				},{
					classify:"孕妈妈奶粉",
					imgurl:"../images/ymf.png",
					title:"孕妈妈奶粉"
				},{
					classify:"特殊奶粉",
					imgurl:"../images/ts.png",
					title:"特殊奶粉"
				}],
				imgs: [{
					id: 1,
					src:"../images/classify08.jpg"
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
					src:"../images/classify07.jpg"
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