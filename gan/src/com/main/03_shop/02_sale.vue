<template>
  <div>
			<mu-tabs :value="activeTab" @change="handleTabChange" :lineClass="'active'">
		    <mu-tab value="tab1" title="待付款"/>
		    <mu-tab value="tab2" title="待发货"/>
		    <mu-tab value="tab3" title="已发货"/>
		    <mu-tab value="tab4" title="已完成"/>
		  </mu-tabs>
		  <div style="height:1.15971rem;"></div>
		  <div v-if="activeTab === 'tab1'">
				<list></list>
		  </div>
		  <div v-if="activeTab === 'tab2'">
		    2
		  </div>
		  <div v-if="activeTab === 'tab3'">
		    3
		  </div>
		  <div v-if="activeTab === 'tab4'">
		    4
		  </div>
  </div>
</template>

<script>
  import list from "./03_list.vue"
  export default {
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  },
  components:{

  	"list":list
  }
}
</script>

<style scoped="scoped">
  	.mu-tabs{
		background: #ffffff;
		color: black;
		position: fixed;
		width: 100% !important;
		z-index: 999;
		top: 1.173333rem;
	}
	.mu-tab-active{
		color:#ca3333 !important;
	}
	.mu-tab-link{
		color: black;
	}
	.active{
		background-color: #000000;
	}
</style>
