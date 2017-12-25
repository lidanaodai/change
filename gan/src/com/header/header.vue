<template>
  <div id="app">
  	<div id="header">
  		
  		<div id="left" @click="shows()">

  		</div>
  		
  		<div id="center">
  			<span class="glyphicon glyphicon-search" id="magnifier"></span>
  			<input type="text" name="" id="" value="" placeholder="搜索你喜欢的商品、店铺" />
  		</div>
  		
	  	<div id="rigth">
	  		
	  	</div>
	  </div>
	  <div style="width: 100%; height: 1.173333rem;"></div>

	  <div id="alert" v-if="show">
	  	<div class="alert1">
		  <img src="../../img/01_shopping/alert.png">
		</div>
		<div class="alert2">
			<dl>
				<dt><img src="../../img/01_shopping/header_alert_01.jpg"></dt>
				<dd>洋玩意总店</dd>
			</dl>

			<dl>
				<dt><img src="../../img/01_shopping/header_alert_02.jpg"></dt>
				<dd>Angle.Lee的店</dd>
			</dl>

			<dl>
				<dt><img src="../../img/01_shopping/header_alert_03.jpg"></dt>
				<dd>我的店</dd>
			</dl>
		</div>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
     show : false
    }
  },

  methods:{
  	shows(){
  		this.show = !this.show
  	}
  }
}
</script>

<style scoped="scoped">
	#header{
		width: 100%;
		height: 1.173333rem;
		background: #ca3232;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		z-index: 99;
	}
	
	/* 头部搜索框 */
	#header #center input{
		width: 7.03125rem;
		height: 0.733333rem;
		background: #a22828;
		border-radius: 0.234375rem;
		border: none;
		margin-top: 0.226666rem;
		position: relative;
		text-indent: 3em;
		color: #ff6767;
		font-size: 0.375rem;
	}
	
	/* 定位搜索框内的放大镜 */
	#magnifier{
		position: absolute;
		left: 1.895rem;
		top: 0.413333rem;
		color: #ff6767;
		font-size: 0.375rem;
		z-index: 99;
	}
	
	/* 头部左边图标 */
	#header #left{
		margin-left: 0.16rem;
		margin-top: 0.28rem;
		width: 0.8rem;
		height: 0.613333rem;
		background:url(../../img/01_shopping/icon.png);
   	 	background-size: 9.6rem 17.066667rem;
    	background-position: -3.64rem -1.44rem;
	}
	
	/* 头部右边图标 */
	#header #rigth{
		margin-right: 0.146667rem;
		margin-top: 0.186667rem;
		width: 0.733333rem;
		height: 0.706667rem;
		background:url(../../img/01_shopping/icon.png);
   	 	background-size: 9.6rem 17.066667rem;
    	background-position: -2.533333rem -1.346667rem;
	}
	

	/* 弹出框 */
	.alert1{
		position: absolute;
		top: 1.266667rem;
		left: 0.453333rem;
		z-index: 999999;
	}

	.alert2{
		width: 4.4rem;
		height: 3.2rem;
		background-color: #ca3232;
		border-radius: 0.133333rem;
		position: absolute;
		top: 1.493333rem;
		left: 0.133333rem;
		z-index: 999999;
	}

	.alert2 dl{
		width: 100%;
		height: 1.066667rem;
		border-bottom:1px solid #e24a4a;
		margin:0;
		padding: 0.266667rem; 
	}

	.alert2 dl dt{
		width: 0.533333rem;
		height: 0.533333rem;
		float: left;
	}

	.alert2 dl dt img{
		width: 100%;
		height: 100%;
	}

	.alert2 dl dd{
		float: left;
		line-height: 0.533333rem;
		margin-left: 0.16rem;
		font-size: 0.32rem;
		color: #fff;
	}
	
</style>
