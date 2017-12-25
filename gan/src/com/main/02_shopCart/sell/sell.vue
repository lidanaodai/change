<template>
  <div id="sell">
      <tops></tops>
      <middles></middles>
  </div>
</template>

<script>
import top from './top.vue';
import middle from './middle.vue';
export default {
  name: 'sell',
  data () {
    return {
     	
    }
  },
  components:{
  	"tops":top,
  	"middles":middle
  }
}
</script>

<style scoped="scoped">
	#sell{
		width: 100%;
		height: 100vh;
		background: #f1f1f1;
		position: absolute;
		z-index: 999999999;
		top: 1.186667rem;
	}
</style>
