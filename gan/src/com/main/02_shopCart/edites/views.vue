<template>
  <div id="content">
	 <form>
	 	姓名:<input type="text" name="">
	 	电话:<input type="tel" name="">
	 	地址:<input type="address" name="">
	 </form>
	 <button style="background:green;" @click="edit()">修改</button>
	 <button style="background:red;" @click="back()">取消</button>
  </div>
</template>

<script>

export default {
  name: 'content',
  data () {
    return {
    	
    }
  },
  methods:{
  	edit(){
  		alert("确认要修改么")
  	},
  	back(){
  		this.$router.push({path:"/change"})
  	}
  }
}
</script>

<style scoped="scoped">
	form{
		width: 100%;
		height: 4.0rem;
		font-size: 0.48rem;
		margin-left: 0.266667rem;
	}
	form input{
		width: 8.366667rem;
		height: 0.8rem;
		margin-top: 0.366667rem;
		border-radius: 0.133333rem;
		border:1px solid grey;
	}
	button{
		width: 40%;
		height: 1rem;
		border-radius: 0.2rem;
		display: block;
		margin: 0;
		padding: 0;
		border:none;
		color: white;
		font-size: 0.48rem;
		text-align: center;
		float: left;
		margin-left: 5%;
	}
</style>
