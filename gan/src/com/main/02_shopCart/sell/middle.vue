<template>
  <div id="middle">
      <ul class="sells">
      	  <li>
      	  	  <div class="img">
      	  	  	
      	  	  </div>
      	  	  <div class="sale">
      	  	  	<p>支付宝支付</p>
      	  	  </div>
      	  	  <div class="imgs">
      	  	  	
      	  	  </div>
      	  </li>
      	  <li>
      	  	  <div class="image">
      	  	  	
      	  	  </div>
      	  	  <div class="sale">
      	  	  	<p>微信支付</p>
      	  	  </div>
      	  	   <div class="imge">
      	  	  	
      	  	  </div>
      	  </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'middle',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped="scoped">
	.sells{
		width: 100%;
		height: 100vh;
		background: #ffffff;
		position: relative;
	}
	.sells li p{
		height: 0.506667rem;
		font-size: 0.506667rem;
		color: #000000;
		margin-left: 2.106667rem;
		line-height: 2.0rem;
	}
	.sells li{
		width: 100%;
		height: 2.0rem;
		border-bottom: 1px solid #dddddd;
		position: relative;
	}
	.sells li .img{
		background:url(../../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.063333rem 4.533333rem;
		background-position: -1.926667rem -1.333333rem;
		width: 1.346667rem;
		height: 1.346667rem;
		position: absolute;
		top: 0.32rem;
		left: 0.4rem;
	}
	.sells li .image{
		background:url(../../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.063333rem 4.533333rem;
		background-position: -1.93rem -2.8rem;
		width: 1.346667rem;
		height: 1.346667rem;
		position: absolute;
		top: 0.32rem;
		left: 0.4rem;
	}
	.sells .imgs{
		background:url(../../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.053333rem 4.533333rem;
		background-position: -1.013333rem -1.346667rem;
		width: 0.28rem;
		height:0.48rem;
		position: absolute;
		top:  0.693333rem;
		right: 0.293333rem;
	}
	.sells .imge{
		background:url(../../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.053333rem 4.533333rem;
		background-position: -1.013333rem -1.346667rem;
		width: 0.28rem;
		height:0.48rem;
		position: absolute;
		top:  0.693333rem;
		right: 0.293333rem;
	}
</style>
