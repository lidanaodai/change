<template>
  <div id="app">
    <div class="box">
    	<div class="top">
    		<div class="img"><img src="../../../../img/01_shopping/detail_tabs2_01.jpg"></div>
    		<p>小黑黑</p>
    		<div class="crown"></div>
    	</div>
    	<p class="pj">款式很好看，版型好，料子还可以，这个价位来说确实挺好的</p>
    	<p class="time">2015-12-15</p>
    	<div class="bottom_img">
    		<img src="../../../../img/01_shopping/detail_tabs2_02.jpg">
    	</div>
    </div>

    <div class="box">
    	<div class="top">
    		<div class="img"><img src="../../../../img/01_shopping/detail_tabs2_03.jpg"></div>
    		<p>五彩颜色</p>
    		<div class="crown"></div>
    	</div>
    	<p class="pj">款式很好看，版型好，料子还可以，这个价位来说确实挺好的</p>
    	<p class="time">2015-12-15</p>
    	<div class="bottom_img">
    		<img src="../../../../img/01_shopping/detail_tabs2_02.jpg">
    	</div>
    </div>

    <div class="box">
      <div class="top">
        <div class="img"><img src="../../../../img/01_shopping/detail_tabs2_03.jpg"></div>
        <p>五彩颜色</p>
        <div class="crown"></div>
      </div>
      <p class="pj">款式很好看，版型好，料子还可以，这个价位来说确实挺好的</p>
      <p class="time">2015-12-15</p>
      <div class="bottom_img">
        <img src="../../../../img/01_shopping/detail_tabs2_02.jpg">
      </div>
    </div>

    <div class="box">
      <div class="top">
        <div class="img"><img src="../../../../img/01_shopping/detail_tabs2_03.jpg"></div>
        <p>五彩颜色</p>
        <div class="crown"></div>
      </div>
      <p class="pj">款式很好看，版型好，料子还可以，这个价位来说确实挺好的</p>
      <p class="time">2015-12-15</p>
      <div class="bottom_img">
        <img src="../../../../img/01_shopping/detail_tabs2_02.jpg">
      </div>
    </div>



    <!-- <div style="width:100%; height:1.466667rem;"> </div> -->
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
  .box{
  	width: 100%;
  	height: 6.666667rem;
  	background: #fff;
  	padding:0.4rem 0.333333rem 0 0.4rem; 
  	border-bottom: 1px solid #ddd;
  }

  .box .top{
  	width: 100%;
  	height: 0.8rem;
  }

  .box .top .img{
  	float: left;
  	width: 0.8rem;
  	height: 0.8rem;
  }

  .box .top .img img{
  	width: 100%;
  	height: 100%;
  }

  .box .top p{
  	float: left;
  	line-height: 0.8rem;
  	font-size: 0.373333rem;
  	color: #333; 
  	margin: 0;
  	margin-left:0.32rem;
  }

  .box .top .crown{
  	float: left;
  	width: 0.666667rem;
  	height: 0.36rem;
  	background:url(../../../../img/01_shopping/icon_2.png); 
    background-size:9.6rem 6.666667rem; 
    background-position: -3.466667rem -1.6rem; 
    margin-top: 0.186667rem;
    margin-left:0.266667rem; 
  }

  .box .pj{
  	margin-top: 0.4rem;
  	font-size: 0.36rem;
  	margin-bottom: 0;
  }

  .box .time{
  	margin-top:0.266667rem;
  	font-size: 0.266667rem;
  	color: #d4d4d4; 
  	margin-bottom: 0;
  }

  .box .bottom_img{
  	width: 2.4rem;
  	height: 2.4rem;
  }

  .box .bottom_img img{
  	width: 100%;
  	height: 100%;
  	margin-top:0.4rem; 
  }

  .box:nth-child(2) .top .crown{
  	float: left;
  	width: 0.666667rem;
  	height: 0.36rem;
  	background:url(../../../../img/01_shopping/icon_2.png); 
    background-size:9.6rem 6.666667rem; 
    background-position: -4.586667rem -1.6rem; 
    margin-top: 0.186667rem;
    margin-left:0.266667rem; 
  }
</style>
