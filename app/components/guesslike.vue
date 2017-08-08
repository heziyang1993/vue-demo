<template>
<div class="thirdpart">
	<p class="maylike">
		<i class="iconfont icon-xinxing"></i>
		<span class="recommend">为您推荐</span>
	</p>
	<div class="guesslike">
		<ul>
			<li>
				<div>
					<img src="http://cn02.alicdn.sasa.com/public/images/f0/52/75/7b5b191b252f5f2cf8fd76988b763cb5e3eca196.jpg?1489391032#h" alt="">
				</div>
				<div>
					<p class="guesslikegoods">
						清风原木金装软包抽纸3层*150抽*20包</p>
					<p class="guesslikeprice">
						<span class="oprice">
							<em>￥</em>
							49.9
						</span>
						<s class="delete">99</s>
					</p>
					<p class="guessbuy">
						<i class="iconfont icon-gouwuche"></i>
					</p>
				</div>
			</li>

			<li>
				<div>
					<img src="http://cn02.alicdn.sasa.com/public/images/f0/52/75/7b5b191b252f5f2cf8fd76988b763cb5e3eca196.jpg?1489391032#h" alt="">
				</div>
				<div>
					<p class="guesslikegoods">
						清风原木金装软包抽纸3层*150抽*20包</p>
					<p class="guesslikeprice">
						<span class="oprice">
							<em>￥</em>
							49.9
						</span>
						<s class="delete">99</s>
					</p>
					<p class="guessbuy">
						<i class="iconfont icon-gouwuche"></i>
					</p>
				</div>	
			</li>
		</ul>
	</div>
	<div class="nomore">
		<div class="nomoreimg">
			<img src="//st02.fn-mart.com/mstatics/assets/img/v2/niuniu.png">
		</div>
		<p class="nomorelast">
			亲，没有更多了哦！！！
		</p>
	</div>
</div>

</template>
<script>
	
</script>
<style scoped>
	.thirdpart{
		position: relative;
	}
	.maylike{
		height: 0.64rem;
		line-height: 0.64rem;
		text-align: center;
		background-color: #eee;
		font-size: 0.186667rem;
	}
	i{
		color: #d7063b;
		font-size: 0.32rem;
	}
	.guesslike{
		width: 100%;
		height: 100%;
		font-size: 0.213333rem;
	}
	.guesslike ul{
		overflow: hidden;
	}
	.guesslike li{
		width: 50%;
		height: 100%;
		box-sizing:border-box;
		float: left;
		border: 1px solid #ddd;
		position: relative;
		background-color: #fff;
	}
	.guesslike li img{
		width: 100%;
		height: 100%;
	}
	.guesslikegoods{
		padding: 0 0.133333rem;
		font-size: 0.16rem;
	}
	.guesslikeprice{
		padding: 0.133333rem 0.133333rem 0.266667rem 0.133333rem;
		/*padding-bottom: 20px;*/
	}
	.guesslikeprice .oprice{
		color: red;
		font-size: 0.186667rem;
	}
	.delete{
		font-size: 0.16rem;
		color: #ddd;
	}
	.guessbuy{
		width: 0.426667rem;
		height: 0.426667rem;
		border: 0.013333rem solid #d7063b;
		border-radius: 50%;
		position: absolute;
		bottom: 0.106667rem;
		right: 0.106667rem;
		background-color: #fde9f0;
	}
	.nomore{
		width: 100%;
		background-color: #eee;
		/*height: 120px;*/
		padding-top: 0.266667rem;
		padding-bottom: 0.266667rem;
		margin-bottom: 0.666667rem;
	}
	.nomoreimg{
		width: 1.066667rem;
		height: 1.066667rem;
		margin: 0 auto;
		position: relative;
	}
	.nomoreimg:before{
		content: "";
    	width: 80%;
    	height: 0.013333rem;
    	background: #999;
    	position: absolute;
    	left: -89%;
    	top: 40%;
	}
	.nomoreimg:after{
		content: "";
    	width: 80%;
    	height: 0.013333rem;
    	background: #999;
    	position: absolute;
    	right: -68%;
    	top: 40%;
	}
	.nomore img{
		width: 0.8rem;
		height: 0.8rem;
	}
	.nomorelast{
		height: 0.266667rem;
		line-height: 0.266667rem;
		text-align: center;
		font-size: 0.16rem;
	}
</style>