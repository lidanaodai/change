<template>
  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper" >
    <!-- slides -->
    <swiper-slide v-for="data in arr"><img v-lazy="data.imgpath"/></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  // swiper options example:
  import axios from "axios"
  export default {
    name: 'carrousel',
    data() {
      return {
        arr:[],

      	notNextTick: true,
        swiperOption: {
          autoplay: 3000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
        },
        // src1:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1659197449,768513343&fm=27&gp=0.jpg",
        // src2:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2857247625,770481709&fm=27&gp=0.jpg",
        // src3:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1944606280,2566898697&fm=27&gp=0.jpg"
      }
    },

    created(){
      var url="http://114.55.249.153:8028/banner/list"
      axios.get(url).then((res)=>{
        this.arr = res.data.data
        // console.log(this.arr)
      })

    }
  }
</script>

<style scoped="scoped">
	.swiper-container{
		width: 100%;
		height: 5.333333rem;
	}
	
	.swiper-slide{
		width: 100%;
		height: 100%;
	}
	
	img{
		width: 100%;
		height: 100%;
	}
</style>
