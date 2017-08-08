<template>
	<div>
		<wheader></wheader>
		<router-view></router-view>
		<xfooter></xfooter>
	</div>
		
</template>
<script>
	import wheader from "../wheader.vue";
	import wside from "../wSide.vue";
	import xfooter from "../xfooter.vue"
	export default{
		components:{
			wheader,
			wside,
			xfooter
		},
		beforeMount(){
			this.$store.dispatch('prePath',this.$route.fullPath)
		}
	};
</script>

