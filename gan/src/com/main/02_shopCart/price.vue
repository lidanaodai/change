<template>
  <div id="price">
      <div class="prices">
      	<p>
      		总价:￥{{tal}}
      	</p>
      	<router-link to="/sell">
      		<button>确认支付</button>
      	</router-link>
      	
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'price',
  data () {
    return {
     	message:[]
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
	.prices{
		width: 100%;
		height: 1.28rem;
		background: #ffffff;
		position: fixed;
		bottom: 0;
		left: 0;
	}
	.prices p{
		height: 1.28rem;
		float: left;
		font-size: 0.426667rem;
		color: #ca3232; 
		line-height: 1.28rem; 
		margin-left:  0.32rem; 
	}
	button{
		width: 2.933333rem;
		height: 1.28rem;
		background:#ca3232;
		color: white;
		font-size: 0.426667rem;
		border:none;
		float: right;
	}
</style>
