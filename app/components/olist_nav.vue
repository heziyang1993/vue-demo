<template>
	<div id='nav'>
		<div>
			<div class="list_nav">
				<ul class="lv_ul">
					<li>
						<a href="javascript:;" class='afterr'>综合</a>
					</li>
					<li>
						<a href="javascript:;"  class='afterr'>销量</a>
					</li>
					<li>
						<a href="javascript:;" :class='{afterr:bools,afterrr:!bools}'>价格</a>
					</li>
					<li>
						<a href="javascript:;" class='afterr'>促销</a>
					</li>
					<li>
						<a href="javascript:;" class="iconfont icon-gengduo2"></a>
					</li>
				</ul>
			</div>
			<div class="pos">
				<div class="list_wrap wrap_hide">
					<ul class="select_list">
						<li> <span>综合</span></li>
						<li> <span>新品</span></li>
						<li> <span>评论</span></li>
					</ul>
					<div class="mask hide_it"></div>
				</div>
			</div>
		</div>
		<div class="menu_wrapper">
			<div class="w_kinds zIndex">
				<ul class="tagUl">
					<li><i>自营</i></li>
					<li><i>品牌</i></li>
					<li><i>功效</i></li>
					<li><i>规格</i></li>
				</ul>
				<div class="w_kinds_box" style="display: none;">
					<div class="w_kinds_tab">
						<ul class="w_kinds_menu" index-active="0" style="display: none;">
							<li class="active">全部</li>
							<li index="0"> 六神 </li>
							<li index="1"> 资生堂(Shiseido) </li>
							<li index="2"> 力士(Lux) </li>
							<li index="3"> 舒肤佳(Safeguard) </li>
							<li index="4"> 多芬 </li>
							<li index="5"> 香馜 </li>
							<li index="6"> 玉兰油(Olay) </li>
							<li index="7"> 法国玖玖(DeJOJOez) </li>
							<li index="8"> 强生 </li>
							<li index="9"> 大润发(FP) </li>
							<li index="10"> 巴斯克林(BATHCLIN) </li>
							<li index="11"> 美加净 </li>
							<li index="12"> 滴露(Dettol) </li>
							<li index="13"> 拉芳 </li>
							<li index="14"> 比力杰勒斯 </li>
							<li index="15"> 康宝(Canbo) </li>
							<li index="16"> 卡伊莲 </li>
							<li index="17"> 卫宝 </li>
							<li index="18"> COCOVEL </li>
							<li index="19"> 泊泉雅 </li>
							<li index="20"> 阿道夫 </li>
							<li index="21"> 韩伊(CO.E) </li>
							<li index="22"> 凌仕(LYNX) </li>
							<li index="23"> 蜂花 </li>
							<li index="24"> 仙维娜(SIVIA) </li>
							<li index="25"> 隆力奇 </li>
							<li index="26"> 耐斯澎澎(NICE PONPON) </li>
							<li index="27"> 安宝笛 </li>
							<li index="28"> 夏士莲(Hazeline) </li>
							<li index="29"> 小浣熊 </li>
							<li index="30"> 雨沐 </li>
							<li index="31"> 东方宝石 </li>
							<li index="32"> AUDALA </li>
							<li index="33"> 史努比(SNOOPY) </li>
							<li index="34"> 阿迪达斯(Adidas) </li>
						</ul>
						<ul class="w_kinds_menu" index-active="1" style="display: none;">
							<li class="active">全部</li>
							<li index="0"> 舒缓安睡 </li>
							<li index="1"> 清凉舒爽 </li>
							<li index="2"> 美白提亮 </li>
							<li index="3"> 除螨抑菌 </li>
							<li index="4"> 保湿滋润 </li>
							<li index="5"> 精油香氛 </li>
							<li index="6"> 紧致嫩肤 </li>
						</ul>
						<ul class="w_kinds_menu" index-active="2" style="display: none;">
							<li class="active">全部</li>
							<li index="0"> 751ml-1000ml </li>
							<li index="1"> 601ml-750ml </li>
							<li index="2"> 401ml-600ml </li>
							<li index="3"> 201ml-400ml </li>
							<li index="4"> 200ml以下 </li>
							<li index="5"> 套装 </li>
							<li index="6"> 1001ml以上 </li>
						</ul>
					</div>
					<div class="w_kinds_tab_btn">
						<div class="btn_reset">重置</div>
						<div class="btn_confirm">确定</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				sort_price_status: 0, //1升序,0降序
				bools:true
			}
		},
		methods: {
			sort_price() {
				this.bools = !this.bools;
				var self = this;
				this.$store.state.classifyList = []
				if(self.sort_price_status == 0) {
					self.sort_price_status = 1;
				}
				else if(self.sort_price_status == 1) {
					self.sort_price_status = 0;
				};
				var page = 1;
				var sort_price_status = this.sort_price_status;
			}
		}
	}
</script>
<style scoped>
	#nav {
		font-size: 0.14rem;
		margin-top: 0.666667rem;
	}
	
	.list_nav {
		position: relative;
		background-color: #fff;
	}
	
	.list_nav .lv_ul {
		border-bottom: 0.013333rem solid #eee;
		padding: 0.2rem, 0;
		display: flex;
		align-items: center;
		height: 0.4rem;
		border-top: 0.013333rem solid #d5d5d5;
	}
	
	.list_nav .lv_ul li {
		flex: 1;
		padding: 0 0.1rem;
		text-align: center;
		border-right: 0.013333rem solid #eee;
		height: 0.2rem;
		position: relative;
	}
	
	.list_nav .lv_ul li a {
		display: block;
		margin-bottom: 0.1rem;
	}
	
	.lv_ul li a .active {
		color: #c20053;
	}
	
	.lv_ul li .afterr:after {
		content: "";
		position: absolute;
		right: 11%;
		top: 37%;
		border-top: 0.06rem solid #666;
		border-left: 0.06rem solid transparent;
		border-right: 0.06rem solid transparent;
		border-bottom: none;
	}
	
	.lv_ul li .afterrr:after {
		content: "";
		position: absolute;
		right: 11%;
		top: 37%;
		border-bottom: 0.06rem solid #666;
		border-left: 0.06rem solid transparent;
		border-right: 0.06rem solid transparent;
		border-top: none;
	}
	
	.pos .list_wrap .select_list {
		position: absolute;
		z-index: 1200;
		width: 100%;
		display: none;
	}
	
	.pos .list_wrap li {
		border-bottom: 0.013333rem solid #d5d5d5;
		line-height: 0.4rem;
		margin-left: 0.12rem;
		padding-left: 3.5%;
		font-size: 0.14rem;
	}
	
	.pos .list_wrap li span {}
	
	.hide_it {
		background: rgba(0, 0, 0, .8);
		position: fixed;
		height: 100%;
		width: 100%;
		bottom: 0;
		max-width: 10.666667rem;
		min-width: 4.266667rem;
		display: none;
		z-index: 55;
	}
	
	.tagUl {
		position: relative;
		background: #fff;
		width: 100%;
		height: 0.44rem;
		line-height: 0.4rem;
		padding-left: 0.12rem;
		padding-right: 0.04rem;
		box-sizing: border-box;
		background-color: #fff;
		border-bottom: 0.013333rem solid #eee;
	}
	
	.tagUl li {
		width: 25%;
		float: left;
		display: inline-block;
		padding-right: 0.1rem;
		overflow: hidden;
	}
	
	.tagUl li i {
		display: block;
		text-align: center;
		margin-top: 0.07rem;
		width: 100%;
		height: 0.29rem;
		line-height: 0.29rem;
		border: 1px solid #eee;
		border-radius: 0.02rem;
		padding: 0 0.04rem;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	
	.w_kinds_box .w_kinds_tab {
		background: #f8f8f8;
		padding: 0 0.12rem;
		position: relative;
		height: 2.3rem;
		overflow-y: auto;
	}
	
	.w_kinds_tab_btn {
		display: flex;
		position: relative;
		left: 0;
		bottom: 0;
		width: 100%;
	}
	
	.w_kinds_tab_btn div {
		flex: 1;
		line-height: 0.48rem;
		text-align: center;
	}
	
	.btn_confirm {
		background: #c70034;
		color: #fff;
	}
	
	.w_kinds_menu li {
		float: left;
		width: 50%;
		line-height: 0.48rem;
		font-size: 0.14rem;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	
	.w_kinds_menu li.active {
		color: #c70034;
	}
	
	.w_kinds_menu li.active:after {
		content: "\E602";
		font-family: iconfont;
		font-size: 0.17rem;
		padding-left: .14rem;
		display: inline-block;
		position: absolute;
	}
	
	.tagUl li.tag_active i {
		color: #d6005b;
		background: #f8f8f8;
		border-bottom: none;
		height: 0.38rem;
		position: relative;
		z-index: 55;
	}
</style>