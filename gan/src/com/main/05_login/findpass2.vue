<template>
  <div id="findpass">
  	<div class="back" v-on:click="back()">返回</div>
		<div class="header">
			<div>
				找回密码
			</div>
		</div>
		<p class="tishi">短信验证码已发送，请输入验证码</p>
		<input type="text" placeholder="验证码" v-model="yzm">
		<button class="next" @click="next()">下一步</button>
		<div class="footer">
			<span>{{time}}</span><span @click="cxfs()">重新发送</span>
		</div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'findpass',
  data () {
    return {
     yzm:null,
     time:"",
     code:this.$route.query.code
    }
  },
  methods:{
  		back(){
    		this.$router.go(-1)
    	},
    	next(){
    		if(this.yzm==this.code){
    			console.log("输入正确")
    			this.$router.push({path:"/findPass3",query:{phone:this.$route.query.phone}})
    		}else{
    			console.log("输入错误")

    		}
    	},
    	cxfs(){
    		var that=this
    		var url = "http://114.55.249.153:8028/login/findPasswordByPhone";
			axios.post(url,{"phone":that.$route.query.phone}).then(function(res){
		    			console.log(res.data)
		    			that.code=res.data.code;
		    			console.log(that.code)
		    			that.time=59;
		    			var djs=setInterval(function(){
		    				that.time--
		    				if(that.time<=0){
		    					clearInterval(djs)
		    					that.time=""
		    				}
		    			},1000)
	    		});
    	}
  },
  created(){

  }
}
</script>

<style scoped="scoped">
	.footer{
		width: 100%;
		text-align: center;
		font-size: 0.32rem;
		margin-top: 0.746667rem;
		color: #ca3232;
	}
	.next{
		width:7.866667rem;
		height: 1.2rem;
		background: #ca3232;
		border-radius: 0.16rem;
		margin: 0 auto;
		line-height: 1.173333rem;
		border:none;
		display: block;
		margin-top: 1.453333rem;
		color:#fff;
		font-size: 0.426667rem;
	}
	input{
		width: 8.4rem;
		height:1.6rem;
		border: none;
		border-bottom: 1px solid #dddddd;
		margin: 0 auto;
		font-size: 0.373333rem;
		display: block;
		line-height:1.6rem;
		text-align: center;
	}
	#findpass{
		width: 100%;
		height: 17.786667rem;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 99999999999;
		background:#fff;
	}
	.header{
		height: 1.173333rem;
		width: 100%;
		background: #ca3232;
	}
	.header div{
		width: 100%;
		height: 1.173333rem;
		line-height:  1.173333rem;
		font-size: 0.506667rem;
		font-weight: bold;
		color:#fff;
		text-align: center;
	}
	.back{
		position: fixed;
		width:1.173333rem;
		height: 0.613333rem;
		background:url(../../../img/05_login/login.png) no-repeat;
		background-size: 6.826667rem 6.826667rem;
		background-position:-4.8rem -0.266667rem;
		line-height: 0.613333rem;
		top:0.28rem;
		left: 0.266667rem;
		font-size:0.373333rem;
		color: #fff;
		text-align: end;
	}
	.tishi{
		text-align: center;
		font-size: 0.506667rem;
		margin-top: 1.906667rem;
		color: #444444;
		height: 0.506667rem;
		margin-bottom: 0.56rem;
	}
</style>
