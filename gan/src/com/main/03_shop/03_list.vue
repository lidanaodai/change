<template>
	<div id="list">
		<div class="content">
			<div class="header">
				<p>
					订单编号{{bh[0]}}
				</p>
				<span>
	   			待付款
	   		</span>
			</div>
			<div class="center">
				<ul>
					<li v-for="data in mess">
						<div class="img">
							<img :src="data.img">
						</div>
						<div class="left">
							<p>{{data.title}}</p>
							<p>{{data.alt}}</p>
						</div>
						<div class="right">
							<p>￥ {{data.items}}</p>
							<p>x {{data.count}}</p>
						</div>
					</li>
				</ul>

				<div class="heji">

					<p>(运费￥25.00)</p>
					<p>合计:￥{{sum}}</p>
					<p>共{{sl}}件商品</p>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'list',
		data() {
			return {
				bh: [
					123321312, 13153153
				],
				price: "438",
				mess: [{
						"img": "./src/img/02_shop/2.jpg",
						"title": "Metabolic酵素x酵母精华粒 减肥排毒60粒",
						"items": 219,
						"count": 1,
						"alt": "保税区"
					},
					{
						"img": "./src/img/02_shop/2.jpg",
						"title": "Metabolic酵素x酵母精华粒 减肥排毒60粒",
						"items": 219,
						"count": 1,
						"alt": "保税区"
					}
				],
				sl: 0,
				sum: 0
			}
		},
		methods: {
			gai() {
				this.arr = [];
				for(var i = 0; i < this.val.length; i++) {
					this.arr.push(this.val[i])
				}
				localStorage.setItem("set", this.arr)
			}
		},
		created() {
			for(var i = 0; i < this.mess.length; i++) {
				this.sl += this.mess[i].count;
				this.sum += this.mess[i].count * this.mess[i].items
			}
			console.log(this.sl, this.sum)
		}
	}
</script>

<style scoped="scoped">
	.heji p {
		float: right;
		line-height: 0.92rem;
		color: #666666;
		margin: 0;
		padding: 0;
	}
	
	.heji p:nth-child(3) {
		font-size: 0.266666rem;
		margin-right: 0.133333rem;
	}
	
	.heji p:nth-child(2) {
		font-size: 0.333333rem;
		margin-right: 0.226666rem;
	}
	
	.heji p:nth-child(1) {
		font-size: 0.266666rem;
		margin-right: 0.413333rem;
	}
	
	.content {
		margin-top: 0.266667rem;
		border-top: 1px solid #dddddd;
		width: 100%;
		height: 6.666667rem;
		background: #ffffff;
		border-bottom: 1px solid #dddddd;
		/*position: relative;*/
		z-index: 99999999;
	}
	
	.content .header p {
		margin: 0;
		padding: 0;
		font-size: 0.32rem;
		height: 0.32rem;
		float: left;
		line-height: 0.92rem;
		margin-left: 0.4rem;
		color: #999999;
	}
	
	.content .header span {
		display: block;
		font-size: 0.346666rem;
		color: #ff6600;
		float: right;
		line-height: 0.92rem;
		margin-right: 0.28rem;
	}
	
	.content .header {
		width: 100%;
		height: 0.92rem;
		padding-bottom: 0;
	}
	
	.center {
		width: 100%;
		height: 4.786667rem;
		background: #ffffff;
		margin: 0;
		padding: 0;
	}
	
	.center ul {
		width: 100%;
		background: #ffffff;
		margin: 0;
		padding: 0;
	}
	
	.center ul li {
		width: 100%;
		height: 2.386667rem;
		border-top: 1px solid #dddddd;
		margin-left: 0.4rem;
		padding-top: 0.4rem;
	}
	
	.center ul li .img {
		width: 1.6rem;
		height: 1.6rem;
		border: 1px solid #dddddd;
		float: left;
	}
	
	.center ul li .img img {
		width: 100%;
	}
	
	.center ul li:last-child {
		border-bottom: 1px solid #dddddd;
	}
	
	.center .left {
		width: 4.2rem;
		height: 1.6rem;
		float: left;
		margin-left: 0.293333rem;
	}
	
	.center .left p:nth-child(1) {
		padding: 0;
		margin: 0;
		height: 0.693333rem;
		font-size: 0.346667rem;
		line-height: 0.346667rem;
		margin-bottom: 0.386667rem;
	}
	
	.center .left p:nth-child(2) {
		width: 1.333333rem;
		border: 1px solid #f38873;
		color: #f38873;
		border-radius: 0.133333rem;
		text-align: center;
		line-height: 0.506666rem;
	}
	
	.center .right {
		width: 30%;
		height: 100%;
		padding-right: 0.133333rem;
		text-align: right;
		float: right;
		margin-right: 0.4rem;
	}
	
	.center .right p {
		margin-bottom: 0.133333rem;
		font-size: 14px;
		color: #333333;
	}
</style>