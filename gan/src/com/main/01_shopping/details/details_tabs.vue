<template>
<div>
  <mu-tabs :value="activeTab" @change="handleTabChange" v-if="show" class="top_mu">
    <mu-tab value="tab1" title="商品详情"/>
    <mu-tab value="tab2" title="评价(156)"/>
    <mu-tab value="tab3" title="规格参数"/>
  </mu-tabs>

  <mu-tabs :value="activeTab" @change="handleTabChange" v-if="show1" class="mu-tabs1">
    <mu-tab value="tab1" title="商品详情"/>
    <mu-tab value="tab2" title="评价(156)"/>
    <mu-tab value="tab3" title="规格参数"/>
  </mu-tabs>


  <div v-if="activeTab === 'tab1'">
    <tabs1></tabs1>
  </div>
  <div v-if="activeTab === 'tab2'">
    <tabs2></tabs2>
  </div>
  <div v-if="activeTab === 'tab3'">
    <tabs3></tabs3>
  </div>
</div>
</template>

<script>
import tabs_01 from "./details_tabs_01.vue"
import tabs_02 from "./details_tabs_02.vue"
import tabs_03 from "./details_tabs_03.vue"
export default {
  data () {
    return {
      activeTab: 'tab1',
      show:false,
      show1:true
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },

    // 显示隐藏选项卡
      handleScroll () {
        // 判断滚轮距离顶部430px显示，否则隐藏
        if (document.documentElement.scrollTop + document.body.scrollTop > 590) {
          this.show = true;
          this.show1 = false;
        }
        else {
          this.show = false;
          this.show1 = true;
        }
    }
  },

  mounted(){
    // 监听滚轮事件
    window.addEventListener('scroll', this.handleScroll);
  },

  components:{
    "tabs1":tabs_01,
    "tabs2":tabs_02,
    "tabs3":tabs_03
  }
}
</script>

<style scoped="scoped">
  /* 选项卡 */
  .top_mu {
    background-color: #fff;
    color: #666;
    width: 100%;
    height: 1.066667rem;
    border-bottom:1px solid #ddd;
    position: fixed;
    top: 1.173333rem;
    left: 0;
  }

  .mu-tabs1{
    background-color: #fff;
    color: #666;
    width: 100%;
    height: 1.066667rem;
    border-bottom:1px solid #ddd;
  }

  .mu-tab-link{
    color: #666;
  }

  .mu-tab-active {
    color: #ca3232;
  }

  .mu-tab-link-highlight {
    background-color: #ca3232 !important;
}

  
</style>
