<template>
  <div id="app">
    <div class="top">
    	<h4><strong>本月推荐</strong></h4>
    	<p @click="tore()">更多好货<span class="glyphicon glyphicon-menu-right" style="color: #d24aff; padding-top: 15px;"></span></p>
    </div>
    
    <div class="bottom">
    	
    	<dl @click="todetails(data.id)" v-for="data in arr">
    		<dd>
    			<p class="p1">{{data.goodsname}}</p>
    			<p>{{data.description}}</p>
    		</dd>
    		<dt>
    			<img v-lazy="data.pic0"/>
    		</dt>
    	</dl>
    	
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'app',
  data () {
    return {
     arr:[]
    }
  },
  methods:{
    tore(){
      this.$router.push({path:"/re_details"})
    },

    todetails(id){
      this.$router.push({path:"/details",query:{"id":id}})
    }
  },
  created(){
      var url="http://114.55.249.153:8028/goods/list"
      axios.get(url).then((res)=>{
        this.arr = res.data.monthRecommend
        // console.log(this.arr)
      })
    }
}
</script>

<style scoped="scoped">
	#app{
		width: 100%;
		height: 6.8rem;
		margin-top: 0.266666rem;
		background: #fff;
	}
	
	p{
		color: #333;
		text-shadow: 1px 1px 1px 1px #999;
		font:bold 12px/1.5em "Microsoft YaHei";
		
	}
	
	/* 头部标题 */
	#app .top{
		width: 100%;
		height: 1.066666rem;
		/*border-bottom: 1px solid #ccc;*/
		display: flex;
		justify-content: space-between;
		line-height: 1.066666rem;
	}
	
	.top h4{
		margin: 0;
		line-height: 1.066666rem;
		padding-left: 0.266666rem;
		border-bottom: 1px solid #d24aff;
		width: 2.333333rem;
		color: #d24aff;
		font-size: 0.426666rem;
	}
	
	.top p{
		font-size: 0.373333rem;
		margin-right: 0.266666rem;
		color: #999;
		line-height: 1.066666rem;
	}
	
	/* 下面4块 */
	#app .bottom{
		width: 100%;
		height: 5.733333rem;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	/* 四个商品外面轮廓，以及修改 */
	#app .bottom dl{
		width: 50%;
		height: 50%;
		border: 1px solid #ccc;
		margin: 0;
		padding: 0.4rem 0.533333rem 0.266666rem 0.4rem;
	}
	
	#app .bottom dl:nth-child(1){
		border-right: none;
		border-bottom: none;
		border-left: none;
	}
	
	#app .bottom dl:nth-child(2){
		border-bottom: none;
		border-right: none;
	}
	
	#app .bottom dl:nth-child(3){
		border-right: none;
		border-left: none;
	}
	
	#app .bottom dl:nth-child(4){
		border-right: none;
	}
	
	#app .bottom dl dd{
		float: left;
		width: 50%;
	}
	
	#app .bottom dl dd p{
		margin: 0;
	}
	
	#app .bottom dl dd p:nth-child(2){
		margin-top: -0.066666rem;
		color: #999;	
		margin-top: 0.066666rem;
	}
	
	#app .bottom dl dt{
		float: right;
		width: 1.466666rem;
		height: 2.2rem;
	}
	
	#app .bottom dl dt img{
		width: 100%;
		height: 100%;
	}

	/* 溢出换行 */
	#app .bottom dl .p1{
		line-height: 0.386667rem;	
	}

	#app .bottom dl:nth-child(1) .p1{
		width: 2.066667rem;
	}

	#app .bottom dl:nth-child(2) .p1{
		width: 2.306667rem;
	}

	#app .bottom dl:nth-child(3) .p1{
		width: 2.066667rem;
	}

	#app .bottom dl:nth-child(4) .p1{
		width: 2.066667rem;
	}
	
</style>
