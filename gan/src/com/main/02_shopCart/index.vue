<template>
  <div id="app">
  	<!--头部-->
    <div class="nav">
    	<h2>购物车</h2>
    	<div class="message">
    		<div class="mess">
    			
    		</div>
    	</div>
    </div>
  <!--主体内容部分-->      
    <div class="content">
    	<ul>

    		<li style="margin-top: 0.4rem; margin-bottom: 0.4rem;" v-for="(data,index) in message">
    			<div class="form" style="margin-top: 1.066666rem;">
    				<div class="input" >
    					<mu-checkbox uncheckIcon="check_circle_white" checkedIcon="panorama_fish_eye" @click="checks(index)" v-model="check[index]"/>
    				</div>
    			</div>
				
    			<div class="img">
    				<img :src="data.img"/>
    			</div>
    			<div class="title">
    				<p class="alt">{{data.title}}</p>
    				<p class="price">
    					￥{{data.price}}
    					<span>￥{{data.oldPrice}}</span>
    				</p>
    				<button id="bottom" v-on:click="del(index)">-</button>
    				<input type="text" id="numb" v-model="cout[index]" disabled="disabled"/>
    				<button id="top" v-on:click="add(index)">+</button>
    				<button id="remove" @click="remove(index)">删除</button>
    			</div>
    		</li>
    	</ul>
    	<div style="border-bottom: 1px solid grey; height: 0.92rem;">
    			<h4 style="color: darkred; margin-left: 13%;">小计 ￥{{tal}}</h4>
    	</div>
    </div>
<!--一段文字，灰色部分-->
		<div class="pad">
			<hr/>
    		<h4>您可能还想要</h4>
		</div>
<!--下边的推荐部分-->
		<div class="product">
			<dl>
    		<dt>
    			<img src="../../../img/01_shopping/shop09.jpg"/>
    		</dt>
    		<dd>
    			<p >日本2H2D黑玛卡60粒</p>
    		</dd>
    	</dl>
    	<dl>
    		<dt>
    			<img src="../../../img/02_shop/02_shop_03.jpg" style="margin-left: 27%; margin-top: 8%;"/>
    		</dt>
    		<dd>
    			<p>Metabolic酵母酵素 132粒</p>
    		</dd>
    	</dl>
		</div>
		<!--为了显示内容设置空盒子充当底部的高-->
		<div class="space">
			
		</div>
		<!--底部-->
  	<div class="footer">
  		<ul>
  			<li style="font-size: 0.4rem;" class="change">
  				<div class="input" @change="checkbox()">
  					<mu-checkbox uncheckIcon="check_circle_white" checkedIcon="panorama_fish_eye" v-model="checked"/>
  				</div>
  				<span>全选</span>
  			</li>
  			<li class="change1">
  				<p id="req">
  					合计:{{tal}}<br>
  					(不包含运费)
  				</p>
  			</li>
  			<li class="change2">
  				<router-link to="/footer">
  					<button id="del">{{items}}</button>
  				</router-link>	
  			</li>
  		</ul>
  	</div>
  	
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
     items:"去付款",
     check:[],
     checked:true,
     cout:[1,1],
     arr:[],
     message:[]
    }
  },
  methods:{
	  	checkbox(){
	  		
	  		if(this.checked==true){
	  			// alert(1)
	  			this.checked = false
	  			for(var i=0;i<this.check.length;i++){
	  				if(this.check[i]!=null){
	  					this.check[i] = false
	  				}
	  				
	  			}
	  			this.checkes = false
	  		}else{
	  			this.checked = true
	  			for(var i=0;i<this.check.length;i++){
	  				if(this.check[i]!=null){
	  					this.check[i] = true
	  				}
	  			}
	  			this.checkes = true
	  		}
  		},
  		gai(){
  			this.arr =[];
	  		for(var i=0;i<this.cout.length;i++){
	  			this.arr.push(this.cout[i]) 
	  		}
	  		localStorage.setItem("set",this.arr)
	  	},
	  	del(i){
	  		if(this.cout[i]==1){
	  			return
	  		}else{
	  			var a=this.cout[i]--
	  			this.cout[i]=this.cout.splice(i,1,a)
	  			console.log(a)
			  	this.gai();
	  		}
	  	},
	  	add(i){
	  			var a=this.cout[i]++
	  		
	  			this.cout[i]=this.cout.splice(i,1,a)
	  			console.log(a)
	  			
			  	this.gai();		  	
	  	},
	  	remove(i){
	  		alert("是否要删除该商品")
	  		this.message.splice(i,1)
	  		console.log(i)
	  	}
	},
	computed:{
		tal:function(){
			var tal=0;
			for(var i in this.message){
				if(this.check[i] == false){
					tal += this.cout[i]*(this.message[i].price)
				}
			}
			return tal;
		}
	},
	created(){
	 	var url = "../src/com/main/json/shopcar.json"
	  	axios.get(url).then((res)=>{
	  	console.log(res.data)
	  		this.message = res.data

		  	this.check=[]
			for(var i=0;i<this.message.length;i++){
				this.check[i]=this.message[i].check
			}
			console.log(this.check)
			this.arr =[];
		  	if(localStorage.getItem("set")){
		  		this.cout =[]
		  		this.cout = localStorage.getItem("set").split(",");
		  		console.log(this.cout)
		  		for(var i=0;i<this.cout.length;i++){
		  			this.arr.push(parseInt(this.cout[i])) 
		  		}
		  		console.log(this.arr)
		  	}

	  	})
	  	
	}
}
</script>

<style scoped="scoped">
	/*改变路由的字体颜色*/

	/*头部固定层级高于公共头部*/
	.nav{
		width: 100%;
		height: 1.186667rem;
		position: fixed;
		top: 0;
		left: 0;
		background: white;
		z-index: 999999;
		/*border-bottom: 1px solid #ca3232 !important;*/
	}
	.nav .message .mess{
		background:url(../../../img/02_shop/1-2.png) no-repeat;
		background-size: 6.053333rem 4.533333rem;
		background-position: -1.006667rem -0.213333rem;
		width: 0.733333rem;
		height: 0.733333rem ;
		position: fixed;
		top: 0.186667rem;
		right:0.146667rem;
		z-index: 999;
	}
	.nav h2{
		width: 100%;
		height: 1.186667rem;
		text-align: center;
		font-size: 0.506667rem;
		margin: 0;
		padding: 0;
		line-height:1.173333rem;
		position: fixed;
		font-weight: bold;
		float: left;
		border-bottom: 1px solid #ca3232;
	}
	.nav .btns{
		width: 1.2rem;
		height: 0.64rem;
		line-height: 0.64rem;
		background: none;
		border:1px solid #666666;  
		font-size: 0.373333rem;
		text-align: center;
		color: #666666;
		border-radius: 0.15625rem;
		position: fixed;
		top: 0.266666rem;
		right: 1.373333rem;
		z-index: 99999;
	}
	.nav span{
		display: inline-block;
		font-size: 0.48rem;
		color: #ca3232;
		position: fixed;
		top: 0.266666rem;
		right: 0.266666rem;
	}
	/*购物车首页内容部分*/
	.content{
		width: 100%;
		height: 9.913333rem;
		float: left;
		background: white;
	}
	.content ul{
		width: 100%;
		height: 8.266666rem;
	}
	.content ul li{
		width: 100%;
		height: 3.133333rem;
	}
	.content .img{
		width: 2.4rem;
		height: 2.4rem ;
		border: 0.013333rem solid grey;
		text-align: center;
		line-height: 2.526666rem;
		margin-left: 0.266666rem;
		float: left;
		color: black;
		margin-top: 0.266666rem;
	}
	.content .form{
		width: 0.553333rem;
		height: 0.553333rem;
		float: left;
		margin-left: 0.266666rem;
		margin-right: 0.266666rem;
	}
	.content .form .input{
		width: 0.533333rem;
		height: 0.553333rem;
	}
	.content .form .input img{
		width: 100%;
	}
	.content .img img{
		width: 1.2rem;
		height: 2.133333rem;
		margin-top: -0.133333rem;
	}
	.content .title{
		width: 5.706667rem;
		height: 2.4rem;
		float: left;
		margin-left: 0.266667rem;
		margin-top: 0.3rem;
	}
	.content .title p{
		margin: 0;
		padding: 0;
	}
	.content .title .alt{
		font-size: 0.32rem;
		color: #333333;
	}
	.content .title .price{
		font-size: 0.353333rem;
		color: #ca3232;
		margin-bottom: 0.133333rem;
	}
	.content .title #numb{
		width: 1.333333rem;
		height: 0.8rem;
		background:#e6e6e6;
		border: none;
		text-align: center;
		margin-left: 0.026666rem;
		margin-right: 0.026666rem;
	}
	.content .title #bottom{
		width: 0.826666rem;
		height: 0.8rem;
		background: #f7f7f7;
		border-radius: 0.133333rem 0rem 0rem 0.133333rem;
		border: none;
	}
	.content .title #remove{
		width: 0.926666rem;
		height: 0.8rem;
		background: #f91b1b;
		border-radius:0.2rem;
		border: none;
		color: white;
		margin-left: 1.066667rem;
	}
	.content .title #top{
		width: 0.826666rem;
		height: 0.8rem;
		background: #e6e6e6;
		border-radius: 0rem 0.133333rem 0.133333rem 0rem;
		border: none;
	}
	.content span{
		font-size: 14px;
		color: #ccc;
		text-decoration:line-through;
	}
	/*上下两个小部分的分割*/
	.pad{
		width: 100%;
		height: 0.826666rem;
		background: #f1f1f1;
		float: left;
		position: relative;
	}
	.pad hr{
		margin-left: 0.266666rem;
		margin-right: 0.266666rem;
		background: #ccc;
		height: 1px; 
		margin-top: 0.46rem; 
		margin-bottom: 0.46rem;
	}
	.pad h4{
		position: absolute;
		top: -0.06rem;
		left: 3.6rem;
		width: 2.7rem;
		background: #f1f1f1;
		text-align: center;
		color: #999;
	}
	/*底部的一个小透明*/
	.footer{
		width: 100%;
		height: 1.306666rem;
		position: fixed;
		bottom: 1.306666rem;
		left: 0;
		color: white;
	}
	.footer .change{
 		background:rgba(0,0,0,0.75);
	}
	.footer .change span{
		display: inline-block;
		margin-top: 0.346667rem;
	}
	.footer .change .input{
		width: 0.533333rem;
		height: 0.533333rem;
		float: left;
		margin-left: 0.266666rem;
		margin-right: 0.266666rem;
		margin-top: 0.3rem;
	}
	.footer .change .input img{
		width: 100%;
	}
	.footer ul li{
		width: 33.3%;
		height: 1.301333rem;
		text-align: left;
	}
	.footer ul li:first-child input{
		width: 0.533333rem;
		height: 0.533333rem;
		margin-left: 0.266666rem;
		margin-top: 0.266666rem;
		margin-right: 0.133333rem;
	}
	.footer li #req{
		width: 100%;
		height: 1.303333rem;
		border: none;
		font-size: 0.426666rem;
		text-align: center;
		background:rgba(0,0,0,0.75);
	}
	.footer li #del{
		width: 100%;
		height: 1.303333rem;
		background: #ca3232;
		border: none;
		font-size: 0.426666rem;
		color: white;
	}
	.footer ul li{
		float: left;
	}
	.space{
		width: 100%;
		height: 4rem;
	}
	#app .product{
		width: 100%;
		height: 4.666666rem;
		display: flex;
		justify-content: space-around;
		font-size: 0.4rem;
		background: white;
	}
	#app .product dl{
		flex: 1;
		width: 48%;
		height: 100%;
		padding: 0.333333rem 0.466666rem 0.2rem 0.333333rem;
		margin-left: -0.4rem;
	}	
	#app .product dl dt{
		width: 100%;
		height: 4.266666rem;
		margin-left: 0.333333rem;
		border: 0.013333rem solid #ccc;
	}
	#app .product dl dt img{
		height: 90%;
		margin-left: 15%;
		margin-top: 5%;
	}
	#app .product dl dd{
		margin-left: 18%;
	}
</style>
