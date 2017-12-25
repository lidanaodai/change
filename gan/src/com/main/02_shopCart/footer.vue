<template>
  <div id="app">
  	<!-- 购物车头部 -->
    <heads></heads>
<!-- 对于购物地址的确认 -->
    <addresss></addresss>
    <!-- 订单确认 -->
   	<messages></messages>
   	<!-- 配送方式 -->
   	<styles></styles>
   	<!-- 总价的单子 -->
   	<prices></prices>	
  </div>
</template>

<script>
import head from './head.vue';
import message from './message.vue';
import address from './address.vue';
import style from './style.vue';
import price from './price.vue';
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
  	"heads":head,
  	"messages":message,
  	"addresss":address,
  	"styles":style,
  	"prices":price
  }
}
</script>

<style scoped="scoped">
	#app{
		width: 100%;
		height: 100vh;
		background: #f1f1f1;
		position: absolute;
		z-index: 999999999;
		top: 1.186667rem;
	}
	
	
</style>
