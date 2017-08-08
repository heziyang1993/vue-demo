<template>
	<div class="searchlist">
		<ul class="list">
			<li v-for="i in goods_search"><a :href='"#/detail/detailInfo?id="+i.id'>
				{{i.goods_name}}
			<div class="classify">
					<span>{{i.goods_brand}}</span>
					<span>{{i.goods_classify}}</span>
				</div>
			</a></li>
		</ul>
	</div>
</template>
<script>
	export default{
		computed:{
			//商品模糊查询结果渲染页面
			goods_search(){
				return this.$store.state.goods_search;
			}
			
		}
	}
</script>
<style scoped>
	.searchlist{
		padding:0.133333rem 0;
		margin-top: 0.533333rem;
		font-size:0.186667rem;
	}
	.searchlist .list{
		margin:0 0.133333rem;
	}
	.searchlist .list li{
		position: relative;
		padding-left: 0.106667rem;
		height:0.533333rem;
		line-height: 0.533333rem;
		border-bottom:0.013333rem solid #e5e5e5;
	}
	.classify{
		position: absolute;
		right:0.133333rem;
		top:0.106667rem;
	}
	.classify span{
		display: block;
		float:left;
		padding:0 0.093333rem;
		margin-right: 0.08rem;
		background-color: #e5e5e5;
		font-size:0.186667rem;
		height:0.333333rem;
		line-height: 0.333333rem;
		border-radius: 0.053333rem;
		text-align: center;
		color:#666;
	}
</style>