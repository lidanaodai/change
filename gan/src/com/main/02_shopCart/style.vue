<template>
  <div id="style">
    <div class="style">
		<div class="left" style="color:#bbbbbb;">
			<p>配送方式</p>
		</div>
		<div class="right">
			<p>厂家直邮 邮费￥{{data}}</p>
			<div class="img">
				
			</div>
		</div>    	 
    </div>
    <div class="discounts">
    	<div class="discount" style="color:#bbbbbb;">
			<p>优惠券</p>
		</div>
		<div class="Coupon">
			<p>10元优惠券</p>
			<div class="image">
				
			</div>
		</div>   
    </div>
  </div>
</template>

<script>
export default {  
  name: 'style',
  data () {
    return {
     	data:"25"
    }
  }
}
</script>

<style scoped="scoped">
	p{
		margin: 0;
		padding: 0;
	}
	.style{
		width: 100%;
		height: 1.2rem;
		border-bottom: 1px solid #dddddd;
		border-top: 1px solid #dddddd;
		font-size: 0.333333rem;
		background: #ffffff;
		margin-top: 0.266667rem;
		position: relative;
	}
	.style .left{
		width: 1.333333rem;
		height: 1.2rem;
		float: left;
		margin-left: 0.4rem;
	}
	.style .left p{
		line-height: 1.2rem;
	}
	.style .right{
		width: 3.173333rem;
		height: 1.2rem;
		float: left;
		margin-right: 0.8rem;
		margin-left: 4.16rem;
	}
	.style .right p{
		text-align: right;
		line-height: 1.2rem;
		height: 1.2rem;
	}
	.style .right .img{
		background:url(../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.053333rem 4.533333rem;
		background-position: -1.013333rem -1.346667rem;
		width: 0.28rem;
		height:0.48rem;
		position: absolute;
		top:  0.36rem;
		right: 0.266667rem;
	}
	.discounts{
		width: 100%;
		height: 1.2rem;
		border-bottom: 1px solid #dddddd;
		border-top: 1px solid #dddddd;
		font-size: 0.333333rem;
		background: #ffffff;
		margin-top: 0.266667rem;
		position: relative;
	}
	.discounts .discount{
		width: 1.333333rem;
		height: 1.2rem;
		float: left;
		margin-left: 0.4rem;
	}
	.discounts .discount p{
		line-height: 1.2rem;
	}
	.discounts .Coupon{
		width: 3.173333rem;
		height: 1.2rem;
		float: left;
		margin-right: 0.8rem;
		margin-left: 4.16rem;
	}
	.discounts .Coupon p{
		text-align: right;
		line-height: 1.2rem;
		height: 1.2rem;
	}
	.discounts .Coupon .image{
		background:url(../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.053333rem 4.533333rem;
		background-position: -1.013333rem -1.346667rem;
		width: 0.28rem;
		height:0.48rem;
		position: absolute;
		top:  0.36rem;
		right: 0.266667rem;
	}
</style>
