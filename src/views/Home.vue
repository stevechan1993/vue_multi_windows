<template>
	<el-row class="container">
		<!--顶部导航栏-->
		<el-col :span="24" class="header">
			<!--应用列表-->
			<el-col :span="8">
				<span><img src="../assets/nav_bag.png" /></span>
			</el-col>
			<!--任务栏-->
			<el-col :span="8">
				<span class="taskspan"><img src="../assets/logo_nav/log0_12.png" /></span>
				<span class="taskspan"><img src="../assets/logo_nav/log0_13.png" /></span>
				<span class="taskspan"><img src="../assets/logo_nav/log0_nav_15.png" /></span>
			</el-col>
			<!--用户操作-->
			<el-col :span="8" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /></span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>账户状态</el-dropdown-item>
						<el-dropdown-item>账户设置</el-dropdown-item>
						<el-dropdown-item>注销账户</el-dropdown-item>
						<el-dropdown-item>用户切换</el-dropdown-item>
						<el-dropdown-item>帮助</el-dropdown-item>
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<!--中部导航栏-->
		<el-col :span="24" class="subheader">
			<!--图标-->
			<!--<el-col :span="8" class="el-menu-demo"></el-col>-->
			<!--导航-->
			<el-col :span="8" class="nav-midle">
				<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
					<el-menu-item index="1">Overview</el-menu-item>
					<el-menu-item index="1">Campaign</el-menu-item>
					<el-menu-item index="3">Analytics</el-menu-item>
				</el-menu>
			</el-col>
			<!--按钮-->
			<!--<el-col :span="8" class="el-menu-demo"></el-col>-->
		</el-col>
		<!--侧边导航栏-->
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'">
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
						 unique-opened router v-show="!collapsed">
					<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
						<!--<el-submenu :index="index+''" v-if="!item.leaf">-->
							<!--<template slot="title"><i :class="item.iconCls"></i></template>-->
							<!--&lt;!&ndash;<el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>&ndash;&gt;-->
						<!--</el-submenu>-->
						<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>
					</template>
				</el-menu>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
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
				sysName:'VUEADMIN',
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
				}
			}
		},
		methods: {
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
						width: 40px;
						height: 40px;
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
			top: 112px;
			bottom: 0px;
			overflow: hidden;
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
				flex:0 0 90px;
				width: 90px;
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
				padding: 20px;
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
</style>
