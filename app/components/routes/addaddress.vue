<template>
	<div class="addaddress-container">
		<header class="addaddress-header">
			<span class="back iconfont icon-fanhui1" @click="goBack">
				
			</span>
			<h1>
				新增收货地址
			</h1>
		</header>
		<div class="addaddress-form">
			<mu-paper>
				<mu-text-field hintText="输入收货人" v-model="name" class="demo-divider-form" :underlineShow="false" fullWidth/>
				<mu-divider/>
				<mu-text-field hintText="输入收货人联系号码" v-model="phoneNum" class="demo-divider-form" :underlineShow="false" fullWidth/>
				<mu-divider/>
				<mu-text-field hintText="请填写区号-电话号码(选填)" v-model="telNum" class="demo-divider-form" :underlineShow="false" fullWidth/>
				<mu-divider/>
				<mu-text-field hintText="请选择地址所在区域" v-model="area" class="demo-divider-form" :underlineShow="false" fullWidth @focus="showMap" @blur="hideMap"/>
				<div class="map-box">
					<div id="allmap" class="allmap" v-show="isShowMap"></div>
				</div>
				<mu-divider/>
				<mu-text-field hintText="请输入详细收货地址" v-model="detail" class="demo-divider-form" multiLine :rows="3" :rowsMax="6" :underlineShow="false" fullWidth/>
				<mu-divider/>
			</mu-paper>
		</div>
		<div class="add-btn-box">
			<p class="add-btn" :class="{'active':isAddBtnActive}" @click="addaddress">新增地址</p>
		</div>
		<!-- 添加成功提示 -->
		<mu-dialog :open="dialog" title="系统提示">
		    添加成功
		    <mu-flat-button class="success-tips" label="确定" slot="actions" primary @click="close"/>
		</mu-dialog>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				//列表信息
				name:"",
				phoneNum:"",
				telNum:"",
				area:"",
				detail:"",
				//显示地图
				isShowMap:false,
				isAddBtnActiveTest:false,
				username:"",
				//成功提示
				dialog:false
			}
		},
		computed:{
			isAddBtnActive(){
				if(this.name && this.phoneNum && this.telNum && this.area && this.detail){
					this.isAddBtnActiveTest = true;
					return true
				}else{
					this.isAddBtnActiveTest = false;
					return false
				}
			}
		},
		methods:{
		    //返回
		    goBack(){
		    	history.back();
		    },
		    //显示/隐藏地图
		    showMap(){
		    	this.isShowMap = true;
		    	var self = this;
		    	window.navigator.geolocation.getCurrentPosition(function(position){
					theLocation(position.coords.longitude,position.coords.latitude);
				});

		    	//根据经纬度还原地图信息
				//百度地图API功能
				var map = new BMap.Map("allmap");
				var geoc = new BMap.Geocoder();    
				map.centerAndZoom(new BMap.Point(116.331398, 39.897445), 10);
				map.enableScrollWheelZoom(true);

				// 用经纬度设置地图中心点
				function theLocation(longitude, latitude) {
					if(longitude != "" && latitude) {
						map.clearOverlays();
						var new_point = new BMap.Point(longitude, latitude);
						var marker = new BMap.Marker(new_point); // 创建标注
						map.addOverlay(marker); // 将标注添加到地图中
						map.centerAndZoom(new_point,20);
						getLocation(new_point);
						//通过目标点获取地址
						function getLocation(pt){
							return new Promise(function(resolve,reject){
								geoc.getLocation(pt, function(rs){
								var addComp = rs.addressComponents;
									var currentAddress = addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
									self.area = currentAddress;
								});
							})
						}
					}
				}
		    },
		    hideMap(){
		    	this.isShowMap = false;
		    },
		    //发送地址信息至后台
		    addaddress(){
		    	if(this.isAddBtnActiveTest){
		    		//获取cookie中的用户名
					var str = document.cookie;
					var arr = str.split("; ");
					arr.forEach((item)=>{
						var arr2 = item.split("=");
						if(arr2[0] == "username"){
							this.username = arr2[1];
						}
					})
					//上传地址信息至数据库
		    		this.dialog = true;
		    	}
		    },
		    //成功跳转
		    close(){
		    	this.dialog = false;
				location.href = "#/myaddress";
		    }
		}
	}
</script>
<style scoped>
	.addaddress-container{
		width: 100%;
		height: 100%;
		font-size: 0.186667rem;
		position: relative;
	}
	/*头部样式*/
	.addaddress-header{
		height: 0.6rem;
		position: relative;
		border-bottom: 1px solid #ddd;
		background-color: #f9f9f9;
	}
	.addaddress-header .back{
		position: absolute;
		display: block;
		height: 0.6rem;
		width: 0.6rem;
		font-size: 0.333333rem;
		text-align: center;
		line-height: 0.6rem;
		font-weight: bold;
	}
	.addaddress-header h1{
		margin: 0;
		height: 0.6rem;
		font-size: 0.24rem;
		line-height: 0.6rem;
		text-align: center;
	}
	/*地址资料表单*/
	.addaddress-form{
		background-color: #fff;
	}
	.demo-divider-form {
		margin-bottom: 0;
		margin-left: 20px;
	}
	/*百度地图样式*/
	.map-box{
		padding:0 0.266667rem;
	}
	#allmap{
		width: 100%;
		height: 300px;
	}
	/*提交按钮*/
	.add-btn-box{
		margin-top: 0.533333rem;
		height: 0.906667rem;
		padding: 0.16rem;
	}
	.add-btn-box .add-btn{
		height: 0.586667rem;
		background-color: rgb(222, 222, 222);
		font-size: 0.24rem;
		line-height: 0.586667rem;
		text-align: center;
		color:#fff;
		border-radius: 0.053333rem;
	}
	.add-btn-box .add-btn.active{
		background-color: #d7063b;
	}
	/*成功提示*/
	.success-tips{
		font-size: 0.24rem;
		color:#d7063b;
	}
</style>