<template>
  <div id="header">
    <div class="nav">
    		<div class="history" @click="back()">
    			<div class="back">
    				
    			</div>
    			<p>返回</p>
    		</div>	
    	<h2>订单确认</h2>
    	<div class="message">
    		<div class="mess">
    			
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
     	
    }
  },
  methods:{
  	back(){
  		this.$router.go(-1);
  	}
  }
}
</script>

<style scoped="scoped">
	.nav{
		width: 100%;
		height: 1.173333rem;
		border-bottom: 1px solid #ca3232;
		position: fixed;
		top: 0;
		left: 0;
		background: white;
		z-index: 99999;
	}
	.nav .history{
		position: fixed;
		z-index: 99;
	}
	.nav .history .back{
		background:url(../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.053333rem 4.533333rem;
		background-position: -0.28rem -0.213333rem;
		width: 0.333333rem;
		height: 0.613333rem;
		margin-top: 0.28rem;
		margin-left: 0.266667rem;
		float: left;
	}
	.nav .history p{
		width: 0.746667rem;
		height: 0.613333rem;
		margin-top: 0.28rem;
		float: left;
		font-size: 0.373333rem;
		color: #666666;
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
