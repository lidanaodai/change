<template>
  <div id="loginPage">
  	<div class="back" v-on:click="back()">返回</div>
	<div class="banner">
		<img v-lazy="src"/>
	</div>
	<!-- 选项卡 -->
	<div class="tab">
		<div v-for="(item,index) in arr" v-bind:class="{'active':flag==index}" v-on:click='light(index)'>{{item.type}}</div>
	</div>

	<!-- 登录 -->
	<div v-if="show" class="login">
		<input type="text" placeholder="请输入手机号" v-model="dlname">
		<input type="password" placeholder="请输入密码"  v-model="dlpass">
		<button @click="login()">登 录</button>
		<router-link to="/findPass">忘记密码?</router-link>
	</div>

	<!-- 注册 -->
	<div v-if="!show" class="zc">
		<input type="text" placeholder="请输入您的手机号" v-model="zcname">
		<input type="text" placeholder="请输入验证码"  v-model="zcyzm">
		<button class="yzmbtn" @click="yzm()" :disabled="disabled">{{yzmval}}</button>
		<input type="password" placeholder="请输入密码"  v-model="zcpass">
		<input type="text" placeholder="邀请码(没有可不填)"  v-model="zcyqm">
		<button @click="reg()">注 册</button>
	</div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'loginPage',
  data () {
    return {
    arr:[
    	{"type":"登录"},
    	{"type":"注册"}
    ],
     src:"./src/img/05_login/bg1.jpg",
     flag:0,
     show:true,
     dlname:"",
     dlpass:"",
     zcname:"",
     zcpass:"",
     zcyzm:"",
     zcyqm:"",
     yzms:"",
     yzmval:"获取验证码",
     disabled:false,
     sum:10

    }
  },
  methods:{
  	//选项卡切换
  	 light:function(index){
            this.flag=index;
            if(this.flag==0){
            	this.src="./src/img/05_login/bg1.jpg";
            	this.show=true;
            }else if(this.flag==1){
            	this.src="./src/img/05_login/bg2.jpg";
            	this.show=false;
            }
       },
       //返回上一页
       back(){
    	this.$router.go(-1)
    	},
    	//登录
    login(){
    	var that = this;
    	if(this.dlname==""||this.dlpass==""){
    		console.log("用户名或密码不能为空")
    	}else if(this.dlname.length!=11||this.dlpass.length<6){
    		console.log("电话格式不对或密码少于六位")
    	}
    	else{
    		var url = "http://114.55.249.153:8028/login/LoginByPhone";
	    		axios.post(url,{"phone":this.dlname,"password":this.dlpass}).then(function(res){
	    			if(res){
	    				console.log(res.data)
	    				if(res.data.error_code==1){
	    					console.log("用户名或密码错误")
	    				}else{
	    					console.log("登录成功")
	    					that.$router.push({path: '/shopping'})
	    					localStorage.setItem("login",res.data.data.phone)
	    				}
	    			}
	    		})
	    	}
    	},
    	//注册
    reg(){
    	var that = this;
    	if(this.zcname==""||this.zcpass==""){
    		console.log("电话或密码不能为空")
    	}else if(this.zcname.length!=11||this.zcpass.length<6){
    		console.log("电话格式不对或密码少于六位")
    	}else if(this.zcyzm==""){
    		console.log("验证码不能为空")
    	}
		else if(this.zcyzm!=this.yzms){
	    	console.log("验证码错误")
	    }
    	else{
    		var url = "http://114.55.249.153:8028/login/regWithPhone";
	    		axios.post(url,{"phone":this.zcname,"password":this.zcpass}).then(function(res){
	    			if(res){
	    				console.log(res.data)
	    				if(res.data.error_code==1){
	    					console.log("注册失败")
	    				}
	    				
	    				else{
	    					console.log("注册成功")
	    					that.$router.push({path: '/shopping'})

	    				}
	    			}
	    		})
	    	}
    	},
    	yzm(){//验证码
    		console.log(this.zcname.split("").length)
    		if(this.zcname.split("").length==11){
    			var that = this;
	    		var url = "http://114.55.249.153:8028/login/sendCode";
		    		axios.post(url,{"phone":this.zcname}).then(function(res){
		    			if(res){
		    				// console.log(res.data.code)
		    				that.yzms = res.data.code;
		    			}
		    		});
		    		that.sum=59;
		    	that.disabled=true;
    			
		    	var aa=setInterval(function(){
    				that.yzmval = that.sum--;

    				if(that.sum==0){
    				clearInterval(aa)
    				that.disabled=false;
    				that.yzmval="获取验证码";
    				}
    			},1000)
    		}
       			

    	}
    	
  },
  created(){
  	this.flag=this.$route.query.id;
  	this.light(this.flag)
  }
    }


</script>

<style scoped="scoped">
		*{
			margin:0;
			padding: 0;
		}
	/*返回上一页样式*/
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
	/*登录*/
	.login a{
		text-align: center;
		text-decoration: none;
		display: block;
		font-size:0.373333rem;
		color: #666666;
		margin-top:0.96rem; 
	}
	.login input{
		width: 8.4rem;
		height:1.6rem;
		border: none;
		border-bottom: 1px solid #dddddd;
		text-align: center;
		margin: 0 auto;
		font-size: 0.373333rem;
		display: block;
		line-height:1.6rem;
	}
	.login button{
		width: 7.866667rem;
		height: 1.333333rem;
		margin: 0 auto;
		display: block;
		margin-top: 1.32rem;
		border:none;
		border-radius: 0.16rem;
		background: #ca3232;
		font-size: 0.48rem;
		color: #fff;
	}
	.login input:nth-child(1){
		margin-top: 0.933333rem;
		background:url(../../../img/05_login/tel.png) no-repeat 0.133333rem center;
		background-size: 0.386667rem 0.666667rem;
	}
	.login input:nth-child(2){
		margin-top: 0.653333rem;
		background:url(../../../img/05_login/suo_guan.png) no-repeat 0.133333rem center;
		background-size: 0.413333rem 0.666667rem;
	}
	/*登录end*/
	/*注册*/
	.zc{
		position: relative;
	}
	.zc input{
		width: 8.4rem;
		height:1.6rem;
		border: none;
		border-bottom: 1px solid #dddddd;
		margin: 0 auto;
		font-size: 0.373333rem;
		display: block;
		line-height:1.6rem;
		text-indent: 1.026667rem;
	}
	.zc .yzmbtn{
		width: 2.133333rem;
		height: 0.666667rem;
		border: none;
		border: 0.026667rem solid #bbbbbb;
		border-radius: 0.093333rem;
		background: none;
		font-size: 0.32rem;
		color: #bbbbbb;
		position: absolute;
		right: 0.8rem;
		top:2.333333rem;
	}
	.zc button:last-child{
		width: 7.866667rem;
		height: 1.333333rem;
		margin: 0 auto;
		display: block;
		margin-top:0.92rem;
		border:none;
		border-radius: 0.16rem;
		background: #ca3232;
		font-size: 0.48rem;
		color: #fff;
	}
	.zc input:nth-child(1){
		margin-top: 0.266667rem;
		background:url(../../../img/05_login/tel.png) no-repeat 0.053333rem center;
		background-size: 0.386667rem 0.666667rem;
	}
	.zc input:nth-child(2){
		margin-top: 0.253333rem;
		background:url(../../../img/05_login/yanzhen.png) no-repeat left center;
		background-size:0.586667rem 0.586667rem;
	}
	.zc input:nth-child(4){
		margin-top: 0.253333rem;
		background:url(../../../img/05_login/suo_kai.png) no-repeat 0.04rem center;
		background-size: 0.413333rem 0.666667rem;
	}
	.zc input:nth-child(5){
		margin-top: 0.253333rem;
		background:url(../../../img/05_login/yaoqing.png) no-repeat left center;
		background-size:0.586667rem 0.586667rem;
	}
	/*注册end*/

	/*页面*/
	#loginPage{
		width: 100%;
		height: 17.786667rem;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9999999999;
		background: #fff;
	}
	/*背景图*/
	.banner{
		height: 5.733333rem;
		width: 100%;
	}
	.banner img{
		width: 100%;
		height: 100%;
	}
	/*选项卡*/
	.tab{
		width: 100%;
		height: 1.466667rem;
		background:#f3f3f3;
	}
	.tab div{
		float: left;
		width: 50%;
		height: 100%;
		text-align: center;
		line-height:1.466667rem;
		font-size: 0.426667rem;
		color: #bbbbbb;
	}
	/*选中样式*/
	.active{
		color:#777 !important;
		background: url(../../../img/05_login/jiantou.png) no-repeat;
		background-size: 0.306667rem 0.266667rem;
		background-position: center bottom ;
	}
</style>
