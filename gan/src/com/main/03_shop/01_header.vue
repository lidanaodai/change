<template>
  <div id="app">
    <div class="header">
    	<h3>订单管理</h3>
    	<div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped="scoped">
  .header{
  	width: 100%;
  	height: 1.173333rem;
  	background: #ffffff;
  	position: fixed;
  	z-index: 999999;
  	top: 0;
  	left: 0;
  	border-bottom:1px solid #f3f3f3 ;
  }
  .header div{
  	position: fixed;
    right:0.146667rem;
    top:0.186667rem;
    width: 0.733333rem;
    height: 0.733333rem;
    background: url(../../../img/03_shop/shop.png);
    background-size:6.826667rem 6.826667rem;
    background-position:-4.506667rem -1.52rem;
  }
  .header h3{
  	text-align: center;
  	line-height: 1.173333rem;
  	height: 1.173333rem ;
  	margin: 0;
  	padding: 0;
  	font-size:0.506666rem;
  	font-weight: bold;
  }
</style>
