<template>
	<el-row class="container">
		<!--顶部导航栏-->
		<el-col :span="24" class="header">
			<!--应用列表-->
			<el-col :span="6" style="height: 60px; width: 100px; background: #FF3825;">
				<el-dropdown trigger="click">
				  	<span class="el-dropdown-link"><img src="../assets/logo_nav/card.png" style="margin: -10px 31px"/></span>
					<el-dropdown-menu slot="dropdown" style="width: 300px;height: 600px; background: #3e3e3e; opacity: 0.8; top: 0px">
						<el-col :space="24" style="margin-top: 20px;">
							<el-input
									placeholder="请输入要搜索的应用"
									icon="search"
									v-model="input2"
									:on-icon-click="handleIconClick" style="width: 240px; margin-left: 27px; margin-top: 10px">
							</el-input>
						</el-col>
						<el-col :span="24" style="margin-top: 50px;">
							<span class="taskspan"><img src="../assets/logo_menu/logo_2.png" style="padding:15px;" /></span>
							<span class="taskspan"><img src="../assets/logo_menu/logo_3.png" style="padding:15px;" /></span>
							<span class="taskspan"><img src="../assets/logo_menu/logo_4.png" style="padding:15px;" /></span>
							<span class="taskspan"><img src="../assets/logo_menu/logo_5.png" style="padding:15px;" /></span>
							<span class="taskspan"><img src="../assets/logo_menu/logo_6.png" style="padding:15px;" /></span>
							<span class="taskspan"><img src="../assets/logo_menu/logo_7.png" style="padding:15px;" /></span>
							<span class="taskspan"><img src="../assets/logo_menu/logo_8.png" style="padding:15px;" /></span>
							<span class="taskspan"><img src="../assets/logo_menu/logo_9.png" style="padding:15px;" /></span>
							<span class="taskspan"><img src="../assets/logo_menu/logo_10.png" style="padding:15px;" /></span>
							<span class="taskspan"><img src="../assets/logo_menu/logo_11.png" style="padding:15px;" /></span>
						</el-col>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
			<!--任务栏-->
			<el-col :span="6">
				<span class="taskspan"><img src="../assets/logo_nav/log0_12.png" /></span>
				<span class="taskspan"><img src="../assets/logo_nav/log0_13.png" /></span>
				<span class="taskspan"><img src="../assets/logo_nav/log0_14.png" /></span>
				<span class="taskspan"><img src="../assets/logo_nav/log0_nav_15.png" /></span>
			</el-col>
			<!--用户信息-->
			<el-col :span="6" class="userinfo" style="height: 52px; width: 100px; float: right">
				<el-dropdown trigger="click">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" style="border-radius: 50px;"/></span>
					<el-dropdown-menu slot="dropdown" style="width: 300px;height: 600px; background: #3e3e3e; opacity: 0.8">
						<el-col :span="24">
							<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" style="margin-left: 85px;margin-top: 20px; margin-bottom: 30px;"/></span>
						</el-col>
						<el-col :span="24" style="min-height: 200px">
							<div class="display: flex">
								<el-dropdown-item>账户状态</el-dropdown-item>
								<el-dropdown-item>账户设置</el-dropdown-item>
								<el-dropdown-item>注销账户</el-dropdown-item>
								<el-dropdown-item>用户切换</el-dropdown-item>
								<el-dropdown-item>帮助</el-dropdown-item>
								<el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
							</div>
						</el-col>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
			<!--用户操作-->
			<el-col :span="6" style="width: 150px; float: right;">
				<el-button type="primary" icon="menu" @click="dialogTableVisible1 = true" class="mybutton"></el-button>
				<el-dialog title="" :visible.sync="dialogTableVisible1" top="20%">
					<el-row :gutter="20" style="margin: -68px -20px -30px;">
						<el-col :span="6" style="padding-left: 0px; padding-right: 1px">
							<div class="grid-content bg-purple"></div>
						</el-col>
						<el-col :span="18" style="padding-left: 0px; padding-right: 0px">
							<div class="grid-content bg-purple">
								<img src="../assets/shop/banner_store.png" alt="Pulpit rock"  width=100% height="100%" style="margin-top: 35px">
							</div>
						</el-col>
					</el-row>
				</el-dialog>
				<el-button type="primary" icon="setting" @click="dialogTableVisible2 = true" class="mybutton"></el-button>
				<el-dialog title="" :visible.sync="dialogTableVisible2" top="20%">
					<el-row :gutter="20" style="margin: -68px -20px -30px;">
						<el-col :span="6" style="padding-left: 0px; padding-right: 1px">
							<div class="grid-content bg-purple"></div>
						</el-col>
						<el-col :span="18" style="padding-left: 0px; padding-right: 0px">
							<div class="grid-content bg-purple"></div>
						</el-col>
					</el-row>
				</el-dialog>
				<el-button type="primary" icon="message" @click="" class="mybutton"></el-button>
			</el-col>
		</el-col>
		<!--中部导航栏-->
		<el-col :span="24" class="subheader">
			<!--图标-->
			<el-col :span="8" class="el-menu-demo">
				<span><img src="../assets/logo_nav/log0_14.png" style="margin-top: 18px; margin-left: 20px;"/></span>
			</el-col>
			<!--导航-->
			<el-col :span="8" class="nav-midle">
				<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect1">
					<el-menu-item index="1">Overview</el-menu-item>
					<el-menu-item index="1">Campaign</el-menu-item>
					<el-menu-item index="3">Analytics</el-menu-item>
				</el-menu>
			</el-col>
			<!--按钮-->
			<el-col :span="8" class="el-menu-demo" style="width: 30%;">
				<el-button style="width: 80px; float: right; margin-top: 13px; margin-right: -20px; background: #20a0ff; color: #ffffff" @click.native.prevent="">Premium</el-button>
			</el-col>
		</el-col>
		<!--侧边导航栏-->
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
						 unique-opened router v-show="!collapsed">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container" style="height: 50px; width: 200px;">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner" style="font-size: 25px;">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper" style="background: #EEF1F6">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
					<el-col :span="24" style="height: 50px">
						<el-pagination
								small
								layout="prev, pager, next"
								:total="50">
						</el-pagination>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				sysName:'VUE-IIOT',
				collapsed:false,
				sysUserName: '',
				sysUserAvatar: '',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				activeIndex: '1',
				activeIndex2: '1',
				input2: '',
				gridData: [{
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				dialogTableVisible1: false,
				dialogFormVisible1: false,
				dialogTableVisible2: false,
				dialogFormVisible2: false
			}
		},
		methods: {
			// showSide:function(){
			// 	//this.$store.dispatch('showSideBar')
			// },
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			handleSelect1(key, keyPath) {
				console.log(key, keyPath);
			},
			handleIconClick(ev) {
				console.log(ev);
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});
			},
			//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '~scss_vars';

	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 52px;
			line-height: 52px;
			/*background: $color-primary;*/
			background: #3e3e3e;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 30px;
						height: 30px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.appinfo {
				text-align: right;
				padding-right: 35px;
				float: left;
				.appinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				//width:230px;
				height:52px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				border-color: rgba(238,241,146,0.3);
				border-right-width: 1px;
				/*border-right-style: solid;*/
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color:#fff;
				}
			}
			.logo-width{
				width:230px;
			}
			.logo-collapse-width{
				width:60px
			}
			.tools{
				padding: 0px 23px;
				width:14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}
		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 114px;
			bottom: 0px;
			overflow: hidden;
			background:#DFDFDF;
			aside {
				flex:0 0 90px;
				width: 90px;
				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				.el-menu{
					height: 100%;
				}
				.collapsed{
					width:60px;
					.item{
						position: relative;
					}
					.submenu{
						position:absolute;
						top:0px;
						left:60px;
						z-index:99999;
						height:auto;
						display:none;
					}

				}
			}
			.menu-collapsed{
				flex:0 0 90px;
				width: 90px;
			}
			.menu-expanded{
				flex:0 0 85px;
				width: 85px;
			}
			.content-container {
				// background: #f1f2f7;
				flex:1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 30px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	.subheader {
		height: 60px;
		border:1px solid #eef1f5;
		background-color: #eef1f6;
	}
	.nav-midle {
		margin:0 auto;
	}
	.taskspan {
		position: relative;
		top: 5px;
		padding-left:15px;
	}
	.button-img {
		margin: 0 auto;
	}
	.shop {
		backgound: #3e3e3e
	}
	.settings {
		background: #3e3e3e
	}
	.mybutton {
		color: #ffffffd9;
		background-color: #20a0ff00;
		border-color: #20a0ff00;
	}

	.el-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	.el-col {
		/*border-radius: 0px;*/
	}
	.bg-purple-dark {
		/*background: #99a9bf;*/
	}
	.bg-purple {
		/*background: #d3dce6;*/
		background: #3e3e3e;
	}
	.bg-purple-light {
		/*background: #e5e9f2;*/
	}
	.grid-content {
		border-radius: 0px;
		min-height: 550px;
	}
	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>
