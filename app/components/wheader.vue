<template>
	<div class="top_box">
            <span class="top_back J_topback iconfont icon-fanhui1" @click="back()"></span>
            <span class="search" @click="goSearchHotlist()">
                <i class="iconfont icon-sousuo"></i>
                <input type="text" placeholder="抽纸" class="J_adWord" v-model="keywords" @keydown="goSearchlist()" v-change_placeholder='hotWord' @keyup="search()">
            </span>
            <div class="bar">搜索</div>
        </div>
</template>
<script>
	export default{
		data: function() {
			return {
				hotWord: [{ title: '米' }, { title: '油' }, { title: '抽纸' }, { title: '休闲食品' }, { title: '凉席' }, { title: '进口牛奶' }, { title: '腕表' }, { title: '卫生巾' }, { title: '洗发水' }, { title: '手机' }],
				keywords:"",
			}
		},
		methods:{	
			//点击返回按钮，回到前一个路由	
			back(){
				this.$router.go(-this.$store.state.classifyHistoryNum);
			},
			goSearchHotlist:function(){
				window.location.href = "#/search/hotsearch";
			},
			goSearchlist(){
				window.location.href = "#/search/searchlist";
			},
		},
		computed:{
		},
		mounted(){
			this.$store.state.classifyHistoryNum = 1;
		},
		directives: {
			//实现input的placeholder的实时切换商品关键字
			change_placeholder: {				
				bind(el, binding) {
					var i = 0;
					var timers = setInterval(function() {
						i++;
						if(i >= binding.value.length) {
							i = 0;
						}
						el.placeholder = binding.value[i].title;
					}, 2000)

				}
			}
		}
	}
</script>
<style scoped>
	*{
		padding:0;margin:0;border:none;text-decoration:none;
	}
	.top_box{
		display: flex;
		position:fixed;
		top: 0;
		font-size: 0.186667rem;
		width:100%;
		height:0.666667rem;
		padding:0.133333rem;
		border-bottom: 0.013333rem solid #d5d5d5;
		background-color: #fff;
		z-index: 2000;
	}
	.top_box .top_back {
	text-align: center;
    position: absolute;
    left: 0;
    top: 0.133333rem;
    display: block;
    width: 0.4rem;
    height: 0.4rem;
    font-size: 0.32rem;
    line-height: 0.4rem;
	}
	.top_box .search {
    display: flex;
    margin-left: 0.466667rem;
    margin-right: 0.186667rem;
    padding-left: 0.053333rem;
    border-radius: 0.053333rem;
    height: 0.4rem;
    background: #e5e5e5;
    align-items: center;
    line-height: 0.4rem;
}
.top_box input{
   	outline: 0;
    padding: 0 0.093333rem;
    border: none;
    display: block;
    background: #e5e5e5;
    border-radius: 0.053333rem;
    width: 2.96rem;
}
 .top_box .search .icon-sousuo{
 	margin-right: 0.106667rem;
 }
 .top_box .bar{
 	font-size: 0.186667rem;
 	width:0.666667rem;
 	height:0.4rem;
 	line-height: 0.4rem;
 	background-color: #d7063b;
 	color:white;
 	border-radius:0.053333rem;
 	text-align: center;
 }
</style>