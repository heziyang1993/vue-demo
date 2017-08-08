<template>
	<div id="content">
		<div id="J_wrapper" class="wrapper wrapperl">
			<div class="scroller scroller1" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
				<ul>
					<!-- 一级类目 -->
					<a href="#/classify/list/whotclassify"><li class="J_firstCate" :class="{'current':tab==1}" @click="changeTab(1)">热门分类
					</li></a>
					<a href="#/classify/list/wclassify01"><li class="J_firstCate" :class="{'current':tab==2}" @click="changeTab(2)">生鲜冷藏
					</li></a>
					<a href="#/classify/list/wfood"><li class="J_firstCate" :class="{'current':tab==3}" @click="changeTab(3)">食品酒饮
					</li></a>
					<a href="#/classify/list/wgoods"><li class="J_firstCate" :class="{'current':tab==4}" @click="changeTab(4)">进口好货
					</li></a>
					<a href="#/classify/list/wbeauty"><li class="J_firstCate" :class="{'current':tab==5}" @click="changeTab(5)">个护美妆
					</li></a>
					<a href="#/classify/list/whomeclear"><li class="J_firstCate" :class="{'current':tab==6}" @click="changeTab(6)">家清厨卫
					</li></a>
					<a href="#/classify/list/whomebed"><li class="J_firstCate" :class="{'current':tab==7}" @click="changeTab(7)">家纺家装
					</li></a>
					<a href="#/classify/list/wbaby">
					<li class="J_firstCate" :class="{'current':tab==8}" @click="changeTab(8)">母婴玩具
					</li></a>
					<a href="#/classify/list/wphone"><li class="J_firstCate" :class="{'current':tab==9}" @click="changeTab(9)">手机数码
					</li></a>
					<a href="#/classify/list/welectric"><li class="J_firstCate" :class="{'current':tab==10}" @click="changeTab(10)">家电汽配
					</li></a>
					<li class="J_firstCate" :class="{'current':tab==11}" @click="changeTab(11)">女装配饰
					</li>
					<li class="J_firstCate" :class="{'current':tab==12}" @click="changeTab(12)">男装运动
					</li>
					<li class="J_firstCate" :class="{'current':tab==13}" @click="changeTab(13)">鞋靴箱包
					</li>
					<li class="J_firstCate">图书文具
					</li>
					<li class="J_firstCate">保健计生
					</li>
					<li class="J_firstCate">礼品卡券
					</li>
				</ul>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return{
			tab:1	
			}
		},
		methods:{
			changeTab:function(tab){
				this.$store.state.classifyHistoryNum += 1;
				this.tab=tab;
			}
		},
		mounted:function(){
			//根据路由判断侧边栏是否显示高亮
			var hash=window.location.hash;
			switch(hash){
				case '#/classify/list/whotclassify':
				this.tab=1;
				break;
				case '#/classify/list/wclassify01':
				this.tab=2;
				break;
				case '#/classify/list/wfood':
				this.tab=3; 
				break;
				case '#/classify/list/wgoods':
				this.tab=4;
				break;
				case '#/classify/list/wbeauty':
				this.tab=5;
				break;
				case '#/classify/list/whomeclear':
				this.tab=6;
				break;
				case '#/classify/list/whomebed':
				this.tab=7;
				break;
				case '#/classify/list/wbaby':
				this.tab=8;
				break;
				case '#/classify/list/wphone':
				this.tab=9;
				break;
				case '#/classify/list/welectric':
				this.tab=10;
				break;
			};
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
	*{
		margin: 0;padding: 0;
	}
	a{
		text-decoration: none;
	}
	ul li {
		list-style: none;
	}
	#content{
		margin-top: 0.6rem; 
		position:relative;
		height: 8.266667rem;

	}
	
	#content .wrapper{
		position:absolute;
		top: 0;
 		bottom: 0; 
 		background-color: #fff;
		/* overflow: hidden; */
	}
	#content #J_wrapper{
		width:1.2rem;
		z-index: 555;
		left:0;
	}
	 #content .scroller1{
		position:fixed;
		width: 1.2rem;
	}
	#content .scroller1 ul{
		width: 1.2rem;
	}
	#content .scroller ul .current {
		color: #FF5053;
		border-left:0.04rem solid #FF5053; 
		background: #fff;
	} 
	#content .scroller ul li {
		line-height: 0.586667rem;
		font-size: 0.186667rem;
		width: 1.053333rem;
		height: 0.586667rem;
		color: #666;
		background: #f4f4f4;
		box-sizing: border-box;
		padding: 0 0.04rem;
		position: relative;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		text-align: center;
		border-bottom:0.013333rem solid #fff;
	}
	#r_wrapper{
		width: 100%;
		z-index: -1;
	}
	#r_wrapper .contain{
		padding-left:1.2rem;
		padding-right:0.133333rem; 
		margin-top: 0.133333rem;
	}
	/* .banner a{
	} */
	#r_wrapper .banner a img{
		height:1.2rem;
		width: 100%; 
	}
	#listblock .title {
    font-size: 0.186667rem;
    color: #000;
    position: relative;
    line-height: 0.533333rem;
    height: 0.533333rem;
    padding-left: 0.186667rem;
} 
	#listblock>ul li {
    float: left;
    width: 31.4%;
    margin-right: 1.4%;
    margin-bottom: 0.133333rem;
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