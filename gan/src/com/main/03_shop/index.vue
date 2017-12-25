<template>
  <div id="app">
    <headers></headers>
    <sale></sale>

  </div>
</template>

<script>
	import header from "./01_header.vue"
	import sale from "./02_sale.vue"


export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
  	"headers":header,
  	"sale":sale
  }
}
</script>

<style scoped="scoped">
 #app{
 	background: #F1F1F1;
 }
</style>
