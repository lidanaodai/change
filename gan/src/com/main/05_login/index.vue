<template>
  <div id="login">
	<div class="loge"></div>
	<div class="btns">
		<div class="wxbtn">
			<div class="wxloge"></div>
			<span>微信一键登录</span>
		</div>
		<div class="login">
			<router-link class="loginbtn" :to='{path:"/loginPage",query:{id:0}}'>登录</router-link>
			<router-link class="crtbtn" :to='{path:"/loginPage",query:{id:1}}'>新用户</router-link>
		</div>
		
	</div>
	<div class="footer">
		<p>Copyright © 2016 logo.com</p>
	</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped="scoped">
	.footer{
		width: 100%;
		height: 1.253333rem;
	}
	.footer p{
		text-align: center;
		font-size: 0.24rem;
		height: 0.24rem;
		color: #fff;
		margin-top:0.72rem;
	}
	#login{
		width: 100%;
		background: url(../../../img/05_login/bg.jpg) no-repeat;
		background-size:cover; 
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999999999;
	}
	.loge{
		width: 3.333333rem;
		height: 3.733333rem;
		margin: 0 auto;
		margin-top:3.466667rem;
		background: url(../../../img/05_login/login.png) no-repeat;
		background-size: 6.826667rem 6.826667rem;
		background-position: -3.413333rem -3.026667rem;
	}
	.btns{
		width: 100%;
		height: 3.066667rem;
		margin-top: 6.266667rem;
	}
	.wxbtn{
		width:8.906667rem;
		height: 1.173333rem;
		background: #00a80c;
		border-radius: 0.16rem;
		margin: 0 auto;
		line-height: 1.173333rem;
		border: 1px solid #00a80c;
	}
	.wxbtn span{
		font-size: 0.453333rem;
		float: left;
		display: block;
		color: #fff;
		margin-left: 0.253333rem;
	}
	.wxloge{
		width: 0.68rem;
		height:0.56rem;
		background: url(../../../img/05_login/login.png) no-repeat;
		background-size: 6.826667rem 6.826667rem;
		background-position: -0.266667rem -0.266667rem;
		margin-top: 0.32rem;
		float: left;
		margin-left: 2.413333rem;
	}
	.login{
		width: 8.933333rem;
		height: 1.2rem;
		margin: 0 auto;
		margin-top: 0.666667rem;
	}
	.loginbtn{
		float: left;
		width: 4.133333rem;
		height: 1.2rem;
		border: none;
		border-radius: 0.16rem;
		font-size: 0.453333rem;
		color: #ca3232;
		background: #ffffff;
		text-align: center;
		line-height: 1.2rem;
	}
	.crtbtn{
		float: right;
		width: 4.133333rem;
		height: 1.2rem;
		border:0.026667rem solid #fff;
		border-radius: 0.16rem;
		font-size: 0.453333rem;
		color: #fff;
		background: none;
		text-align: center;
		line-height: 1.2rem;
	}
</style>
