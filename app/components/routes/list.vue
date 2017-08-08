<template>
	<div>
		<listheader></listheader>
		<olist_nav></olist_nav>
		<olist></olist>
		<wloadmore></wloadmore>
	</div>

</template>
<script>
	import listheader from "../listheader.vue";
	import olist_nav from "../olist_nav.vue";
	import olist from "../olist.vue";
	import wloadmore from '../wloadmore.vue';
	export default {
		components: {
			listheader,
			olist_nav,
			olist,
			wloadmore,
		},
		beforeMount() {
			this.$store.dispatch('prePath', this.$route.fullPath);
			}
		};
</script>