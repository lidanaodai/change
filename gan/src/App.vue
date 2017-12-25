<template>
  <div id="app">
    <headers></headers>
    <navs></navs>
  </div>
</template>

<script>
	import header from "./com/header/header.vue"
	import nav from "./com/footer_nav/nav.vue"
export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
  	"headers":header,
  	"navs":nav
  }
}
</script>

<style scoped="scoped">
	#app{
		background: #f1f1f1;
	}
</style>
