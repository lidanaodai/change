<template>
  <div id="app">
  	
  	<div>
  		<router-view></router-view>
  	</div>
  	
  	
  	<div id="footer">
  		<ul>
  			<li>
  				<router-link to="/shopping">
  					<span class="glyphicon glyphicon-briefcase"></span>
  					<p>首页</p>
  				</router-link>
  			</li>
  			<li>
  				<router-link to="/shopCart">
	  				<span class="glyphicon glyphicon-shopping-cart"></span>
	  				<p>购物车</p>
  				</router-link>
  			</li>
  			<li>
  				<router-link to="/shop">
	  				<span class="glyphicon glyphicon-home"></span>
	  				<p>订单管理</p>
  				</router-link>
  			</li>
  			<li>
  				<router-link to="/personal">
	  				<span class="glyphicon glyphicon-user"></span>
	  				<p>个人中心</p>
  				</router-link>
  			</li>
  		</ul>
  	</div>
    
  </div>
  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
  }
}
</script>

<style scoped="scoped">
	#footer{
		width: 100%;
		height: 1.306666rem;
		border-top: 1px solid #ccc;
		position: fixed;
		bottom: 0;
		left: 0;
		background: #fff;
		z-index: 99999999;
	}
	
	#footer ul{
		display: flex;
		justify-content: space-around;
		text-align: center;
		height: 1.306666rem;
		font-size: 0.186666rem;
		margin-top: 0.146666rem;
	}
	
	#footer ul li{
		width: 25%;
		height: 100%;
	}
	
	#footer ul li span{
		font-size: 0.5625rem;
	}
	
	a{
  	text-decoration: none;
  	color: #ccc;
  }
  
  a:hover{
  	color: #ca3232;
  }
	
</style>
