<template>
	<div class="listheader">
		<div class="backsign" @click="back()">
			<i class="iconfont icon-fanhui1"></i>
		</div>
		<div class="searchfram">
			<i class="iconfont icon-sousuo"></i>
			<input type="text" class="listsearch" v-model='keyword'>
		</div>
		<div class="searchbtn">
			<button @click='search(keyword)'>搜索</button>
		</div>
		
	</div>
</template>
<script>
	export default{
		data(){
			return {
				keyword:''
			}
		},
		methods:{	
			back(){
				location.hash = '#/classify/list/whotclassify';
				//暴力修改
				this.$store.state.classifyList = [];
			},
			search(keyword){
								
			}

		},
		computed:{

		},
		mounted(){
			
		}
	}
</script>
<style scoped>
	*{
		padding:0;margin:0;border:none;text-decoration:none;
	}
	.listheader{
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1;
		font-size: 0.213333rem;
		width: 100%;
		height: 0.666667rem;
		overflow: hidden;
		line-height: 0.666667rem;
		background-color: #fff;

	}
	
	.backsign,.searchbtn,.searchfram{
		float: left;

	}
	.searchfram{
		margin-left: 0.2rem;
	}
	.backsign{
		height: 100%;
	}
	.icon-fanhui1{
		display: block;
		height: 100%;
		margin: auto 0;
		width: 0.4rem;
		font-size: 0.32rem;
		text-align: center;
	}
	.icon-sousuo{
		height: 0.4rem;
		width: 0.32rem;
		display: inline-block;
		line-height: 0.4rem;
		border-radius: 0.053333rem 0 0 0.053333rem;
		background-color: #eee;
		padding-left: 0.026667rem;
		padding-right: 0.026667rem;
		font-size: 0.213333rem;
		text-align: center;
		background-color: #e5e5e5;
	}
	.listsearch{
		display:inline-block;
		height: 0.4rem;
		border:none;
		width: 3.066667rem;
		border-radius: 0 0.053333rem 0.053333rem 0;
		/*margin-bottom: 0.133333rem;*/
		background-color: #eee;
		margin: auto 0.186667rem auto -0.106667rem;
		outline: none;
		background-color: #e5e5e5;
	}

	.searchbtn button{
		height: 0.4rem;
		width: 0.666667rem;
		color: #fff;
		background-color: #d7063b;
		line-height: 0.4rem;
		border:none;
		border-radius: 0.053333rem;
		font-size: 0.186667rem;
		text-align: center;
	}
</style>