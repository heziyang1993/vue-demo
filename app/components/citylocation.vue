<template>
	<div>
		<!-- <div id="citylocation" v-show="citylocation_isShow">
			<p>检测到当前的城市为{{currentCity}},<br />是否切换?</p>
			<button @click='citylocation_true'>是</button>
			<button @click='citylocation_false'>否</button>
		</div> -->
		<div class="shield_home" v-show="citylocation_isShow"></div>

		<mu-dialog :open="citylocation_isShow" title="系统提示">
			<p>检测到当前的城市为{{currentCity}},<br />是否切换?</p>
			<mu-flat-button class="changeTips" slot="actions" @click="citylocation_false" primary label="取消"/>
			<mu-flat-button class="changeTips" slot="actions" primary @click="citylocation_true" label="确定"/>
		</mu-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				citylocation_isShow: false,
				currentCity: ''

			}
		},
		computed: {
			getCitys() {
				return this.$store.state.location_city;
			}
		},
		mounted() {
			var self = this;
			if(this.$store.state.location_status === 0) {
				function myFun(result) {
					//城市名
					var cityName = result.name;
					self.currentCity = cityName;

					if(self.$store.state.location_city != cityName) {
						setTimeout(function() {
							self.citylocation_isShow = true;
						}, 5000)
					}
				}
				var myCity = new BMap.LocalCity();
				myCity.get(myFun);
			}

		},
		methods: {
			citylocation_true() {
				this.$store.dispatch('getCity', this.currentCity)
				this.citylocation_isShow = false;
			},
			citylocation_false() {
				this.citylocation_isShow = false;
			}
		}

	}
</script>

<style scoped>
	#citylocation {
		width: 3.333333rem;
		position: fixed;
		top: 50%;
		left: 50%;
		margin-top: -25%;
		margin-left: -30%;
		background: #fff;
		border-radius: 0.066666rem;
		font-size: 0.213333rem;
		z-index: 1001;
	}
	
	#citylocation p {
		width: 100%;
		text-align: center;
		line-height: 0.4rem;
		border: 0.013333rem solid #e5e5e5;
	}
	
	#citylocation button {
		width: 50%;
		height: 0.4rem;
		display: block;
		float: left;
		border: 0.013333rem solid #e5e5e5;
		color: #000;
		background:#fff
	}
	
	.shield_home {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: #E5E5E5;
		opacity: 0.4;
		z-index: 1000;
	}

	.changeTips{
		color:#d7063b;
	}
</style>