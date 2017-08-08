<template>
<div class="hotSearch">
	<div class="hotTitle">
		<i class="icon iconfont icon-huo"></i>
		<span>热门搜索</span>
	</div>
	<div>
		<ul class="hotlist clearfix">
			<li v-for="n in hotGoods"><a :href='"#/list?classify="+n'><span>{{n}}</span></a></li>
		</ul>
	</div>
</div>	
</template>
<script>
	export default{
		computed:{
			hotGoods(){
				return this.$store.state.hotGoods;			
			}
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
	.hotSearch{
		padding:0.16rem 0.093333rem 0.04rem;
		margin-top: 0.533333rem;
		font-size:0.186667rem;
	}
	.hotTitle{
		height:0.466667rem;
		line-height: 0.466667rem;
		padding-left: 0.133333rem;
	}
	.hotTitle .icon{
		margin-right: 0.053333rem;
		color:#FF5053;
	}
	.hotlist{
		padding-left: 0.133333rem;
	}
	.hotlist li{
		padding:0.04rem 0.186667rem;
		float:left;
		margin-right: 0.133333rem;
		margin-bottom: 0.133333rem;
		border:0.013333rem solid #ccc;
		border-radius: 0.04rem;
	}
</style>
