<template>
  <div id="muse">
  	<div class="style">
			<div class="left" style="color:#000000;">
				<p>我的订单</p>
			</div>
			<div class="right">
				<p style="color:#ec075d;">全部订单</p>
				<div class="img">
					
				</div>
			</div>    	 
	    </div>
  	<mu-tabs :value="activeTab" @change="handleTabChange">
  	  <mu-tab value="tab1" icon="shopping_cart" title="待支付"/>
  	  <mu-tab value="tab2" icon="location_city" title="待发货"/>
      <mu-tab value="tab3" icon="airport_shuttle" title="已发货"/>
      <mu-tab value="tab4" icon="assignment" title="已完成"/>
	</mu-tabs>
  </div>
</template>

<script>
export default {
  name: 'muse',
  data () {
    return {
     	activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>

<style scoped="scoped">
	.mu-tabs{
		height: 2.666667rem;
		background: #ffffff;
	}
	.mu-tabs .mu-tab-link{
		color: black;
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
</style>
