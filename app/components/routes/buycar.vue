<template>
	<div>
		<buycarhead></buycarhead>
		<buycarcontent></buycarcontent>
		<guesslike></guesslike>
		<totalprice></totalprice>
	</div>
</template>
<script>
	import buycarhead from '../buycarhead.vue';
	import buycarcontent from '../buycarcontent.vue';
	import guesslike from '../guesslike.vue';
	import totalprice from '../totalprice.vue';
	export default {
		components:{
			buycarhead,
			buycarcontent,
			guesslike,
			totalprice
		}
	}
</script>
