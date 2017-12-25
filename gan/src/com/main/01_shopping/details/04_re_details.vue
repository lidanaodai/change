<template>
  <div id="app">
    <!--  头部  -->
    <div id="header">
      <span class="fh_icon"></span>
      <p @click="back()">返回</p>
      <h3>本月推荐</h3>
      <span id="sp2">

      </span>
    </div>
    <div style="width:100%; height: 1.173333rem;"> </div>

    <!-- 主体 -->
    <div id="main">
      <dl v-for="data in arr">
        <dt @click="todetails()">
          <img v-lazy="data.img">
        </dt>
        <dd>
          <p>{{data.title}}</p>
          <p>￥{{data.newmoney}}</p>
          <p>市场价 <span style="">￥{{data.oldmoney}}</span></p>
          <p><span>{{data.type}}</span><span>{{data.gmrs}}人购买</span></p>
          <div class="img" @click="alert()"></div>
        </dd>
      </dl>

      <div id="alert" v-if="show">
        <div class="alert_img"></div>
        <p class="alert_p">已成功添加至购物车~</p>
      </div>
    </div>

    
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'app',
  data () {
    return {
     show:false,
     arr:[]
    }
  },

  methods:{
    back(){
      this.$router.go(-1)
    },

    alert(){
      this.show=true

      let that = this 
      if(this.show==true){
        setTimeout(function(){
          that.show = false
        },2000)
      }
    },

    todetails(){
      this.$router.push({path:"/details"})
    }
  },

  created(){
      var url="./src/com/main/json/04_re_details.json"
      axios.get(url).then((res)=>{
          console.log(res.data)
          this.arr = res.data
      })

  }
}
</script>

<style scoped="scoped">
  #app{
    width: 100%;
    height: 100vh;
    background-color: #f1f1f1; 
    z-index: 9999999999;
    position: fixed;
    top: 0;
    left: 0;
  }

  p{
    color: #333;
    text-shadow: 1px 1px 1px 1px #999;
    font:bold 12px/1.5em "Microsoft YaHei";
  }

  #header{
    width: 100%;
    height: 1.173333rem;
    background: #d24aff;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.266667rem;
  }

  #header span:nth-child(1){
    float: left;
    font-size: 0.52rem;
    color: #fff;
  }

  #header .fh_icon{
    width: 0.333333rem;
    height: 0.613333rem;
    background:url(../../../../img/01_shopping/icon.png);
    background-size: 9.6rem 17.066667rem;
    background-position: -0.36rem -0.373333rem;
    margin-top:0.066667rem; 
  }

  #header p{
    float: left;
    margin:0; 
    margin-left: 0.066667rem;
    font-size: 0.426667rem;
    margin-top: 0.04rem;
    color: #fff;
    font-weight: normal;
  }

  #header h3{
    float: left;
    margin:0; 
    margin-left: 2.333333rem;
    text-shadow: 1px 1px 1px 1px #999;
    font:bold 0.48rem/1.5em "Microsoft YaHei";
    color: #fff;
  }

  #header #sp2{
    float: right;
    /*margin-left: 2.333333rem;*/
    font-size: 0.48rem;
    color: #fff;
    width: 0.746667rem;
    height: 0.72rem;
    background:url(../../../../img/01_shopping/icon.png);
    background-size: 9.6rem 17.066667rem;
    background-position: -4.72rem -1.373333rem;
    margin-right: -0.12rem;
    margin-top: -0.08rem;

  }

  /* 中间 */
  #main dl{
    width: 100%;
    height: 4.8rem;
    border-bottom:1px solid #ddd;
    padding: 0.266667rem;
    margin:0; 
    background:#fff; 
  }

  #main dl dt{
    width: 4.266667rem;
    height: 100%;
    border:1px solid #ddd;
    float: left;
  }

  /* 三个图片 */
  #main dl:nth-child(1) dt img{
    width: 3.4rem;
    height: 2.733333rem;
    margin-left: 0.506667rem;
    margin-top: 1.12rem;
  }

  #main dl:nth-child(2) dt img{
    width: 2.466667rem;
    height: 3.466667rem;
    margin-left: 0.906667rem;
    margin-top: 0.48rem;
  }

  #main dl:nth-child(3) dt img{
    width: 1.933333rem;
    height: 3.6rem;
    margin-top: 0.346667rem;
    margin-left: 1.146667rem;
  }

  #main dl dd{
    float: left;
    margin-left: 0.333333rem;
  }

  #main dl dd p{
    margin-bottom: 0.066667rem;
  }

  #main dl dd p:nth-child(1){
    width: 4.373333rem;
    height: 0.96rem;
    font-size: 0.34rem;
  }

  #main dl dd p:nth-child(2){
    font-size: 0.426667rem;
    color: #ff7200;
    margin-bottom: 0.066667rem;
    margin-top:0.133333rem; 
  }

  #main dl dd p:nth-child(3){
    font-size: 0.32rem;
    color: #999;
    margin-top:0.133333rem; 
  }

  #main dl dd p:nth-child(4){
    margin-top:0.333333rem; 
  }

  #main dl dd p:nth-child(4) span:nth-child(1){
    font-size: 0.266667rem;
    color: #f38873;
    padding: 0.093333rem 0.213333rem 0.093333rem 0.266667rem;
    border:1px solid #f38873;
    border-radius: 0.133333rem;
  }

  #main dl dd p:nth-child(4) span:nth-child(2){
    font-size: 0.266667rem;
    color: #bbb;
    margin-left: 0.2rem;
  }

  #main dl dd .img{
    width: 1.08rem;
    height: 1.093333rem;
    margin-left: 3.773333rem;
    background:url(../../../../img/01_shopping/icon.png);
    background-size: 9.6rem 17.066667rem;
    background-position: -0.36rem -0.98rem;
  }

  /* 弹出框 */
  #alert{
    width: 6.533333rem;
    height: 2.8rem;
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -3.266666rem;
    margin-top: -1.4rem;
    border-radius: 0.2rem;
  }

  #alert .alert_img{
    width: 0.72rem;
    height: 0.573333rem;
    background:url(../../../../img/01_shopping/icon_2.png); 
    background-size:9.6rem 6.666667rem; 
    background-position: -5.44rem -2.413333rem;
    margin-top: 1.093333rem;
    margin-left: 0.573333rem;
    float: left;
  }

  #alert .alert_p{
    float: left;
    font-size: 0.426667rem;
    color: #fff;
    margin-left: 0.333333rem;
    margin-top: 1.093333rem;
  }

</style>
