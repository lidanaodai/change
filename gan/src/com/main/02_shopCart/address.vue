<template>
  <div id="address">
  	<router-link to="/change">
  		<div class="address">
	    	<div class="logo">
	    		
	    	</div>
	    	<!-- 物流地址 -->
	    	<div class="logistics">
	    		<h4>{{json.name}} {{json.tel}}</h4>
	    		<p>{{json.address}}</p>
	    	</div>
	    	<div class="img">

	    	</div>
	    	<img src="../../../img/02_shop/1.jpg">
	    </div>
  	</router-link>
  </div>
</template>

<script>
export default {
  name: 'address',
  data () {
    return {
     	json:[]
    }
  },
  created(){

		this.arr =[];
		if(localStorage.getItem("have")){
		  	this.json = JSON.parse(localStorage.getItem("have"));
		  	console.log(this.json)
	    }
  	}
}
</script>

<style  scoped="scoped">
	.address{
		width: 100%;
		height: 2.026667rem;
		background: #fffdf5;
		z-index: 999;
		position: relative;
	}
	.address .logo{
		background:url(../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.053333rem 4.533333rem;
		background-position: -0.28rem -1.346667rem;
		width: 0.48rem;
		height: 0.64rem;
		margin-top: 0.613333rem;
		margin-left: 0.346667rem;
		float: left;
	}
	.address .logistics{
		float: left;
		margin-left: 0.373333rem;
		margin-top: 0.4rem;
	}
	.address .logistics h4{
		margin: 0;
		padding: 0;
		margin-bottom: 0.266667rem;
		color: #595857;
	}
	.address .logistics p{
		font-size: 0.333333rem;
		margin-bottom: 0;
		color: #666666;
	}
	.address .img{
		background:url(../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.053333rem 4.533333rem;
		background-position: -1.013333rem -1.346667rem;
		width: 0.28rem;
		height:0.48rem;
		position: absolute;
		top:  0.693333rem;
		right: 0.293333rem;
	}
	.address  img{
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
	}
</style>
