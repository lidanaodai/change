<template>
  <div id="app">
    <!--  头部  -->
    <div id="header">
      <span class="fh_icon"></span>
      <p @click="back()">返回</p>
      <h3>新品上架</h3>
      <span id="sp2">

      </span>
    </div>
    <div style="width:100%; height: 1.173333rem;"> </div>

    <div class="sort">
        <p @click="sales_sort()">销量</p>
        <p @click="price_sort()">价格</p>
      </div>

    <!-- 主体 -->
    <div id="main">
      

      <dl v-for="data in arr">
        <dt @click="todetails()">
          <img v-lazy="data.img">
        </dt>
        <dd>
          <p>{{data.title}}</p>
          <p>￥{{data.newmoney}}<span>￥{{data.oldmoney}}</span></p>
          <p>{{data.gmrs}}人购买</p>
          <p><span>{{data.type}}</span><span>运费 ￥{{data.freight}}</span></p>
        </dd>
      </dl>
    </div>

    
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'app',
  data () {
    return {
     arr:[]
    }
  },

  methods:{
    back(){
      this.$router.go(-1)
    },

    // 按销量排序
    sales_sort(){
      this.bool=!this.bool;
      this.arr.sort((a,b)=>{
        var x=a.gmrs;
        var y=b.gmrs;
          return this.bool==true?x-y:y-x
      })
    },
    // 按价格排序
    price_sort(){
      this.bool=!this.bool;
      this.arr.sort((a,b)=>{
        var x=a.newmoney;
        var y=b.newmoney;
          return this.bool==true?x-y:y-x
      })
    },

    todetails(){
      this.$router.push({path:"/details"})
    }

  },

  created(){
      var url="./src/com/main/json/list_01_details.json"
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
    background: #ca3232;
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
    background-position: -2.546667rem -1.346667rem;
    margin-right: -0.12rem;
    margin-top: -0.08rem;

  }

  /* 中间 */

  .sort{
    width: 100%;
    height: 1.2rem;
    border-bottom:1px solid #bbb;
    background:#fff;  
  }

  .sort p{
    width: 50%;
    height: 100%;
    border-right: 1px solid #bbb;
    float: left;
    text-align: center;
    font-size: 0.4rem;
    line-height: 1.2rem;
  }

  #main dl{
    width: 100%;
    height: 3.333333rem;
    border-bottom:1px solid #ddd;
    padding: 0.266667rem;
    margin:0; 
    background:#fff; 
  }

  #main dl dt{
    width: 2.773333rem;
    height: 2.773333rem;
    border:1px solid #ddd;
    float: left;
  }

  /* 三个图片 */
  #main dl:nth-child(1) dt img{
    width: 1.333333rem;
    height: 2.426667rem;
    margin-left: 0.746667rem;
    margin-top: 0.173333rem;
  }

  #main dl:nth-child(2) dt{
    padding: 0.133333rem;
  }

  #main dl:nth-child(2) dt img{
    width: 100%;
    height: 100%;
  }

  #main dl:nth-child(3) dt{
    padding: 0.2rem 0.2rem 0.2rem 0.133333rem;
  }

  #main dl:nth-child(3) dt img{
    width: 100%;
    height: 100%;
  }

  #main dl dd{
    float: left;
    margin-left: 0.333333rem;
  }

  #main dl dd p{
    margin-bottom: 0;
  }

  #main dl dd p:nth-child(1){
    width: 5.76rem;
    height: 0.826667rem;
    font-size: 0.34rem;
    line-height: 0.426667rem;
  }

  #main dl dd p:nth-child(2){
    font-size: 0.346667rem;
    color: #ca3232;
    margin-bottom: 0.066667rem;
    margin-top: 0.1rem;
    margin-bottom: 0;
  }

  #main dl dd p:nth-child(2) span{
    text-decoration:line-through;
    font-size: 0.266667rem;
    color: #bbb;
    margin-left:0.266667rem;
  }

  #main dl dd p:nth-child(3){
    font-size: 0.32rem;
    color: #bbb;
    margin-top: 0.1rem;
  }

  #main dl dd p:nth-child(4){
    margin-top: 0.1rem; 
  }

  #main dl dd p:nth-child(4) span:nth-child(1){
    padding: 0.08rem 0.2rem;
    border:1px solid #f38873;
    color: #f38873;
    border-radius: 0.133333rem;
  }

  #main dl dd p:nth-child(4) span:nth-child(2){
    margin-left:3.666667rem;
    font-size: 0.266667rem;
    color: #999; 
  }

  #main dl dd .img{
    width: 1.08rem;
    height: 1.093333rem;
    margin-left: 3.773333rem;
    background:url(../../../../img/01_shopping/icon.png);
    background-size: 9.6rem 17.066667rem;
    background-position: -0.36rem -0.98rem;
  }

  
</style>
