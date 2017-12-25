<template>
  <div id="app">
    <div class="img1">
      <img src="../../../../img/01_shopping/detail_tabs1_01.jpg">
    </div>

    <div class="tu3">
      <div>
        <div class="top">合法</div>
        <p>海关备案</p>
      </div>

      <div>
        <div class="top">便捷</div>
        <p>闪电发货</p>
      </div>

      <div>
        <div class="top">安全</div>
        <p>售后保障</p>
      </div>
    </div>

    <!--  六个图  -->
    <div class="tu6">
      <div class="left">
        <div class="tu">正</div>
        <div class="wenzi">
          <p>100%原装正品</p>
          <p>所有商品海关正规渠道有售,承诺100%进口原装正品</p>
        </div>
      </div>
      <div class="right">
        <div class="tu">正</div>
        <div class="wenzi">
          <p>100%原装正品</p>
          <p>所有商品海关正规渠道有售,承诺100%进口原装正品</p>
        </div>
      </div>
    </div>

    <div class="tu6" style="background:#fff;">
      <div class="left">
        <div class="tu">正</div>
        <div class="wenzi">
          <p>100%原装正品</p>
          <p>所有商品海关正规渠道有售,承诺100%进口原装正品</p>
        </div>
      </div>
      <div class="right">
        <div class="tu">正</div>
        <div class="wenzi">
          <p>100%原装正品</p>
          <p>所有商品海关正规渠道有售,承诺100%进口原装正品</p>
        </div>
      </div>
    </div>

    <div class="tu6">
      <div class="left">
        <div class="tu">正</div>
        <div class="wenzi">
          <p>100%原装正品</p>
          <p>所有商品海关正规渠道有售,承诺100%进口原装正品</p>
        </div>
      </div>
      <div class="right">
        <div class="tu">正</div>
        <div class="wenzi">
          <p>100%原装正品</p>
          <p>所有商品海关正规渠道有售,承诺100%进口原装正品</p>
        </div>
      </div>
    </div>

    <!--  需求  -->
    <div class="demand">
      <div class="top"> 
        <div class="box">
          <p>平台合法，购物合法</p>
          <p>购物必须提供个人身份证号码</p>
          <p>为什么要身份证</p>
          <p>1、国家跨境电商法律法规要求消费者凭借身份信息购买海外产品</p>
          <p>2、从海关或者保税区发货，属于个人零售行为，提供身份证号是为了报关、发货需求。</p>
          <p>3、提供个人身份信息，能享受个人行邮税免税额度并且便于为您的订单提供单独报关单据。</p>
        </div>
      </div>
      <div class="bottom">
        <p>收货信息必须为:真是姓名，并且提供真实身份证号码</p>
        <p>您可以直接联系卖家提供相关信息，或者在下单 时留言备注身份信息</p>
        <p>下单后地址无法修改，请您慎重填写</p>
      </div>
    </div>
    <!-- 底部图片 -->
    <div class="tu_bottom">
      <img src="../../../../img/01_shopping/detail_tabs1_02.jpg">
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped="scoped">
  #app{
    width: 100%;
    /*height: .666667rem;*/
    background-color: #fff; 
  }
  /* 第一张图 */
  #app .img1{
    padding-top: 0.133333rem;
    width: 100%;
    height: 5.0rem;
  }

  #app .img1 img{
    width: 100%;
    height: 100%;
  }

  /* 三个图 */
  .tu3{
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 2.066667rem;
    border-bottom:1px solid #fc3961;
  }

  .tu3>div{
    width: 33.3333333333%;
    height: 100%;
  }

  .tu3>div .top{
    width: 1.0rem;
    height: 1.0rem;
    border-radius: 50%;
    background:#ffa2a2;
    text-align: center;
    line-height: 1.0rem;
    font-size: 0.293333rem;
    color: #fff; 
    margin-top: 0.24rem;
    margin-left:1.1666rem; 
  }

  .tu3>div p{
    margin-top: 0.133333rem;
    text-align: center;
    color: #454545;
    font-size: 0.293333rem;
  }

  /* 六张图 */
  .tu6 {
    width: 100%;
    height: 2.133333rem;
    display: flex;
    justify-content: space-between;
    background: #eee;
  }

  .tu6>div{
    width: 50%;
    height: 100%;
  }

  .tu6 .left .tu{
    width: 1.0rem;
    height: 1.0rem;
    background: #ffa2a2;
    border-radius: 50%;
    margin-top: 0.56rem;
    margin-left:0.266667rem; 
    float: left;
    font-size: 0.426667rem;
    text-align: center;
    line-height: 1.0rem;
    color: #fff;
  }

  .tu6  .wenzi{
    margin-top: 0.4rem;
    margin-left:0.026667rem; 
    float: left;
    width: 3.4rem;
    height: 100%;
  }

  .tu6  .wenzi p{
    margin:0;
  }

  .tu6  .wenzi p:nth-child(1){
    font-size: 0.346667rem;
    color: #565656;
  }

  .tu6  .wenzi p:nth-child(2){
    font-size: 0.213333rem;
    line-height: 0.333333rem;
    color: #646464;
  }
  
  .tu6 .right .tu{
    width: 1.0rem;
    height: 1.0rem;
    background: #ffa2a2;
    border-radius: 50%;
    margin-top: 0.56rem;
    margin-left:0.266667rem; 
    float: left;
    font-size: 0.426667rem;
    text-align: center;
    line-height: 1.0rem;
    color: #fff;
  }

  /* 需求 */
  .demand{
    width: 100%;
    height: 6.933333rem;
    background: #fff;
  }

  .demand .top{
    width: 100%;
    height: 5.333333rem;
    border-bottom: 1px solid #fe204d;
    padding: 0.333333rem 0.493333rem;
  }

  .demand .top .box{
    width: 100%;
    height: 100%;
    background: #ff325d;
  }

  .demand .top .box p{
    margin:0; 
    font-size: 0.293333rem;
    color: #fff;
  }

  .demand .top .box p:nth-child(1){
    text-align: center;
    padding-top: 0.266667rem;
    font-size: 0.426667rem;
  }
  .demand .top .box p:nth-child(2){
    text-align: center;
    font-size: 0.426667rem;
  }

  .demand .top .box p:nth-child(3){
    margin-left:0.426667rem; 
    margin-top: 0.253333rem;
  }

  .demand .top .box p:nth-child(4){
    margin-left:0.426667rem; 
  }

  .demand .top .box p:nth-child(5){
    margin-left:0.426667rem; 
  }

  .demand .top .box p:nth-child(6){
    margin-left:0.426667rem; 
  }

  .demand .bottom{
    width: 100%;
    height: 1.573333rem;
    background: #eee;
    border-top: 1px solid #feafbf;
  }

  .demand .bottom p{
    text-align: center;
    margin:0;  
    color: #f94570;
    font-size: 0.293333rem;
    margin-top: 0.04rem;
  }

  /* 底部图片 */
  .tu_bottom{
    width: 100%;
    height: 10.933333rem;
  }

  .tu_bottom img{
    width: 100%;
    height: 100%;
  }

  
</style>
