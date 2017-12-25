<template>
  <div id="news">
  	<headss></headss>
  	<viewss></viewss>
  </div>
</template>

<script>
import heads from './heads.vue'
import views from './views.vue'
export default {
  name: 'news',
  data () {
    return {
     
    }
  },
  components:{
  	"headss":heads,
  	"viewss":views
  }
}
</script>

<style  scoped="scoped">
	#news{
		width: 100%;
		height: 100vh;
		background: #f1f1f1;
		position: absolute;
		z-index: 9999999999;
		top: 1.186667rem;
	}
</style>
