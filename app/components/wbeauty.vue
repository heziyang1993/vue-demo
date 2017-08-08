<template>
	<div>
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
					<h3 class="title">面部护肤
						<a href="#/list">
							<i class="icon iconfont icon-xiayibu"></i>
						</a>
					</h3>
					<ul class="clearfix">
						<li v-for="n in beautys">
							<a :href='"#/list?classify="+n.classify'>
								<img :src="n.imgurl" alt="">
								<p>{{n.title}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div id="listblock">
					<h3 class="title">彩妆香氛<a href="#/list">
						<i class="icon iconfont icon-xiayibu"></i>
					</a></h3>
					<ul class="clearfix">
						<li v-for="n in colors">
							<a :href='"#/list?classify="+n.classify'>
								<img :src="n.imgurl" alt="">
								<p>{{n.title}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div id="listblock">
					<h3 class="title">身体护理<a href="#/list">
						<i class="icon iconfont icon-xiayibu"></i>
					</a></h3>
					<ul class="clearfix">
						<li v-for="n in cares">
							<a :href='"#/list?classify="+n.classify'>
								<img :src="n.imgurl" alt="">
								<p>{{n.title}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div id="listblock">
					<h3 class="title">洗浴用品<a href="#/list">
						<i class="icon iconfont icon-xiayibu"></i>
					</a></h3>
					<ul class="clearfix">
						<li v-for="n in clears">
							<a :href='"#/list?classify="+n.classify'>
								<img :src="n.imgurl" alt="">
								<p>{{n.title}}</p>
							</a>
						</li>
					</ul>
				</div>
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
				beautys:[{
					classify:"洁面",
					imgurl:"../images/xians.jpg",
					title:"洁面"
				},{
					classify:"防晒隔离",
					imgurl:"../images/fs.png",
					title:"防晒隔离"
				},{
					classify:"护肤套装",
					imgurl:"../images/hftz.png",
					title:"护肤套装"
				},{
					classify:"面膜",
					imgurl:"../images/mm.png",
					title:"面膜"
				},{
					classify:"香氛精油",
					imgurl:"../images/jy.png",
					title:"香氛精油"
				},{
					classify:"喷雾",
					imgurl:"../images/pw.png",
					title:"喷雾"
				}],
				colors:[{
					classify:"底妆",
					imgurl:"../images/dz.png",
					title:"底妆"
				},{
					classify:"眼妆",
					imgurl:"../images/yz.png",
					title:"眼妆"
				},{
					classify:"美体瘦身",
					imgurl:"../images/mtss.png",
					title:"美体瘦身"
				},{
					classify:"美甲",
					imgurl:"../images/mj.png",
					title:"美甲"
				},{
					classify:"唇妆",
					imgurl:"../images/cz.png",
					title:"唇妆"
				},{
					classify:"卸妆",
					imgurl:"../images/xz.png",
					title:"卸妆"
				},{
					classify:"彩妆套装",
					imgurl:"../images/cb.png",
					title:"彩妆套装"
				}],
				cares:[{
					classify:"眼部护理",
					imgurl:"../images/yh.png",
					title:"眼部护理"
				},{
					classify:"面部护肤",
					imgurl:"../images/mh.png",
					title:"面部护肤"
				},{
					classify:"头部护理",
					imgurl:"../images/th.png",
					title:"头部护理"
				},{
					classify:"手足护理",
					imgurl:"../images/szh.png",
					title:"手足护理"
				},{
					classify:"胸部护理",
					imgurl:"../images/xh.png",
					title:"胸部护理"
				}],
				clears:[{
					classify:"洗发水",
					imgurl:"../images/xfs.png",
					title:"洗发水"
				},{
					classify:"沐浴露",
					imgurl:"../images/myl.png",
					title:"沐浴露"
				},{
					classify:"女士香水",
					imgurl:"../images/nx.png",
					title:"女士香水"
				},{
					classify:"男士香水",
					imgurl:"../images/nx1.png",
					title:"男士香水"
				}],
				imgs: [{
					id: 1,
					src:"../images/classify05.jpg"
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
			abc(){
			}
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