<template>
  <div id="app">
    <!--  头部  -->
    <div id="header">
      <span class="fh_icon"></span>
      <p @click="back()">返回</p>
      <h3>家庭套装</h3>
      <span id="sp2">

      </span>
    </div>
    <div style="width:100%; height: 1.173333rem;"> </div>

    <div id="main">
      <dl v-for="data in arr">
        <dt>
          <div class="div1" @click="todetails()"><img v-lazy="data.img1"></div>
          <div class="div2" @click="todetails()"><img v-lazy="data.img2"></div>
          <div class="div3" @click="todetails()"><img v-lazy="data.img3"></div>
        </dt>
        <dd>
          <div class="left">
            <p>{{data.title}}</p>
            <span>{{data.type}}</span>
          </div>
          <div class="right">
            <p>￥{{data.newmoney}}</p>
            <p>￥{{data.oldmoney}}</p>
          </div>
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

    todetails(){
      this.$router.push({path:"/details"})
    }
  },

  created(){
      var url="./src/com/main/json/05_suit_details.json"
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
    background: #009cff;
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
    background-position: -1.626667rem -1.373333rem;
    margin-right: -0.12rem;
    margin-top: -0.08rem;

  }

  /* 主体 */
  #main dl{
    width: 100%;
    height: 4.933333rem;
    background:#fff; 
    padding: 0.266667rem;
  }

  #main dl dt{
    display: flex;
    justify-content: space-between;
  }

  #main dl dt div{
    width: 2.933333rem;
    height: 2.933333rem;
    border:#ddd 1px solid ;
  }

  #main dl dt .div1 img{
    width: 2.333333rem;
    height: 1.933333rem;
    margin-top: 0.773333rem;
    margin-left: 0.36rem;
  }

  #main dl:nth-child(1) dt .div2 img{
    width: 2.386667rem;
    height: 1.933333rem;
    margin-top: 0.92rem;
    margin-left: 0.32rem;
  }

  #main dl:nth-child(1) dt .div3 img{
    width: 1.173333rem;
    height: 2.746667rem;
    margin-top: 0.16rem;
    margin-left: 0.88rem;
  }

  #main dl:nth-child(2) dt .div2 img{
    width: 100%;
    height: 100%;
  }

  #main dl:nth-child(2) dt .div3 img{
    width: 100%;
    height: 100%;
  }

  #main dl dd{
    margin-top: 0.293333rem;
  }

  #main dl dd .left{
    float: left;
    width: 7.173333rem;
    height: 1.2rem;
    border-right: 1px solid #ddd;
  }

  #main dl dd .left p{
    font-size: 0.373333rem;
    margin-bottom: 0.16rem;
  }

  #main dl dd .left span{
    font-size: 0.266667rem;
    padding: 0.093333rem 0.2rem;
    color: #f38873;
    border:1px solid #f38873;
    border-radius: 0.133333rem;
  }

  #main dl dd .right{
    float: right;
  }

  #main dl dd .right p{
    margin:0; 
  }

  #main dl dd .right p:nth-child(1){
    font-size: 0.346667rem;
    color: #ca3232;
  }

  #main dl dd .right p:nth-child(2){
    font-size: 0.266667rem;
    text-decoration:line-through;
    color: #ddd;
    text-align: right;
  }
  
</style>
