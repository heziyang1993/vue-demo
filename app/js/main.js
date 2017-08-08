//引入Vue框架及各模块
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import axios from "axios";

//加载全局css
import Common from '../css/common.css';


//加载iconfont
import "../iconfont/iconfont.css";


//加载各模块
Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(MuseUI);
Vue.use(VueAwesomeSwiper);
//挂载axios在Vue构造器下
Vue.prototype.$ajax = axios;


//引入各组件
//主页面组件
import home from '../components/routes/home.vue';
//分类页面组件
import classify from '../components/routes/classify.vue';

import wside from '../components/wSide.vue';
import whotclassify from "../components/whotclassify.vue";
import wclassify01 from "../components/wclassify01.vue";
import wfood from "../components/wfood.vue";
import wgoods from "../components/wgoods.vue";
import wbeauty from "../components/wbeauty.vue";
import whomeclear from "../components/whomeclear.vue";
import whomebed from "../components/whomebed.vue";
import wbaby from "../components/wbaby.vue";
import wphone from "../components/wphone.vue";
import welectric from "../components/welectric.vue";
//搜索页面组件
import search from '../components/routes/search.vue';
import hotsearch from '../components/wsearchHot.vue';
//详情页组件
import detail from '../components/routes/detail.vue';
import detailInfo from '../components/wdetailContent.vue';
import detailComment from '../components/wcomment.vue'
//商品列表组件
import list from '../components/routes/list.vue';
import searchlist from '../components/wsearchList.vue';
//个人信息组件
import mine from '../components/routes/mine.vue';
//登录组件
import login from '../components/routes/login.vue';
//注册组件
import register from '../components/routes/register.vue';
//个人收藏组件
import myfavorite from '../components/routes/myfavorite.vue';
//浏览记录组件
import myhistory from '../components/routes/myhistory.vue';
//详细信息组件
import myinfo from '../components/routes/myinfo.vue';
//地址管理组件
import myaddress from '../components/routes/myaddress.vue';
//新增地址组件
import addaddress from '../components/routes/addaddress.vue';
//新增曾经购买组件
import bought from '../components/routes/bought.vue';
//新增帮组中心组件
import helpcenter from '../components/routes/helpcenter.vue';


//购物车组件
import buycar from '../components/routes/buycar.vue';

//城市列表
import home_index from '../components/routes/home_index.vue';
import citylist from '../components/routes/citylist.vue';
import detailDetail from '../components/routes/detailDetail.vue';
//定义路由
var router = new VueRouter({

	routes: [{
		path: '/index',
		component: home_index,
		children: [{
			path: 'citylist',
			component: citylist
		}, {
			path: 'home',
			component: home
		}]
	}, {
		path: '/buycar',
		component: buycar,
		meta: {
			requireAuth: true
		}
	}, {
		path: '/classify',
		component: classify,
		children: [{
			path: 'list',
			component: wside,
			children: [{
				path: "whotclassify",
				component: whotclassify
			}, {
				path: "wclassify01",
				component: wclassify01
			}, {
				path: "wfood",
				component: wfood
			}, {
				path: "wgoods",
				component: wgoods
			}, {
				path: "wbeauty",
				component: wbeauty
			}, {
				path: "whomeclear",
				component: whomeclear
			}, {
				path: "whomebed",
				component: whomebed
			}, {
				path: "wbaby",
				component: wbaby
			}, {
				path: "wphone",
				component: wphone
			}, {
				path: "welectric",
				component: welectric
			}]
		}]
	}, {
		path: '/search',
		component: search,
		children: [{
			path: 'hotsearch',
			component: hotsearch
		}, {
			path: 'searchlist',
			component: searchlist
		}]
	}, {
		path: '/detail',
		component: detail,
		children: [{
			path: 'detailInfo',
			component: detailInfo,
		}, {
			path: 'detailComment',
			component: detailComment,
		}, {
			path: 'detailDetail',
			component: detailDetail,
		}]
	}, {
		//个人信息路由
		path: '/mine',
		component: mine
	}, {
		path: '/list',
		component: list
	}, {
		//登录路由
		path: "/login",
		component: login,
	}, {
		//注册路由
		path: "/register",
		component: register,
	}, {
		//个人收藏路由
		path: "/myfavorite",
		component: myfavorite,
		meta: {
			requireAuth: true
		}
	}, {
		//浏览记录路由
		path: "/myhistory",
		component: myhistory,
		meta: {
			requireAuth: true
		}
	}, {
		//详细信息路由
		path: "/myinfo",
		component: myinfo,
		meta: {
			requireAuth: true
		}
	}, {
		//地址管理路由
		path: "/myaddress",
		component: myaddress,
		meta: {
			requireAuth: true
		}
	}, {
		//新增地址路由
		path: "/addaddress",
		component: addaddress,
		meta: {
			requireAuth: true
		}
	}, {
		//新增曾经购买路由
		path: "/bought",
		component: bought,
		meta: {
			requireAuth: true
		}
	}, {
		//新增帮助中心路由
		path: "/helpcenter",
		component: helpcenter,
		meta: {
			requireAuth: true
		}
	}, {
		path: '/',
		redirect: '/index/home'

	}]
});

//定义路由拦截
router.beforeEach((to, from, next) => {
	if (to.matched.some(res => res.meta.requireAuth)) {
		if (localStorage.getItem("username")) {
			next();
		} else {
			next({
				path: "/login",
				query: {
					redirect: to.fullPath
				}
			})
		}
	} else {
		next();
	}
})

//定义状态管理
var store = new Vuex.Store({
	state: {
		swiperOption: {
			autoplay: 3000,
			setWrapperSize: true,
			pagination: '.swiper-pagination',
			paginationClickable: true,
			mousewheelControl: true,
			observeParents: true,
			autoplayDisableOnInteraction: false,
			myfavoriteTab: ""
		},
		swiperSlides: [],
		promotion_goods: [],
		hotGoods: ["底妆", "眼妆", "抽纸", "休闲食品", "凉席", "面膜", "洗发水", "沐浴露", "身体乳", "洁面乳", "喷雾", "进口牛奶"],
		// 购物车总价格计算
		totalPrice: 0,
		location_city: '北京',
		//状态管理码，如果为1则不弹出城市确认框
		location_status: 0,
		isShowGrallery: false,
		imgUrl: null,
		// 是否包邮控制器
		ispostage: false,
		isActive: false,
		//		currentCity:'',
		classifyList: [],
		//保存进去详情页之前的路由，用以跳转回原先的页面
		prePath: '',
		//list_goods
		list_goods: [],
		//跳转状态码
		path_status: 0,
		//模糊查询请求的数据
		goods_search: null,
		//商品分类历史页面数量
		classifyHistoryNum: 1
	},
	mutations: {
		swiperTop(state, data) {
			state.swiperSlides = data;
		},
		promotion_goods_m(state, data) {
			state.promotion_goods = data;

		},
		promotion_goods_l(state, data) {
			state.promotion_goods = state.promotion_goods.concat(data);
		},
		getCity(state, data) {
			state.location_city = data;
		},
		isActives(state) {
			state.isActive = true;
		},
		isNotActives(state) {
			state.isActive = false;
		},
		//触发保存进去详情页之前的路由，用以跳转回原先的页面
		prePath(state, data) {
			state.prePath = data;
		},
		//		getcurrentCity(state,data){
		//			state.currentCity = data;
		//		}
		classifyList(state, data) {

			state.classifyList = state.classifyList.concat(data);
		},

	},
	actions: {
		swiperTop(context, data) {
			context.commit('swiperTop', data)
		},
		promotion_goods_m(context, data) {
			context.commit('promotion_goods_m', data)
		},
		promotion_goods_l(context, data) {
			context.commit('promotion_goods_l', data)
		},
		getCity(context, data) {
			context.commit('getCity', data)
		},
		isActives(context, data) {
			context.commit('isActives')
		},
		isNotActives(context) {
			context.commit('isNotActives')
		},
		prePath(context, data) {
			context.commit('prePath', data)
		},
		//		getcurrentCity(context,data){
		//			context.commit('getcurrentCity',data)
		//		}
		//列表页数据
		classifyList(context, data) {
			context.commit('classifyList', data)
		},

	}
});

//实例化vue对象
new Vue({
	el: '#container',
	store,
	router,
	template: '<router-view></router-view>',
	data: {
		username: ""
	},
	mounted() {
		//获取cookie中的用户名
		var str = document.cookie;
		var arr = str.split("; ");
		arr.forEach((item) => {
			var arr2 = item.split("=");
			if (arr2[0] == "username") {
				this.username = arr2[1];
			}
		})
		
		//判断cookie中有无用户信息、如无则删除localStorage中的用户信息
		if (this.username) {
			localStorage.setItem("username", this.username);
		} else {
			localStorage.removeItem("username");
		}
	}
})