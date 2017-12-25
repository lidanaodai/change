<template>
  <div id="app">
    <!--  头部  -->
    <div id="header">
      <div class="back" @click="back()"></div>
      <div class="share" @click="phone()"></div>
      <div class="sms"></div>
    </div>
    
    <!-- 轮播 -->
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-if="arr.pic0"><img v-lazy="arr.pic0"/></swiper-slide>
      <swiper-slide v-if="arr.pic1"><img v-lazy="arr.pic1"/></swiper-slide>
      <swiper-slide v-if="arr.pic2"><img v-lazy="arr.pic2"/></swiper-slide>
      <swiper-slide v-if="arr.pic3"><img v-lazy="arr.pic3"/></swiper-slide>
      <swiper-slide v-if="arr.pic4"><img v-lazy="arr.pic4"/></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

    <!--  轮播下的三个圆  -->
    <div class="carrousel_bottom">
      <dl>
        <dt></dt>
        <dd>
          <p>100%</p>
          <p>正品保证</p>
        </dd>
      </dl>

      <dl>
        <dt></dt>
        <dd>
          <p>100%</p>
          <p>正品保证</p>
        </dd>
      </dl>

      <dl>
        <dt></dt>
        <dd>
          <p>100%</p>
          <p>正品保证</p>
        </dd>
      </dl>

      <span class=""></span>
    </div>


    <!--  商品介绍  -->
    <div class="introduce">
      <div class="top">
        <div class="left">
          {{arr.goodsname}}
        </div>
        <dl class="right">
          <dt></dt>
          <dd style="color:#999" @click="phone()">客服</dd>
        </dl>
      </div>

      <!--  商品价格  -->
      <div class="money">
        <p><span>￥</span>{{arr.price}}</p>
        <p>市场价<span>{{arr.parameter}}</span></p>
      </div>

      <!-- 商品底部 -->
      <div class="bottom">
        <p>运费 ￥{{arr.stock}}</p>
        <p>销量 2046</p>
        <span>保税区</span>
      </div>
    </div>


    <!-- 向上滑动看详情  -->
    <div class="look_details">
      <hr/>
      <h4>向上滑动看详情</h4>
    </div>

    <!--  选项卡  -->
    <!-- <div class="tabs"></div> -->
    <tabs1></tabs1>

    <!-- 底部 -->
    <div class="footer" >
      <!-- 进入购物车界面 -->
      <dl>
        <dt class="tu_left" @click="phone()"></dt>
        <dd>购物车</dd>
      </dl>

      <dl>
        <dt class="tu_right"></dt>
        <dd>收藏</dd>
      </dl>
      <div class="money_01" @click="add_shopcart()">加入购物车</div>
      <div class="money_02" @click="buy()">立即购买</div>
    </div>

    <div style="width:100%; height: 1.28rem;"></div>

    <!-- 立即购买的底部弹出框 -->
    <div id="alert" v-if="show">
      <div class="buy_footer">
        <div class="buy_top">
          <div class="img"><img src="../../../../img/01_shopping/detail_tabs1_03.jpg"></div>

          <p class="p1">Metabolic酵素x酵母精华粒 减肥排毒 60粒</p>
          <p class="p2">￥219.00</p>
          <div class="buy_back" @click="buy_back()"></div>
        </div>
        <div class="buy_center">
          <div>购买数量</div>
          <button id="jian">-</button>
          <input type="text" value="1" id="numb"/>
          <button id="jia">+</button>
        </div>
        <div class="buy_bottom" @click="toshopcart()">
          确定
        </div>
      </div>
    </div>

    <!-- 加入购物车 -->
    <div id="alert_success" v-if="show1">
      <div class="alert_img"></div>
      <p class="alert_p">已成功添加至购物车~</p>
    </div>

  </div>
</template>

<script>
  // swiper options example
  import tabs from "./details_tabs.vue"
  import axios from "axios"
  export default {
    name: 'carrousel',
    data() {
      return {
        arr:[],
        notNextTick: true,
        swiperOption: {
          autoplay: 3000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
        },

        show:false,
        show1:false,
        divshow:false
      }
    },

    components:{
      "tabs1":tabs
    },

    methods:{
      // 返回上一页
      back(){
        this.$router.go(-1)
      },

      // 点击立即购买显示底部弹出框
      buy(){
        this.show = true
      },

      // 弹出框右上角返回上一级按钮
      buy_back(){
        this.show = false
      },

      // 点击加入购物车，页面显示成功加入购物车
      add_shopcart(){
        this.show1=true

        let that = this 
        if(this.show1==true){
          setTimeout(function(){
            that.show1 = false
          },2000)
        }
      },

      // 点击客服，弹出弹出框
      phone(){
        alert("该功能尚未开启，敬请期待")
      },

      // 点确认购买按钮，跳到确认订单页面
      toshopcart(){
       this.$router.push({path:"/footer"})
      },

      // 进入购物车界面
      to_shopcar(){
        alert("该功能尚未开启，敬请期待")
      },

      // 显示隐藏选项卡
      handleScroll () {
        // 判断滚轮距离顶部430px显示，否则隐藏
        if (document.documentElement.scrollTop + document.body.scrollTop > 430) {
        this.divshow = true;
        }
        else {
        this.divshow = false;
        }
      }
    },

    mounted(){
      // 监听滚轮事件
      window.addEventListener('scroll', this.handleScroll);
    },

    created(){
      window.scrollTo (0,0);

      var url="http://114.55.249.153:8028/goods/getModelById?id="+this.$route.query.id;
      axios.get(url).then((res)=>{
        this.arr = res.data.data
        console.log(this.arr)
      })
    }

  }
</script>

<style scoped="scoped">
  #app{
    width: 100%;
    background-color: #f1f1f1;
    position: absolute;
    z-index: 999999999;
    margin-top: -1.173333rem;
  }

  p{
    color: #333;
    text-shadow: 1px 1px 1px 1px #999;
    font:bold 1px/1.5em "Microsoft YaHei";
  }

  /* 头部固定 */
  #header{
    width: 100%;
    height: 1.173333rem;
    background:red;
    position: fixed;
    top: 0;
    left: 0; 
    z-index: 9999999999;
  }

  #header .back{
    background:url(../../../../img/01_shopping/icon_2.png); 
    background-size:9.6rem 6.666667rem; 
    background-position: -0.36rem -2.4rem;
    width: 0.933333rem;
    height: 0.933333rem;
    margin-top: 0.12rem;
    margin-left: 0.266667rem;
    float: left;
  }

  #header .share{
    background:url(../../../../img/01_shopping/icon_2.png); 
    background-size:9.6rem 6.666667rem; 
    background-position: -1.666667rem -2.4rem;
    width: 0.933333rem;
    height: 0.933333rem;
    margin-top: 0.12rem;
    margin-left: 6.4rem;
    float: left;
  }

  #header .sms{
    background:url(../../../../img/01_shopping/icon_2.png); 
    background-size:9.6rem 6.666667rem; 
    background-position: -3.2rem -2.4rem;
    width: 0.933333rem;
    height: 0.933333rem;
    margin-top: 0.12rem;
    margin-left: 0.266667rem;
    float: left;
  }

  /* 轮播 */
  .swiper-container{
    width: 100%;
    height: 10.0rem;
  }
  
  .swiper-slide{
    width: 100%;
    height: 100%;
  }
  
  img{
    width: 100%;
    height: 100%;
  }

  /* 轮播下的三个圆 */
  .carrousel_bottom{
    width: 100%;
    height: 1.066667rem;
    background-color: #f9f9f9;
    border-bottom: 1px solid #ddd;
  }

  .carrousel_bottom dl{
    padding-top: 0.2rem;
    float: left;
  }

  .carrousel_bottom dl dt{
    width: 0.666667rem;
    height: 0.666667rem;
    background:url(../../../../img/01_shopping/icon_2.png); 
    background-size:9.6rem 6.666667rem; 
    float: left;
  }

  .carrousel_bottom dl dd{
     float: left;
  }

  .carrousel_bottom dl dd p{
    margin:0; 
    line-height: 0.333333rem;
    margin-left: 0.2rem;
  }

  .carrousel_bottom dl:nth-child(1){
    margin-left: 0.48rem;
  }

  .carrousel_bottom dl:nth-child(1) dt{
    
    background-position: -2.773333rem -0.653333rem;
   
  }

  .carrousel_bottom dl:nth-child(2){
    margin-left: 1.0rem;
  }

  .carrousel_bottom dl:nth-child(2) dt{
    
    background-position: -3.626667rem -0.653333rem;
   
  }

  .carrousel_bottom dl:nth-child(3){
    margin-left: 1.0rem;
  }

  .carrousel_bottom dl:nth-child(3) dt{
    
    background-position: -4.56rem -0.653333rem;
   
  }

  .carrousel_bottom span{
    width: 0.293333rem;
    height: 0.48rem;
    background:url(../../../../img/01_shopping/icon_2.png); 
    background-size:9.6rem 6.666667rem; 
    background-position: -5.586667rem -0.653333rem;
    float: left;
    margin-top: 0.293333rem;
    margin-left: 0.933333rem;
  }

  /* 商品介绍 */
  .introduce{
    width: 100%;
    height: 4.266667rem;
    margin-top: 0.133333rem;
    background:#fff; 
    border-top: 1px solid #ddd;
    padding: 0.266667rem 0.0rem 0.2rem 0.266667rem;
  }

  .introduce .top .left{
    width: 8.0rem;
    height: 1.066667rem;
    border-right: 1px solid #ddd;
    padding-right: 1.066667rem; 
    color: #333;
    text-shadow: 1px 1px 1px 1px #999;
    font:bold  0.426667rem/1.5em "Microsoft YaHei";
    line-height: 0.466667rem;
    float: left;
  } 

  .introduce .top .right{
    float: left;
  }

  .introduce .top .right dt{
    width: 0.6rem;
    height: 0.6rem;
    background:url(../../../../img/01_shopping/icon_2.png); 
    background-size:9.6rem 6.666667rem; 
    background-position: -0.56rem -1.613333rem;
    margin-left:0.506667rem; 
  }

  .introduce .top .right dd{
    font-size: 0.293333rem;
    margin-left: 0.49rem;
  }

  /* 商品价格 */
  .introduce .money{
    width: 100%;
    height: 1.6rem;
    border-bottom: 1px solid #ddd;
    margin-top: 1.466667rem;
  }

  .introduce .money p{
    margin:0;
  }

  .introduce .money p:nth-child(1){
    font-size: 0.506667rem;
    color: #ff7200;
  }

  .introduce .money p:nth-child(1) span{
    font-size: 0.373333rem;
  }

  .introduce .money p:nth-child(2){
    color: #999;
    font-size: 0.346667rem;
  }

  .introduce .money p:nth-child(2) span{
    text-decoration:line-through;
    margin-left:0.186667rem;
  }

  /* 商品底部 */
  .introduce .bottom{
    width: 100%;
    
  }

  .introduce .bottom p{
    float: left;
    color: #bfbfbf;
    margin-top: 0.346667rem;
  }

  .introduce .bottom p:nth-child(2){
    margin-left:2.293333rem; 
  }

  .introduce .bottom span{
    float: left;
    color: #f38873;
    margin-left:3rem; 
    padding: 0.08rem 0.2rem;
    border:1px solid #f38873;
    border-radius: 0.133333rem;
    margin-top:0.2rem;
  }

  /* 向上滑看详情 */
  #app .look_details{
    position: relative;
  }
  
  #app .look_details hr{
    margin-left: 0.266666rem;
    margin-right: 0.266666rem;
    background: #ccc;
    height: 1px; 
    margin-top: 0.46rem; 
    margin-bottom: 0.46rem;
  }
  
  #app .look_details h4{
    position: absolute;
    top: -0.36rem;
    left: 50%;
    width: 3.04rem;
    background: #f1f1f1;
    text-align: center;
    color: #999;
    margin-left: -1.52rem;
    font-size: 0.346667rem;
  }

  /* 底部 */
  .footer{
    width: 100%;
    height: 1.28rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999999999;
  }

  .footer dl{
    width: 1.733333rem;
    height: 100%;
    border-right:1px solid #ddd; 
    float: left;
  } 

  .footer .tu_left{
    width:1.04rem;
    height: 0.72rem;
    margin-top: 0.093333rem;
    margin-left:0.506667rem; 
    background:url(../../../../img/01_shopping/icon_2.png); 
    background-size:9.6rem 6.666667rem; 
    background-position: -1.4rem -1.6rem; 
  }

  .footer .tu_right{
    width:0.64rem;
    height: 0.64rem;
    margin-top: 0.16rem;
    margin-left:0.533333rem; 
    background:url(../../../../img/01_shopping/icon_2.png); 
    background-size:9.6rem 6.666667rem; 
    background-position: -2.64rem -1.6rem; 
  }

  .footer dl dd{
    text-align: center;
    color: #999;
    margin-top: 0.066667rem;
  }

  .footer .money_01{
    width: 3.266667rem;
    height: 100%;
    background: #ff6060;
    float: left;
    font-size: 0.4rem;
    text-align: center;
    line-height: 1.28rem;
    color: #fff;
  }

  .footer .money_02{
    width: 3.266667rem;
    height: 100%;
    background: #ca3232;
    float: left;
    font-size: 0.4rem;
    text-align: center;
    line-height: 1.28rem;
    color: #fff;
  }

  /* 弹出遮盖层 */
  #alert{
    width: 100%;
    height: 100vh;
    background:rgba(33,33,33,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999999999999;
  }

  /* 底部样式 */

  #alert .buy_footer{
    width: 100%;
    height: 6.0rem;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #alert .buy_top{
    width: 100%;
    height: 2.866667rem;
    border-bottom: 1px solid #ccc;
  }

  #alert .buy_top .img{
    width: 2.8rem;
    height: 2.8rem;
    position: absolute;
    left: 0.533333rem;
    top: -0.453333rem
  }

  #alert .buy_top .img img{
    width: 100%;
    height: 100%;
  }

  #alert .buy_top p{
    width: 4.6rem;
    height: 0.746667rem;
    margin-left: 3.626667rem;
    display: inline-block;
  }

  #alert .buy_top .p1{
    font-size: 0.293333rem;
    line-height: 0.4rem;
    margin-top: 0.64rem;
  }

  #alert .buy_top .p2{
    font-size: 0.453333rem;
    color: #ca3232;
  }

  #alert .buy_top .buy_back{
    width: 0.546667rem;
    height: 0.546667rem;
    background:url(../../../../img/01_shopping/icon_2.png);
    background-size: 10.0rem 6.666667rem;
    background-position: -4.777rem -2.4rem;
    float: left;
    margin-left: 9.066667rem;
    margin-top: -2.133333rem;
  }

  #alert .buy_center{
    width: 100%;
    height: 1.866667rem;
    border-bottom: 1px solid #ccc;
  }

  #alert .buy_center>div{
    float: left;
    font-size: 0.4rem;
    margin-top: 0.666667rem;
    margin-left: 0.533333rem;
  }

  #alert .buy_center #numb{
    width: 1.333333rem;
    height: 0.8rem;
    background: #e6e6e6;
    border:none;
    text-align: center;
    line-height: 0.8rem;
    float: left;
    margin-top: 0.666667rem;
  }

  #alert .buy_center #jian{
    width: 0.826666rem;
    height: 0.8rem;
    background: #f7f7f7;
    border-radius: 0.133333rem 0rem 0rem 0.133333rem;
    border: none;
    float: left;
    margin-top: 0.666667rem;
    margin-left: 4.613333rem;
  }
  #alert .buy_center #jia{
    width: 0.826666rem;
    height: 0.8rem;
    background: #e6e6e6;
    border-radius: 0rem 0.133333rem 0.133333rem 0rem;
    border: none;
    float: left;
    margin-top: 0.666667rem;
  }

  #alert .buy_bottom{
    width: 100%;
    height: 1.306667rem;
    background: #ca3232;
    text-align: center;
    line-height: 1.306667rem;
    color: #fff;
    font-size: 0.48rem;
    letter-spacing: 0.133333rem;
  }

  /*加入购物车*/
  /* 弹出框 */
  #alert_success{
    width: 6.533333rem;
    height: 2.8rem;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -3.266666rem;
    margin-top: -1.4rem;
    border-radius: 0.2rem;
    z-index: 99999;
  }

  #alert_success .alert_img{
    width: 0.72rem;
    height: 0.573333rem;
    background:url(../../../../img/01_shopping/icon_2.png); 
    background-size:9.6rem 6.666667rem; 
    background-position: -5.44rem -2.413333rem;
    margin-top: 1.093333rem;
    margin-left: 0.573333rem;
    float: left;
  }

  #alert_success .alert_p{
    float: left;
    font-size: 0.426667rem;
    color: #fff;
    margin-left: 0.333333rem;
    margin-top: 1.093333rem;
  }

</style>
