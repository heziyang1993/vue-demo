<template>
	<div class="ind_top top" :class="{ind_top_active:isActive}" @click=upTop>
		<div class="ind_city icon-dingwei iconfont">
			<a href="#/index/citylist" @click='location_city_status'>{{location_city}}</a>
		</div>
		<div class="single_search">
			<!--<span class="top_back J_topback hide_it"></span>-->
			<button class="iconfont icon-fangdajing"></button>
			<input type="text" class="J_adWord header_search" value="" placeholder="凉席" v-change_placeholder='hotWord'>
			<!--<div class="set_list J_search_go hide_it">搜索</div>-->
			<!--<div class="search hide_it"></div>-->
		</div>
		<!--		<div id="J_personal" class="personal hide_it"><i class="iconfont"></i> </div>-->
		<div id="J_login" class="login" @click='header_search'>搜索 </div>
	</div>
</template>
<script>
	export default {
		data: function() {
			return {
				hotWord: [{ title: '米' }, { title: '油' }, { title: '抽纸' }, { title: '休闲食品' }, { title: '凉席' }, { title: '进口牛奶' }, { title: '腕表' }, { title: '卫生巾' }, { title: '洗发水' }, { title: '手机' }],

			}
		},
		mounted() {

		},
		computed: {
			location_city() {
				return this.$store.state.location_city;
			},
			isActive(){
				return this.$store.state.isActive;
			}
		},
		methods: {
			header_search() {
				var page = 1;
				var text = document.getElementsByClassName('header_search')[0].value;
				location.hash = '#/list';
			},
			login() {
				location.hash = '#/login';
			},
			upTop() {
				//获取当前scrolltop的值
				var target = window.scrollY;
				var speed = target / 10;
				var timer = setInterval(function() {
					window.scrollBy(0, -speed)
					if(scrollY == 0) {
						clearInterval(timer);
						target = 0;
					}
				}, 30)
			},
			location_city_status() {
				this.$store.state.location_status = 1;
			}

		},
		directives: {
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
	.ind_top {
		width: 100%;
		height: 0.533333rem;
		/*background: rgba(215, 6, 59, 0);*/
		padding-top: 0.066666rem;
		box-sizing: border-box;
		position: fixed;
		z-index: 999;
		animation: topNoActive 0.5s ease 1;
		animation-fill-mode: forwards;
	}
	
	.ind_top_active {
		width: 100%;
		height: 0.533333rem;
		/*background: rgba(215, 6, 59, 1);*/
		padding-top: 0.066666rem;
		box-sizing: border-box;
		position: fixed;
		z-index: 999;
		animation: topActive 0.5s ease 1;
		animation-fill-mode: forwards;
	}

	@keyframes topActive{
		from{
			background: rgba(215, 6, 59, 0);
		}
		to{
			background: rgba(215, 6, 59, 1);
		}
	}

	@keyframes topNoActive{
		from{
			background: rgba(215, 6, 59, 1);
		}
		to{
			background: rgba(215, 6, 59, 0);
		}
	}
	
	.ind_top .ind_city {
		height: 0.466666rem;
		padding-left: 0.093333rem;
		font-size: 0.266666rem;
		color: #fff;
		font-size: 0.186666rem;
		padding-top: 0.066666rem;
		box-sizing: border-box;
		overflow: hidden;
		width: 0.88rem;
	}
	
	.ind_top .ind_city a {
		font-size: 0.186666rem;
		color: #fff;
	}
	
	.ind_top>div {
		float: left
	}
	
	.ind_top .single_search {
		width: 3.346666rem;
		height: 0.373333rem;
		box-sizing: border-box;
		background: #fff;
		border-radius: 0.066666rem;
		margin-left: 0.026666rem;
		position: relative;
		overflow: hidden;
	}
	
	.ind_top .single_search .J_adWord {
		width: 2.8rem;
		height: 100%;
		left: 0.4rem;
		background: none;
		border: 0;
		font-size: 0.16rem;
		position: absolute;
		outline: 0;
	}
	
	.single_search button {
		background: none;
		border: 0;
		font-size: 0.266666rem;
		color: #eee;
		position: absolute;
		left: 0.066666rem;
		top: -0.026666rem;
	}
	
	#J_login {
		width: 0.666666rem;
		height: 0.426666rem;
		color: #fff;
		margin-left: 0.066666rem;
		font-size: 0.213333rem;
		text-align: center;
		padding-top: 0.066666rem;
	}
</style>