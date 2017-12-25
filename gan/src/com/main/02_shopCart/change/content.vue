<template>
  <div id="content">
    <ul class="logistics">
    	
    		<li v-for="(data,index) in json">
    				<div class="address" @click="checks(index)">
	    				<h4>{{data.name}} {{data.tel}}</h4>
		   	 			<p>{{data.address}}</p>
		   	 				
	    			</div>
	    			<button class="edit" @click="edit()">编辑</button>
    		</li>
	</ul>

	<router-link to="/news">
		<button id="but">添加地址</button>
	</router-link>
	
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'content',
  data () {
    return {
    	json:[],
    	check:[]
    }
  },
  methods:{
  		checks(i){
  			localStorage.setItem("have",JSON.stringify(this.json[i]))
  			console.log(this.check[i])
  			this.$router.push({path:"/footer"})
  		},
  		edit(){
  			this.$router.push({path:"/news"})
  		}
    },
  created(){
  	var url = "../src/com/main/json/address.json"
  	axios.get(url).then((res)=>{
  		this.json = res.data
  		for(var i=0;i<this.json.length;i++){
			this.check[i]=this.json[i].check
		}
		console.log(this.check)

  	})
  }
}
</script>

<style scoped="scoped">
	.logistics{
		width:100%;
		background: #ffffff;
	}
	.logistics li{
		border-bottom: 1px solid #dddddd;
	}
	.address{
		margin-left: 1.066667rem;
		height: 2.0rem;
	}
	.address h4{
		margin: 0;
		color: #000000;
		padding-top:0.453333rem; 
		padding-bottom: 0.266667rem;
		font-size: 0.426667rem;
	}
	.address p {
		margin-bottom: 0;
		color: #666666;
		font-size: 0.346667rem;
	}
	.edit{
		width: 1.4rem;
		height: 0.833333rem;
		border-radius: 0.2rem;
		border:none;
		background: #b5b5b5;
		color: white;
		float: right;
		margin-top: -60px;
		margin-right:30px; 
	}
	#but{
		width: 7.866667rem;
		height: 1.066667rem;
		background: #ca3232;
		border-radius: 0.133333rem;
		text-align: center;
		border:none;
		color: #ffffff;
		font-size: 0.426667rem;
		margin-left: 1.066667rem;
		margin-top: 0.6rem;
	}
</style>
