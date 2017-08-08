<template>
	<div class="hchannel" data-title="特色频道">
		<!-- 如果不是八个ICON和秒杀区块(那就是主题馆, 自定义馆和大促四色), 显示标题bar S -->
		<div class="custom-title J_banner_title" title="特色频道" style="background-color:#f2f2f2">
			<div class="left_channel">
				<!-- 线和文字一起控制, 图标单独控制 S-->
				<p class="line" style="border-top-color: #ae1f7d"></p>
				<p style="color:#ae1f7d;margin: 0 .14rem"> 特色频道 </p>
				<p class="line" style="border-top-color: #ae1f7d"></p>
				<!-- 线和文字一起控制, 图标单独控制 E-->
			</div>
		</div>
		<!-- 全球狂欢倒计时 S -->
		<!-- 全球狂欢倒计时 E -->
		<!-- 8个ICON S -->
		<!-- 自定义1+1 1+n n+1 1*1 1*n n*n 大促四色 新手礼包 S -->
		<ul data-type="5" data-layout="8" class="J_diy_channel ind_flex clo_row_2 left ">
			<li data-type="17" class="first_img">
				<a href="#">
					<img src="//img06.fn-mart.com/pic/febf133cced22a63a4da/hzqzTT7nv2LlBdZljn/59oRmyOap9Q9DG/CsmRslihfhqAMrwZAAIB2XAi2Sg778_org_q75s500.jpg" style="background: none;"> 
				</a>
			</li>
			<li data-type="21" >
				<a href="#"> 
					<img src="//img02.fn-mart.com/pic/e7a1133e0810dd139a5d/BTHTzz1zFztdBgugjz/5xoGoRByV9vaoa/CsmRsll2pRGAVxaqAADc_742eh0643_org_q75s500.jpg" style="background: none;"> 
				</a>
			</li>
			<li data-type="21" >
				<a href="#"> 
					<img src="//img04.fn-mart.com/pic/eb77133d8a83278ebd8b/h262TT5T_nfdBlZd3T/59eaeaJGO9WxZG/CsmRslkashOAQvHDAAEoWHhX-nY340_org_q75s500.jpg" style="background: none;"> 
				</a>
			</li>
		</ul>
		<!-- 自定义1+1 1+n n+1 1*1 1*n n*n 大促四色 E -->
		<!-- 价比京东低模块 S -->
		<!-- 价比京东低模块 E -->
		<!-- 买贵就陪模块 S -->
		<!-- 买贵就陪模块 E -->
	</div>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		mounted(){
			
		}
	}
</script>

<style scoped>
	.hchannel {
		width: 100%;
		overflow: hidden;
	}
	.hchannel .custom-title {
		font-size: 0.213333rem;
	}
	.hchannel li {
		float:left;
		width: 54%;
		box-sizing:border-box;
		border: 0.013333rem solid #eee;
	}
	.hchannel .first_img {
		width: 46%;
	}
	.hchannel li a {
		width: 100%;
	}
	.hchannel li a img {
		width: 100%;
	}
	.left_channel {
		width: 100%;
		height: 0.4rem;
		padding: 0.066666rem 1rem;
		
	}
	.left_channel p {
		font-size:0.213333rem;
		float:left;
		
	}
	.left_channel .line {
		height: 0.04rem;
		width: 0.88rem;
		border-top: 3px solid #e73462;
		margin-top: 0.133333rem;
	}
</style>