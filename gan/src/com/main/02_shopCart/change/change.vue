<template>
  <div id="change">
    <headers></headers>
    <contents></contents>
  </div>
</template>

<script>
import header from './header.vue';
import content from './content.vue';

export default {
  name: 'change',
  data () {
    return {
     
    }
  },
  components:{
  	"headers":header,
  	"contents":content
  }
}
</script>

<style scoped="scoped">
	#change{
		width: 100%;
		height: 100vh;
		background: #f1f1f1;
		position: absolute;
		z-index: 999999999;
		top: 1.186667rem;
	}
</style>
