<template>
  <div id="message">
  	<div class="content">
	   	<div class="header">
	   		<div class="logos">
	   			
	   		</div>
	   		<p>
	   		   洋玩意总店
	   		</p>
	   	</div>
      <div class="center">
      		<ul>
      			<li v-for="(data,index) in message">
      				<div class="img">
      					<img :src="data.img">
      				</div>
      				<div class="left">
      					<p>{{data.title}}</p>
    					<p>{{data.alt}}</p>
      				</div>
      				<div class="right">
    					<p>￥ {{data.price}}</p>
    					<p>x {{cout[index]}}</p>
    				</div>
      			</li>
      			<li style="height:0.933333rem; border-bottom:none;padding:0;">
      				<p style="color:#d76565; font-size:0.32rem; float:right; margin-right:0.8rem; height:0.933333rem; line-height:0.933333rem; margin-bottom:-0.133333rem;">小计 ￥{{tal}}</p>
      			</li>
      		</ul>
      </div>	
  </div>
 </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'message',
  data () {
    return {
     	message:[],
     	check:[],
     	cout:[1,1]
    }
  },
	created(){
		if(localStorage.getItem("set")){
  			this.cout = localStorage.getItem("set").split(",")
	  		console.log(this.cout)
	  	}
		this.check=[]
		for(var i=0;i<this.message.length;i++){
			this.check[i]=this.message[i].check
		}
		var url = "../src/com/main/json/shopcar.json"
		axios.get(url).then((res)=>{
			this.message = res.data
		})
	},
	computed:{
		tal:function(){
			var tal=0;
			for(var i in this.message){
				
					tal += this.cout[i]*(this.message[i].price)
				
			}
			return tal;
		}
	}
}
</script>

<style scoped="scoped">
	.content{
		margin-top: 0.266667rem;
		border-top:1px solid #dddddd;
		width: 100%;
		height: 6.666667rem;
		background:#ffffff; 
		border-bottom:1px solid #dddddd;
		/*position: relative;*/
		z-index: 99999999;
	}
	.content .header .logos{
		background:url(../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.053333rem 4.533333rem;
		background-position: -0.28rem -2.466667rem;
		width: 0.426667rem;
		height:0.426667rem;
		margin-top: 0.253333rem;
		margin-left: 0.4rem;
		z-index: 9999;
		float: left;
	}
	.content .header p{
		margin: 0;
		padding: 0;
		font-size: 0.32rem;
		height: 0.32rem;
		float: left;
		line-height: 0.92rem;
		margin-left: 0.106667rem;
		
	}
	.content .header{
		width: 100%;
		height: 0.92rem;
		padding-bottom: 0;
	}
	.center{ 
		background: none;
	}
	.center ul{
		width: 100%;
		height: 4.786667rem;
		background: #ffffff;
		margin: 0;
		padding: 0;
	}
	.center ul li{
		width: 100%;
		height: 2.386667rem;
		border-top: 1px solid #dddddd;
		margin-left: 0.4rem;
		padding-top: 0.4rem;
	}
	.center ul li .img{
		width: 1.6rem;
		height: 1.6rem;
		border:1px solid #dddddd; 
		float: left;
	}
	.center ul li .img img{
		width: 1.2rem;
		height: 1.333333rem;
		margin-left: 0.212667rem;
		margin-top: 0.14rem;
	}
	.center ul li:last-child{
		border-bottom: 1px solid #dddddd;

	}
	.center .left{
		width: 4.2rem;
		height: 1.6rem;
		float: left;
		margin-left: 0.293333rem;
	}
	.center .left p:nth-child(1){
		padding: 0;
		margin: 0; 
		height: 0.693333rem;
		font-size:0.346667rem ;
		line-height: 0.346667rem;
		margin-bottom: 0.386667rem;
	}
	
	.center .left p:nth-child(2){
		width: 1.333333rem;
		border: 1px solid #f38873;
		color: #f38873;
		border-radius: 0.133333rem;
		text-align: center;
		line-height: 0.506666rem;
	}
	.center .right{
		width: 30%;
		height: 100%;
		padding-right: 0.133333rem;
		text-align: right;
		float: right;
		margin-right: 0.4rem;
	}
	
	.center .right p{
		margin-bottom: 0.133333rem;
		font-size: 14px;
		color: #333333;
	}
</style>
