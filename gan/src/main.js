import Vue from 'vue'
import App from './App.vue'

//引用muse-ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)
//引用mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//引用swiper
require('swiper/dist/css/swiper.css')
var VueAwesomeSwiper = require('vue-awesome-swiper')
Vue.use(VueAwesomeSwiper)

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    error:'图片未找到',
    loading:'./src/img/loging.gif',
})

import { Checklist } from 'mint-ui';
Vue.component(Checklist.name, Checklist);

import shopping from './com/main/01_shopping/index.vue';
import shopCart from './com/main/02_shopCart/index.vue';
import shop from './com/main/03_shop/index.vue';
import personal from './com/main/04_personal/index.vue';
// 本月推荐的详情页
import re_details from './com/main/01_shopping/details/04_re_details.vue';
// 本周主打的详情页
import ld_details from './com/main/01_shopping/details/03_ld_details.vue';
// 家庭套装的详情页
import suit_details from './com/main/01_shopping/details/05_suit_details.vue';
// 新品上架的详情页
import list_01_details from './com/main/01_shopping/details/list_01_details.vue';
// 减肥瘦身的详情页
import list_03_details from './com/main/01_shopping/details/list_03_details.vue';
// 不同商品的详情页
import details from './com/main/01_shopping/details/details.vue';
//指购物车的订单确认
import footer from './com/main/02_shopCart/footer.vue';
//登录
import login from './com/main/05_login/index.vue';
//同上
import loginPage from './com/main/05_login/loginPage.vue';
//地址选择
import change from './com/main/02_shopCart/change/change.vue';
import news from './com/main/02_shopCart/edites/news.vue';
//确认支付的界面
import sell from './com/main/02_shopCart/sell/sell.vue';
//找回密码界面
import findpass from './com/main/05_login/findpass.vue';
import findpass2 from './com/main/05_login/findpass2.vue';
import findpass3 from './com/main/05_login/findpass3.vue';

var router = new VueRouter({
	mode: 'history',
	routes:[
		{path:"/",redirect:"shopping"},
		{path:"/shopping",component:shopping},
		{path:"/shopCart",component:shopCart},
		{path:"/shop",component:shop},
		{path:"/personal",component:personal},
		// 主页
		{path:"/re_details",component:re_details},
		{path:"/ld_details",component:ld_details},
		{path:"/suit_details",component:suit_details},
		// 八个列表
		{path:"/list_01_details",component:list_01_details},
		{path:"/list_03_details",component:list_03_details},
		// 不同商品的详情
		{path:"/details",component:details},
		//购物车
		{path:"/footer",component:footer},
		//确认支付
		{path:"/sell",component:sell},
		{path:"/change",component:change},
		{path:"/news",component:news},
		//登录界面
		{path:"/login",component:login},
		{path:"/loginPage",component:loginPage},
		//找回密码界面
		{path:"/findPass",component:findpass},
		{path:"/findPass2",component:findpass2},
		{path:"/findPass3",component:findpass3},


	]
})

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
