<template>
  <div id="app">
    <div class="top">
    	<h4><strong>家庭套装</strong></h4>
    	<p @click="tosuit()">更多实惠<span class="glyphicon glyphicon-menu-right" style="color: #009cff; padding-top:15px;"></span></p>
    </div>
    
    <div class="bottom">
    	<dl v-for="data in arr" @click="todetails(data.id)">
    		<dd>
    			<p >{{data.goodsname}}</p>
    			<p>￥{{data.price}} <span>￥{{data.parameter}}</span></p>
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
    tosuit(){
     this.$router.push({path:"/suit_details"})
    },

    todetails(id){
      this.$router.push({path:"/details",query:{"id":id}})
    }
  },

  created(){
      var url="http://114.55.249.153:8028/goods/list"
      axios.get(url).then((res)=>{
      	console.log(res.data)
        this.arr = res.data.homeRecommend

      })

    }
}
</script>


<style scoped="scoped">
	#app{
		width: 100%;
		height: 5.733333rem;
		background: #fff;
		margin-top: 0.266666rem;
	}
	
	p{
		color: #333;
		text-shadow: 1px 1px 1px 1px #999;
		font:bold 12px/1.5em "Microsoft YaHei";
	}
	
	/* 主题 */
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
		border-bottom: 1px solid #009cff;
		width: 2.333333rem;
		color: #009cff;
		font-size: 0.426666rem;
	}
	
	.top p{
		font-size: 0.373333rem;
		margin-right: 0.266666rem;
		color: #999;
		line-height: 1.066666rem;
	}
	
	/* 底部3个 */
	#app .bottom{
		width: 100%;
		height: 4.666666rem;
		display: flex;
		justify-content: space-around;
	}
	
	/* 三个商品外面轮廓，以及修改 */
	#app .bottom dl{
		width: 33.333%;
		height: 100%;
		border: 1px solid #ccc;
		padding: 0.333333rem 0.466666rem 0.2rem 0.333333rem;
	}
	
	#app .bottom dl:nth-child(1){
		border-right: none;
		border-left:none ;
	}
	
	#app .bottom dl:nth-child(2){
		border-right: none;
	}
	
	#app .bottom dl:nth-child(3){
		border-right: none;
	}
	
	#app .bottom dl dd p:nth-child(1){
		font-size: 14px;
		margin-bottom: 0.133333rem;
	}
	
	#app .bottom dl dd p:nth-child(2){
		font-size: 0.353333rem;
		color: #009cff;
		letter-spacing: -0.035001rem;
		margin-bottom: 0.066667rem;
	}
	
	#app .bottom dl dd p:nth-child(2) span{
		font-size: 0.05rem;
		color: #c8c8c8;
		text-decoration:line-through;
		letter-spacing: -0.035001rem;
	}
	
	#app .bottom dl dt{
		width: 2rem;
		height: 2.266666rem;
		margin-left: 0.333333rem;
	}
	
	#app .bottom dl dt img{
		width: 100%;
		height: 100%;
	}
</style>
