<template>
  <div id="cole">
	   <div class="admin">
      <dl>
        <dt>
          <div class="img">
            <img src="http://i02.pic.sogou.com/485ff7637d91b9ec" @click="login()"/>
          </div>
        </dt>

        <dd>
          <h3>{{statuS}}</h3>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cole',
  data () {
    return {
     statuS:"未登录"
    }
  },methods:{
  	login(){
  		if(this.statuS=="未登录"){
  			this.$router.push({path:"/login"})
  		}

  	}
  },created(){
  	if(localStorage.getItem("login")){
  		this.statuS=localStorage.getItem("login")
  	}else{
  		this.statuS="未登录"
  	}
  }
}
</script>

<style scoped="scoped">
	.admin{
    width: 100%;
    height: 5.0rem;
    position: relative;
    z-index: 999999999;
    background: url(http://img04.sogoucdn.com/app/a/100520093/74ebe0bf8b246922-6202f549befd4af7-3015a03dbfdf5121a172743bdc31b1ef.jpg);
  }
  .admin dl{
    margin: 0;
  }
  .admin dt{
    width: 100%;
    height: 4.0rem;
    position: absolute;
  }
  .admin dt .img{
    width: 2.666667rem;
    height: 2.666667rem;
    border-radius: 50%;
    border:0.066667rem solid #634b49;
    text-align: center;
    margin:0 auto;
    margin-top: 10%;
  }
  .admin dt .img img{
    width: 100%;
    border-radius: 50%;
  }
  .admin dd{
    width: 100%;
    bottom: 0;
    position: absolute;
    color: #ffffff;
  }
  .admin dd h3{
    text-align: center;
    color: #ff4747;
  }
</style>
