<template>
  <div id="app">
	<heads></heads> 
	<coles></coles>
	<muses></muses>
	<bottoms></bottoms> 
	<sales></sales>
  </div>
</template>

<script>
import head from './head.vue';
import muse from './muse.vue';
import cole from './cole.vue';
import sale from './sale.vue';
import bottom from './bottom.vue';
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
  	"heads":head,
  	"muses":muse,
  	"coles":cole,
  	"sales":sale,
  	"bottoms":bottom
  }
}
</script>

<style scoped="scoped">
	#app{
		width: 100%;
		height: 100vh;
		background: #f1f1f1;
		position: absolute;
		z-index: 99999999;
		top: 1.186667rem;
	}
</style>
