<template>
  <div id="app">
    <carousel1></carousel1>
    <list1></list1>
    <leading1></leading1>
    <recommend1></recommend1>
    <suit1></suit1>
    <list21></list21>
    <img src="../../../img/01_shopping/stick_icon.png" id="stick_icon" v-if="show" @click="backtop()">
    <!-- 头部列表轮播 -->
    <div id="top_carousel" v-if="show">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide>
          <dl>
            <dt class="dl1" @click="tolist_01()"></dt>
            <dd>新品上架</dd>
          </dl>
        </swiper-slide>

        <swiper-slide>
          <dl>
            <dt class="dl2"></dt>
            <dd>排毒养颜</dd>
          </dl>
        </swiper-slide>

        <swiper-slide>
          <dl >
            <dt class="dl3" @click="tolist_03()"></dt>
            <dd>减肥塑形</dd>
          </dl>
        </swiper-slide>

        <swiper-slide>
          <dl >
            <dt class="dl4"></dt>
            <dd>女士调理</dd>
          </dl>
        </swiper-slide>

        <swiper-slide>
          <dl >
            <dt class="dl5"></dt>
            <dd>运动营养</dd>
          </dl>
        </swiper-slide>

        <swiper-slide>
          <dl >
            <dt class="dl6"></dt>
            <dd>心血管健康</dd>
          </dl>
        </swiper-slide>

        <swiper-slide>
          <dl >
            <dt class="dl7"></dt>
            <dd>男士健康</dd>
          </dl>
        </swiper-slide>

        <swiper-slide>
          <dl >
            <dt class="dl8"></dt>
            <dd>精品套装</dd>
          </dl>
        </swiper-slide>
        
        <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      </swiper>

    </div>
    <div style="width: 100%; height: 1.306666rem;"></div>
  </div>
</template>

<script>
	import carousel from "./01_carousel.vue"
	import list from "./02_list.vue"
	import leading from "./03_leading.vue"
	import recommend from "./04_recommend.vue"
	import suit from "./05_suit.vue"
	import list2 from "./06_list2.vue"
export default {
  name: 'app',
  data () {
    return {
     show:false,
     swiperOption: {
          slidesPerView: 4.78,
          spaceBetween: 30,
          freeMode: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        }
    }
  },
  
  components:{
  	"carousel1":carousel,
  	"list1":list,
  	"leading1":leading,
  	"recommend1":recommend,
  	"suit1":suit,
  	"list21":list2
  },

  methods: {
    handleScroll () {
      // 判断滚轮距离顶部430px显示，否则隐藏
      if (document.documentElement.scrollTop + document.body.scrollTop > 430) {
      this.show = true;
      }
      else {
      this.show = false;
      }
    },

    backtop(){
        // body距离顶部，滑轮距离顶部，当其中一个不为0的时候，就回到顶部
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          // 动画 
        window.requestAnimationFrame(this.backtop);
        // 回到顶部
        window.scrollTo (0,currentScroll - (currentScroll/5));
        }
    },
    tolist_01(){
     this.$router.push({path:"/list_01_details"})
    },
    tolist_03(){
     this.$router.push({path:"/list_03_details"})
    }
  },

  mounted(){
    // 监听滚轮事件
    window.addEventListener('scroll', this.handleScroll);
  }

}
</script>

<style scoped="scoped">
  #stick_icon{
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    position: fixed;
    bottom: 1.6rem;
    right: 0.266667rem;
    z-index: 99999999999999999999;
  }

  /* 头部样式 */
  #top_carousel{
    width: 100%;
    height: 2.5rem;
    background: rgba(255,255,255,0.85);
    position: fixed;
    top: 1.18rem;
    left: 0;
    z-index: 999999;
    border-bottom: 1px #CCCCCC solid;
  }

  .swiper-slide{
    width: 2.133333rem !important;
    margin:0 !important; 
    padding:0; 
    height: 2.496667rem;
  }

  .swiper-wrapper{
    transition-duration: 0ms;
    transform: translate3d(50%, 0px, 0px);
    height: 1.75rem;
  }

  #top_carousel dl {
    width: 1.5rem;
    height: 1.75rem;
    margin-top: 0.266667rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem; 
  }

  #top_carousel dl dd{
    text-align: center;
    margin-top: 0.266667rem;
  }
  
  dl dt{
    width: 100%;
    height: 1.36rem;
    margin-left:0.09rem;
    background:url(../../../img/01_shopping/icon.png);
    background-size: 9.6rem 17.066667rem; 
  }

  .dl1{
    background-position: -0.36rem -3.186667rem;
  }

  .dl2{
    background-position: -2.173333rem -3.186667rem;
  }

  .dl3{
    background-position: -3.973333rem -3.186667rem;
  }

  .dl4{
    background-position: -5.773333rem -3.186667rem;
  }

  .dl5{
    background-position: -0.36rem -5.586667rem;
  }

  .dl6{
    background-position: -2.16rem -5.586667rem;
  }

  .dl7{
    background-position: -3.973333rem -5.586667rem;
  }

  .dl8{
    background-position: -5.773333rem -5.586667rem;
  }

  
  
</style>
