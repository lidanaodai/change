<template>
  <div id="app">
    <div class="top">
    	<dl @click="tolist_01()">
	    	<dt><!-- <img src="../../../img/01_shopping/type01.jpg"/> --></dt>
	    	<dd>新品上架</dd>
	    </dl>
	    
	    <dl>
	    	<dt><!-- <img src="../../../img/01_shopping/type02.jpg"/> --></dt>
	    	<dd>排毒养颜</dd>
	    </dl>
	    
	    <dl @click="tolist_03()">
	    	<dt><!-- <img src="../../../img/01_shopping/type03.jpg"/> --></dt>
	    	<dd>减肥塑形</dd>
	    </dl>
	    
	    <dl>
	    	<dt><!-- <img src="../../../img/01_shopping/type04.jpg"/> --></dt>
	    	<dd>女士调理</dd>
	    </dl>
	    
    </div>
    
    <div class="bottom">
    	<dl>
	    	<dt><!-- <img src="../../../img/01_shopping/type05.jpg"/> --></dt>
	    	<dd>运动营养</dd>
	    </dl>
	    
	    <dl>
	    	<dt><!-- <img src="../../../img/01_shopping/type06.jpg"/> --></dt>
	    	<dd>心血管健康</dd>
	    </dl>
	    
	    <dl>
	    	<dt><!-- <img src="../../../img/01_shopping/type07.jpg"/> --></dt>
	    	<dd>男士健康</dd>
	    </dl>
	    
	    <dl>
	    	<dt><!-- <img src="../../../img/01_shopping/type08.jpg"/> --></dt>
	    	<dd>精品套装</dd>
	    </dl>
	    
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
     
    }
  },

  methods:{
    tolist_01(){
     this.$router.push({path:"/list_01_details"})
    },
    tolist_03(){
     this.$router.push({path:"/list_03_details"})
    }
  }
}
</script>

<style scoped="scoped">
	#app{
		width: 100%;
		height: 5.173333rem;
		background: #fff;
	}
	
	.top{
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding-top: 0.4rem;
	}
	
	.bottom{
		display: flex;
		justify-content:space-around;
		flex-wrap: wrap;
	}
	
	dl {
		width: 25%;
		height: 2rem;
	}
	
	dl dt{
		width: 1.333333rem;
		height: 1.333333rem;
		margin-left:0.586667rem;
		margin-right: 0.586667rem;
		background:url(../../../img/01_shopping/icon.png);
		background-size: 9.6rem 17.066667rem; 
	}
	/* 上面4张图 */
	.top dl:nth-child(1) dt{
		background-position: -0.36rem -3.186667rem;
	}

	.top dl:nth-child(2) dt{
		background-position: -2.16rem -3.186667rem;
	}

	.top dl:nth-child(3) dt{
		background-position: -3.973333rem -3.186667rem;
	}

	.top dl:nth-child(4) dt{
		background-position: -5.773333rem -3.186667rem;
	}

	/* 下面4张图 */
	.bottom dl:nth-child(1) dt{
		background-position: -0.36rem -5.586667rem;
	}

	.bottom dl:nth-child(2) dt{
		background-position: -2.16rem -5.586667rem;
	}

	.bottom dl:nth-child(3) dt{
		background-position: -3.973333rem -5.586667rem;
	}

	.bottom dl:nth-child(4) dt{
		background-position: -5.773333rem -5.586667rem;
	}

	dl dt img{
		width: 100%;
		height: 100%;
	}
	
	dl dd{
		width: 100%;
		height: 30%;
		line-height: 0.6rem;
		text-align: center;
		font-size:0.32rem;
		color: #777777;
		font:bold 0.16rem/1.5em "Microsoft YaHei"; 
		margin-top:0.293333rem; 
	}
</style>
