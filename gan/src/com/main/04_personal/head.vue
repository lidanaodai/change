<template>
  <div id="head">
    <div class="nav">
    	<h2>个人中心</h2>
    	<div class="message">
    		<div class="mess">
    			
    		</div>
   		 </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped="scoped">
	.nav{
		width: 100%;
		height: 1.173333rem;
		position: fixed;
		top: 0;
		left: 0;
		background: #ffffff;
		z-index: 9999999999;
	}
	.nav h2{
		width: 100%;
		height:1.173333rem;
		text-align: center;
		font-size: 0.506667rem;
		margin: 0;
		padding: 0;
		line-height:1.173333rem;
		position: fixed;
		color: #000000;
		font-weight: bold;
	}
	.nav .message .mess{
		background:url(../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.053333rem 4.533333rem;
		background-position: -1.013333rem -0.213333rem;
		width: 0.733333rem;
		height: 0.733333rem ;
		position: fixed;
		top: 0.186667rem;
		right: 0.146667rem;
	}
</style>
