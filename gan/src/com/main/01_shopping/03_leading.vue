<template>
  <div id="app" v-if="arr!=null">
  <!-- 顶部标签 -->
    <div class="top">
    	<h4><strong>本周主打</strong></h4>
    	<p @click="told()">更多主打<span class="glyphicon glyphicon-menu-right" style="color: #ca3232;padding-top: 10px;"></span></p>
    </div>
    <!-- 底部分块 -->
    <div class="bottom">
    	<!-- 左边 -->
    	<div class="left" @click="todetails(arr[0].id)">
    		 <p>{{arr[0].goodsname}}</p>
    		<p>{{arr[0].description}}</p> 
    		<img src="../../../img/01_shopping/shop02.jpg"/>
    	</div>
    	<!-- 右边 -->
    	<div class="rigth">
    		<!-- 右边上面 -->
    		<div class="top1" @click="todetails(arr[1].id)">
    			<div class="left">
    				<p>{{arr[1].goodsname}}</p>
    				<p>{{arr[1].description}}</p> 
    			</div>
    			<img src="../../../img/01_shopping/shop01.jpg"/>
    		</div>
    		<!-- 右边下面 -->
    		<div class="bottom1">
    			<div class="left2" @click="todetails(arr[2].id)">
    				<p>{{arr[2].goodsname}}</p>
    				<p>{{arr[2].description}}</p> 
    				<img src="../../../img/01_shopping/shop03.jpg" />
    			</div>
    			
    			<div class="rigth2" @click="todetails(arr[3].id)">
    				<p>{{arr[3].goodsname}}</p>
    				<p>{{arr[3].description}}</p> 
    				<img src="../../../img/01_shopping/shop04.jpg"/>
    			</div>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'app',
  data () {
    return {
     arr:null
    }
  },

  methods:{
    told(){
     this.$router.push({path:"/ld_details"})
    },

    todetails(id){
      this.$router.push({path:"/details",query:{"id":id}})
    }
  },

  created(){
      var url="http://114.55.249.153:8028/goods/list"
      axios.get(url).then((res)=>{
      	this.arr=[]
      	// for(var i=0; i<=res.data.weekRecommend.length;i++){
      	// 	if(res.data.weekRecommend[i]!=undefined)
      	// 	this.arr[i] = res.data.weekRecommend[i]
      	// }
      	this.arr = res.data.weekRecommend

        // this.arr=this.arr
           console.log(res.data)
        console.log(this.arr)
      })

    }
}
</script>

<style scoped="scoped">
	#app{
		width: 100%;
		height: 6.666666rem;
		margin-top: 0.266666rem;
		background: #fff;
	}
	
	p{
		color: #333;
		text-shadow: 1px 1px 1px 1px #999;
		font:bold 12px/1.5em "Microsoft YaHei";
	}
	
	/* 顶部标题 */
	.top{
		width: 100%;
		height: 1.066666rem;
		border-bottom: 1px solid #ccc;
		display: flex;
		justify-content: space-between;
		line-height: 1.066666rem;
	}
	
	/* 主题标题 */
	.top h4{
		margin: 0;
		line-height: 1.066666rem;
		padding-left: 0.266666rem;
		border-bottom: 1px solid #ca3232;
		width: 2.333333rem;
		color: #ca3232;
		font-size: 0.426666rem;
	}
	
	.top p{
		color: #999;
		font-size: 0.373333rem;
		margin-right: 0.266666rem;
		line-height: 1.066666rem;
	}
	
	/* 底部分块 */
	.bottom>.left{
		width: 3.333333rem;
		height: 5.6rem;
		border-right: 1px solid #ccc;
		float: left;
		padding:0.346666rem 0.433333rem 0.266666rem 0.373333rem ;
	}
	
	.bottom>.left p{
		margin-bottom: 0.113333rem;
	}
	
	.bottom>.left p:nth-child(2){
		color: #ffa23f;
		margin-bottom: 0.000666rem;
		width: 1.893333rem;
	}
	
	.bottom>.left img{
		width: 2.533333rem;
		height: 2.733333rem;
		margin-top: 0.49rem;
	}
	
	/* 底部分块-右边 */
	
	.bottom>.rigth{
		float: left;
	}
	/* 右面-上面 */
	.bottom>.rigth>.top1{
		width: 6.666rem;
		height: 2.266666rem;
		border-bottom: 1px solid #ccc;
		padding: 0.346666rem 0.36rem 0.16rem 0.36rem;
	}
	
	.bottom>.rigth>.top1>.left{
		float: left;
	}
	
	.bottom>.rigth>.top1>img{
		float: right;
		width: 1.786666rem;
		height: 1.866666rem;
	}
	
	.bottom>.rigth>.top1>.left p{
		margin: 0.000666rem;
	}
	
	.bottom>.rigth>.top1>.left p:nth-child(2){
		color: #ffaa4f;
	}
	
	.bottom>.rigth>.bottom1{
		width: 6.666rem;
		height: 3.333333rem;
	}
	
	.bottom>.rigth>.bottom1>.left2{
		width: 50%;
		height: 3.333333rem;
		border-right: 1px solid #ccc;
		padding: 0.293333rem;
		float: left;
	}
	
	.bottom>.rigth>.bottom1>.left2 p{
		margin-bottom: 0.133333rem;
	}
	
	.bottom>.rigth>.bottom1>.left2 p:nth-child(2){
		color: #ffaa4f;
	}
	
	.bottom>.rigth>.bottom1>.left2 img{
		width: 1.493333rem;
		height: 1.68rem;
		margin-left: 0.746666rem;
	}
	/* 下面-右边 */
	.bottom>.rigth>.bottom1>.rigth2{
		padding: 0.293333rem 0.266666rem 0.293333rem 0.353333rem;
		width: 50%;
		height: 3.333333rem;
		float: right;
	}
	
	.bottom>.rigth>.bottom1>.rigth2 p{
		margin-bottom: 0;
	}
	
	.bottom>.rigth>.bottom1>.rigth2 p:nth-child(1){
		margin-top: -0.093333rem;
	}
	
	.bottom>.rigth>.bottom1>.rigth2 p:nth-child(2){
		color: #ffaa4f;
		margin-top: 0.000006rem;
	}
	
	.bottom>.rigth>.bottom1>.rigth2 img{
		width: 1.8rem;
		height: 1.666666rem;
		margin-left: 0.746666rem;
	}
</style>
