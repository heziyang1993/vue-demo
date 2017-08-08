<template>
<div class="Search">
	<wheader></wheader>
	<router-view></router-view>
</div>	
</template>
<script>
	import wheader from "../wheader.vue";
	export default{
		components:{
			wheader
		}
	}
</script>
<style>
	.Search{
		background-color:#fff;
		width: 100%;
		height:100%;
	}
</style>