<template>
  <div id="sale">
  	  	<div class="money">
  	  		<p>当前余额</p>
  	  		<span>￥{{price}}</span>
  	  		<div class="img">
  	  		
  	  		</div>
  	  	</div>
  	  	<div class="call">
	    	<div class="calls" style="color:#000000;">
				<p>关于我们</p>
			</div>
			<div class="calle">
				<div class="image">
					
				</div>
			</div>   
	    </div>
	    <div class="rest">
	    	<button @click="ret()">退出登录</button>
	    </div>
  </div>
</template>

<script>
export default {
  name: 'sale',
  data () {
    return {
     	price:"553.00"
    }
  },
  methods:{
  	ret(){
  		if(localStorage.getItem("login")){
  			localStorage.clear();
  			this.$router.push({path:"/login"})
  			
  		}

  	}
  }
}
</script>

<style scoped="scoped">
	.money{
		width: 100%;
		height: 1.163333rem;
		background: #ffffff;
		margin-top: 0.266667rem;
		z-index: 999999999;
	    position: relative;
	    border-bottom: 1px solid #dddddd;
	    border-top: 1px solid #dddddd;
	}
	.money p{
		width: 2.666667rem;
		height: 0.666667rem;
		float: left;
		line-height: 0.666667rem;
		font-size: 0.48rem;
		margin-left: 4%;
		margin-top: 0.266667rem;
	}
	.money span{
		display:inline-block;
		width: 2.666667rem;
		height: 0.666667rem;
		float: right;
		line-height: 0.666667rem;
		font-size: 0.48rem;
		margin-top: 0.266667rem;
	}
	.money .img{
		background:url(../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.053333rem 4.533333rem;
		background-position: -1.013333rem -1.346667rem;
		width: 0.28rem;
		height:0.48rem;
		position: absolute;
		top:  0.36rem;
		right: 0.266667rem;
	}
	.call{
		width: 100%;
		height: 1.2rem;
		border-bottom: 1px solid #dddddd;
		border-top: 1px solid #dddddd;
		font-size: 0.333333rem;
		background: #ffffff;
		margin-top: 0.266667rem;
		position: relative;
	}
	.call .calls{
		width: 1.333333rem;
		height: 1.2rem;
		float: left;
		margin-left: 0.4rem;
	}
	.call .calls p{
		line-height: 1.2rem;
	}
	.call .calle{
		width: 3.173333rem;
		height: 1.2rem;
		float: left;
		margin-right: 0.8rem;
		margin-left: 4.16rem;
	}
	.call .calle p{
		text-align: right;
		line-height: 1.2rem;
		height: 1.2rem;
	}
	.call .calle .image{
		background:url(../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.053333rem 4.533333rem;
		background-position: -1.013333rem -1.346667rem;
		width: 0.28rem;
		height:0.48rem;
		position: absolute;
		top:  0.36rem;
		right: 0.266667rem;
	}
	.rest{
		margin-top: 0.266667rem;
	}
	.rest button{
		background: red;
		border-radius: 0.2rem;
		width: 80%;
		height: 1.2rem;
		display: block;
		color: #ffffff;
		font-size: 0.48rem;
		border:none;
		text-align: center;
		margin: 0 auto;
	}
</style>
