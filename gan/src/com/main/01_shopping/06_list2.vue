<template>
  <div id="app">
    <div class="top">
    	<hr/>
    	<h4>为您推荐</h4>
    </div>
    
    <div class="bottom">
    	<dl v-for="data in arr" @click="todetails()">
    		<dt>
    			<img v-lazy="data.img"/>
    		</dt>
    		<dd>
    			<div class="left">
    				<p><strong>{{data.title}}</strong></p>
    				<p>{{data.type}}</p>
    			</div>
    			<div class="right">
    				<p>￥{{data.newmoney}}</p>
    				<p>￥{{data.oldmoney}}</p>
    			</div>
    		</dd>
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
    todetails(){
      this.$router.push({path:"/details"})
    }
  },

  created(){
      var url="./src/com/main/json/06_list2.json"
      axios.get(url).then((res)=>{
          console.log(res.data)
          this.arr = res.data
      })

  }
}
</script>

<style scoped="scoped">
	#app .top{
		position: relative;
	}
	
	p{
		color: #333;
		text-shadow: 1px 1px 1px 1px #999;
		font:bold 1px/1.5em "Microsoft YaHei";
	}
	
	#app .top hr{
		margin-left: 0.266666rem;
		margin-right: 0.266666rem;
		background: #ccc;
		height: 1px; 
		margin-top: 0.46rem; 
		margin-bottom: 0.46rem;
	}
	
	#app .top h4{
		position: absolute;
		top: -0.46rem;
		left: 50%;
		width: 2.2rem;
		background: #f1f1f1;
		text-align: center;
		color: #999;
		margin-left: -1.1rem;
	}
	
	#app .bottom dl{
		width: 100%;
		/*height: 6.633333rem;*/
		border-bottom: 1px solid #ccc;
		background: #fff;
		margin: 0;
		padding: 0.133333rem 0.133333rem 0.306666rem 0.133333rem;
	}
	
	#app .bottom dl dt{
		width: 100%;
		height: 70%;
	}
	
	#app .bottom dl dt img{
		width: 100%;
		height: 100%;
	}
	
	#app .bottom dl dd{
		display: flex;
		justify-content: space-between;
		/*height: 1.2rem;*/
		margin-top: 0.266666rem;
	}
	
	#app .bottom dl dd .left{
		width: 70%;
		/*height: 100%;*/
		border-right: 1px solid #ccc;
		padding-left: 0.133333rem;
		padding-right: 0.6rem;
	}
	
	#app .bottom dl dd .left p:nth-child(1){
		font-size:0.353333rem ;
	}
	
	#app .bottom dl dd .left p:nth-child(2){
		width: 1.333333rem;
		/*height: 0.506666rem;*/
		border: 1px solid #f38873;
		color: #f38873;
		border-radius: 0.066666rem;
		text-align: center;
		line-height: 0.506666rem;
	}
	
	#app .bottom dl dd .right{
		width: 30%;
		height: 100%;
		padding-right: 0.133333rem;
		text-align: right;
	}
	
	#app .bottom dl dd .right p{
		margin-bottom: 0.133333rem;
	}
	
	#app .bottom dl dd .right p:nth-child(1){
		font-size: 18px;
		color: #ca3232;
	}
	
	#app .bottom dl dd .right p:nth-child(2){
		font-size: 14px;
		color: #ccc;
		text-decoration:line-through;
	}
	
	
</style>
