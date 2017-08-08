<template>
	<div class="hcontainer">
		<xheader></xheader>
		<citylocation></citylocation>
		<div class="main_container">
			<hswiper></hswiper>
			<adver></adver>
			<hnav></hnav>
			<prounce></prounce>
			<seckill></seckill>
			<hchannel></hchannel>
			<hmiddleswiper></hmiddleswiper>
			<recommand></recommand>
			<hbottomsiper></hbottomsiper>
			<promotion></promotion>
			<loadmore></loadmore>
		</div>
		<xfooter></xfooter>
	</div>

</template>

<script>
	import xheader from '../xheader.vue';
	import xfooter from '../xfooter.vue';
	import hswiper from '../hswipertop.vue';
	import adver from '../hadver.vue';
	import hnav from '../hnav.vue';
	import prounce from '../hprounce.vue';
	import seckill from '../hseckill.vue'
	import promotion from '../hpromotion.vue';
	import loadmore from '../hloadmore.vue';
	import hchannel from '../hchannel.vue';
	import hmiddleswiper from '../hmiddleswiper.vue';
	import recommand from '../hrecommand.vue';
	import hbottomsiper from '../hbottomswiper.vue';
	import citylocation from '../citylocation.vue';
	export default {
		components: {
			xheader,
			hswiper,
			adver,
			hnav,
			prounce,
			seckill,
			hchannel,
			promotion,
			loadmore,
			hmiddleswiper,
			recommand,
			hbottomsiper,
			citylocation,
			xfooter
		},
		beforeMount(){

			this.$store.dispatch('prePath',this.$route.fullPath);
		}
	}
</script>

<style>
	.main_container {
		padding-bottom: 0.666666rem;
		overflow-x: hidden;
		overflow-y: auto;
		
	}
	.hcontainer {
		overflow-x: hidden;
		overflow-y: auto;
	}
</style>