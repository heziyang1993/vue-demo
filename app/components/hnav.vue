<template>
	<div class="hnav">
		<swiper :options="swiperOptions" ref="mySwiper">
			<!-- slides -->
			<swiper-slide>
				<ul class="clearfix" id="mainMenu">
					<li> <span class="J_iconMaidian" data-pos="3_1_1" data-order="1" data-type="29" data-fnlink="" data-href="" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_0" src="//img03.fn-mart.com/pic/2a5a133e08062599c5b1/kTH222sTvTtMhdUlX2/5YeaeGhGVxEGva/CsmRsll1pFyAGQoGAAA_VNHZAl8444_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>急速达</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_2" data-order="2" data-type="21" data-fnlink="//sale.feiniu.com/m-59205/touch/CS000026" data-href="//sale.feiniu.com/m-59205/touch/CS000026" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_1" src="//img02.fn-mart.com/pic/e3a8133e0802259a0804/hnqzTT12_ntdklVdX2/59eyoaBRUxEavR/CsmRsVl1pGCADIFSAAA_-GwWJe8885_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>进口好货</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_3" data-order="3" data-type="21" data-fnlink="//sale.feiniu.com/m-57285/touch/CS000026" data-href="//sale.feiniu.com/m-57285/touch/CS000026" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_2" src="//img04.fn-mart.com/pic/13fd133e0808259a4e11/knqnTT5nFzCghdZdjT/1iSRoakRuYJGFa/CsmRsVl1pGSATlGZAAAz7MLHeyc115_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>飞牛商城</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_4" data-order="4" data-type="21" data-fnlink="//sale.feiniu.com/m-61312/touch/CS000026" data-href="//sale.feiniu.com/m-61312/touch/CS000026" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_3" src="//img06.fn-mart.com/pic/88cf133e0806259a7d5a/Kz6Tnn72FztdBlul3z/7YmySGhGVxcaDR/CsmRsVl1pGeAUivrAABFEKDmdYk491_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>服装城</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_5" data-order="5" data-type="21" data-fnlink="//sale.feiniu.com/m-60988/touch/CS000026" data-href="//sale.feiniu.com/m-60988/touch/CS000026" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_4" src="//img06.fn-mart.com/pic/15c3133e0801259ab437/Bz82221zFzCMkgug3z/59oRmyBaU9QyDG/CsmRsVl1pGuANBSIAAA2RKnVPrY900_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>母婴</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_6" data-order="6" data-type="20" data-fnlink="//mv.m.feiniu.com/vouchermark" data-href="//mv.m.feiniu.com/vouchermark" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_5" src="//img04.fn-mart.com/pic/aa56133e080425a1c5e0/B2Hzzz5TvnfdBdZdXn/1YSGmyBGuiER_a/CsmRsVl1pJCAcRn0AAAzLTLtl8Q786_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>领券中心</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_7" data-order="7" data-type="28" data-fnlink="//m.feiniu.com/virtual/recharge.html" data-href="//m.feiniu.com/virtual/recharge.html" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_6" src="//img06.fn-mart.com/pic/7742133e080925a3a938/B26n221z_2fdhMZdjz/79oaSRKGViQaFa/CsmRsVl1pJOAKoxTAAA1rzRIy4U929_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>手机充值</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_8" data-order="8" data-type="21" data-fnlink="//sale.feiniu.com/m-59187/touch/CS000026" data-href="//sale.feiniu.com/m-59187/touch/CS000026" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_7" src="//img06.fn-mart.com/pic/1bbf133e0806259ff5fb/K26z225zF2tMBlUdO2/7YSGmaBauYJGvy/CsmRsll1pJeARYoOAAA0H3GdD-8012_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>自创品牌</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_9" data-order="9" data-type="14" data-fnlink="//m.feiniu.com/my/buyAgain/index.html" data-href="//m.feiniu.com/my/buyAgain/index.html" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_8" src="//img03.fn-mart.com/pic/acb4133e080425a02da1/K2qTnn5TD2tghguMXn/1xmGSGByu9cGFR/CsmRsVl1pJqATiyMAAA0x_rE68g823_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>曾经购买</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_10" data-order="10" data-type="19" data-fnlink="//weixin.feiniu.com/weixin/signin/index.html" data-href="//weixin.feiniu.com/weixin/signin/index.html" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_9" src="//img06.fn-mart.com/pic/bd36133e080225a05a41/kTH222sTvTtMhdUlX2/1YSGSGKaUicyFy/CsmRsVl1pJ2AW1JDAAAzNxorbvU466_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>签到送积分</p>   </span> </li>
				</ul>
			</swiper-slide>

			<swiper-slide>
				<ul class="clearfix" id="mainMenu">
					<li> <span class="J_iconMaidian" data-pos="3_1_11" data-order="1" data-type="21" data-fnlink="//sale.feiniu.com/m-54937/touch/CS000026" data-href="//sale.feiniu.com/m-54937/touch/CS000026" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_0" src="//img02.fn-mart.com/pic/b6d2133e080825a0c46b/knq2nn52FTLMhMul32/s9maoahyUiEy_R/CsmRsll1pKSATqYKAABIg7QoIQM555_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>品牌特卖</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_12" data-order="2" data-type="21" data-fnlink="//sale.feiniu.com/m-63112/touch/CS000026" data-href="//sale.feiniu.com/m-63112/touch/CS000026" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_1" src="//img02.fn-mart.com/pic/8247133e080925a10730/Kz62TTsnDTflhgugjT/5xoGoRByV9JaDa/CsmRsll1pKiAGrijAAA3MnArmxk986_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>店铺推荐</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_13" data-order="3" data-type="13" data-fnlink="//m.feiniu.com/seckill/index2.html" data-href="//m.feiniu.com/seckill/index2.html" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_2" src="//img04.fn-mart.com/pic/c670133e080725a146a2/K282nn7n_TLMKlVgXn/5xeRmahau9QaDa/CsmRsll1pKyAFlqXAAA0rEPfGQg529_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>秒杀</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_14" data-order="4" data-type="17" data-fnlink="//t.m.feiniu.com" data-href="//t.m.feiniu.com" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_3" src="//img02.fn-mart.com/pic/c49d133e080925a18198/B2Hzzz5TvnfdBdZdXn/1xmGSGByu9cGFR/CsmRsll1pLCAPr0KAAA5vG4WLAU241_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>飞牛团</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_15" data-order="5" data-type="21" data-fnlink="//sale.feiniu.com/m-53977/touch/CS000026" data-href="//sale.feiniu.com/m-53977/touch/CS000026" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_4" src="//img02.fn-mart.com/pic/620e133e080225a1c68a/h26n22sT_2tMKludjn/1ioyoRhyuxcaly/CsmRsVl1pLSAd5brAAAy6rXKAAM597_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>电器城</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_16" data-order="6" data-type="12" data-fnlink="//m.feiniu.com/my/recharge/index.html?nav=1" data-href="//m.feiniu.com/my/recharge/index.html?nav=1" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_5" src="//img04.fn-mart.com/pic/aa56133e080425a1c5e0/B2Hzzz5TvnfdBdZdXn/1YSGmyBGuiER_a/CsmRsVl1pJCAcRn0AAAzLTLtl8Q786_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>卡券充值</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_17" data-order="7" data-type="2" data-fnlink="//m.feiniu.com/category/all.html" data-href="//m.feiniu.com/category/all.html" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_6" src="//img04.fn-mart.com/pic/7742133e080925a3a938/B26n221z_2fdhMZdjz/79oaSRKGViQaFa/CsmRsVl1pJOAKoxTAAA1rzRIy4U929_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>商品分类</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_18" data-order="8" data-type="15" data-fnlink="//m.feiniu.com/my/favorites/index.html" data-href="//m.feiniu.com/my/favorites/index.html" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_7" src="//img02.fn-mart.com/pic/1bbf133e0806259ff5fb/K26z225zF2tMBlUdO2/7YSGmaBauYJGvy/CsmRsll1pJeARYoOAAA0H3GdD-8012_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>我的收藏</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_19" data-order="9" data-type="11" data-fnlink="//m.feiniu.com/my/order/index.html" data-href="//m.feiniu.com/my/order/index.html" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_8" src="//img04.fn-mart.com/pic/acb4133e080425a02da1/K2qTnn5TD2tghguMXn/1xmGSGByu9cGFR/CsmRsVl1pJqATiyMAAA0x_rE68g823_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>订单查询</p>   </span> </li>
					<li> <span class="J_iconMaidian" data-pos="3_1_20" data-order="10" data-type="4" data-fnlink="https://home.m.feiniu.com/" data-href="https://home.m.feiniu.com/" style="color:#333333" href="javascript:void(0);">  <img class="icon m_img_9" src="//img04.fn-mart.com/pic/bd36133e080225a05a41/kTH222sTvTtMhdUlX2/1YSGSGKaUicyFy/CsmRsVl1pJ2AW1JDAAAzNxorbvU466_org_q75s500.png">  <!-- icon角标 S -->     <!-- icon角标 E -->  <p>我的飞牛</p>   </span> </li>
				</ul>
			</swiper-slide>

			<!-- Optional controls -->
			<div class="swiper-pagination pagination-nav" slot="pagination"></div>
		</swiper>
	</div>

</template>

<script>
	export default {
		name: 'carrousel',
		data() {
			return {
				swiperOptions: {
					setWrapperSize: true,
					pagination: '.swiper-pagination',
					paginationClickable: true,
					mousewheelControl: true,
					observeParents: true
				},
				swiperSlides: [],
			}

		},
		computed: {

		},
		mounted() {

		}
	}
</script>
<style scoped>
	#mainMenu {
		height: 2.053333rem;
		margin-bottom: 0.133333rem;
		overflow: hidden;
		background: #fff;
	}
	
	#mainMenu li {
		float: left;
		width: 20%;
		font-size: 0.16rem;
		text-align: center;
		margin-bottom: 0.133333rem;
	}
	
	#mainMenu li img {
		width: 0.64rem;
		margin: 0 auto;
	}
	
	#mainMenu li p {
		width: 100%;
	}
	.swiper-pagination {
		bottom: -0.4rem;
	}
	
	
</style>