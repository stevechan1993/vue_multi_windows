<template>
	<el-row class="container">
		<!--顶部导航栏-->
		<el-col :span="24" class="header">
			<!--应用列表-->
			<el-col :span="6" style="height: 52px; width: 100px; background: #FF3825;">
				<el-dropdown trigger="click" >
				  	<span class="el-dropdown-link"><img src="../assets/icon_menu_default.png" style="margin: -4px 35px;"/></span>
					<el-dropdown-menu slot="dropdown" style="width: 300px;height: 600px; background: #3e3e3e; opacity: 0.8; margin-left: -10px; margin-top: 0px;border: 0px">
						<el-col :span="24" style="margin-top: 20px;">
							<el-input
									placeholder="请输入要搜索的应用"
									icon="search"
									v-model="input2"
									:on-icon-click="handleIconClick" style="width: 240px; margin-left: 27px; margin-top: 10px">
							</el-input>
						</el-col>
						<el-col :span="24" style="margin-top: 50px;">
							<span class="taskspan">
								<a href="#/App"><img src="../assets/logo_menu/logo_2.png" style="padding:15px;" /></a>
							</span>
							<span class="taskspan">
								<a href="#"><img src="../assets/logo_menu/logo_3.png" style="padding:15px;" /></a>
							</span>
							<span class="taskspan">
								<a href="#"><img src="../assets/logo_menu/logo_4.png" style="padding:15px;" /></a>
							</span>
							<span class="taskspan">
								<a><img src="../assets/logo_menu/logo_5.png" style="padding:15px;" /></a>
							</span>
							<span class="taskspan">
								<a><img src="../assets/logo_menu/logo_6.png" style="padding:15px;" /></a>
							</span>
							<span class="taskspan">
								<a><img src="../assets/logo_menu/logo_7.png" style="padding:15px;" /></a>
							</span>
							<span class="taskspan">
								<a><img src="../assets/logo_menu/logo_8.png" style="padding:15px;" /></a>
							</span>
							<span class="taskspan">
								<a><img src="../assets/logo_menu/logo_9.png" style="padding:15px;" /></a>
							</span>
							<span class="taskspan">
								<a><img src="../assets/logo_menu/logo_10.png" style="padding:15px;" /></a>
							</span>
							<span class="taskspan">
								<a><img src="../assets/logo_menu/logo_11.png" style="padding:15px;" /></a>
							</span>
						</el-col>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
			<!--任务栏-->
			<el-col :span="6" style="margin-left: 20px">
				<span class="taskspan">
					<Badge dot>
						<router-link to="/App" class="demo-badge">
							<img src="../assets/logo_nav/log0_12.png" />
						</router-link>
    				</Badge>
				</span>
				<span class="taskspan">
					<router-link to="/Page2" class="demo-badge">
						<img src="../assets/logo_nav/log0_13.png" />
					</router-link>
				</span>
				<span class="taskspan">
					<router-link to="/Page3" class="demo-badge">
						<img src="../assets/logo_nav/log0_14.png" />
					</router-link>
				</span>
				<span class="taskspan">
					<router-link to="/Page4" class="demo-badge">
						<img src="../assets/logo_nav/log0_nav_15.png" />
					</router-link>
				</span>
			</el-col>
			<!--用户信息-->
			<el-col :span="6" class="userinfo" style="height: 52px; width: 100px; margin-right: 0px; float: right">
				<Divider type="vertical" style="height: 20px; top: -20px; background: #fff; opacity: 0.5;"/>
				<el-dropdown trigger="click">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" style="border-radius: 50px;"/></span>
					<el-dropdown-menu slot="dropdown" style="width: 300px; height: 600px; background: #3e3e3e; opacity: 0.8; margin-top: 0px; border: 0px">
						<el-col :span="24" style="">
							<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" style="width:100px;height:100px;border-radius:100px; position: relative; top: 30px; left: 100px"/></span>
						</el-col>
						<el-col :span="24" style="min-height: 200px;position: relative; top: 130px; color: #737373;">
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
					<el-row :gutter="20" style="margin: -102px -20px -30px;">
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
					<el-row :gutter="20" style="margin: -102px -20px -30px;">
						<el-col :span="6" style="padding-left: 0px; padding-right: 1px">
							<div class="grid-content bg-purple"></div>
						</el-col>
						<el-col :span="18" style="padding-left: 0px; padding-right: 0px">
							<div class="grid-content bg-purple"></div>
						</el-col>
					</el-row>
				</el-dialog>
				<el-button type="primary" icon="message" @click="value1 = true" class="mybutton"></el-button>
				<Drawer title="消息" :closable="false" :mask="true" :transfer="false" :inner="true" v-model="value1" :scrollable="true">
					<Row>
						<Col>
							<Card :bordered="false" style="background: #3e3e3e; width: 225px;">
								<p slot="title">
									<Icon type="ios-film-outline"></Icon>
									系统事件
								</p>
								<a href="#" slot="extra" @click.prevent="deleteItem">
									<Icon type="ios-loop-strong"></Icon>
									Delete
								</a>
								<p>Content of card</p>
							</Card>
						</Col>
					</Row>
				</Drawer>
			</el-col>
		</el-col>
		<!--侧边导航栏-->
		<el-col :span="24" class="main">
			<!--应用内容-->
			<section class="content-container">
				<router-view></router-view>
			</section>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				isFullscreen: true,
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
				dialogFormVisible2: false,
				slideTableVisible: false,
				show2: false,
				value1: false,
				dragMinWidth: 250,
				dragMinHeight: 124
			}
		},
		methods: {
			deleteItem() {
				console.log("delete");
			},
			onSubmit() {
				console.log('submit!');
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
		},
		mounted() {
			let that = this;
			let user = sessionStorage.getItem('user');

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
	.demo-badge {
		width: 22px;
		height: 22px;
		position: relative;
		top: -5px;
		display: inline-block;
	}

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
			top: 52px;
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
		top: 10px;
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
	.transition-box {
		margin-bottom: 10px;
		width: 300px;
		height: 600px;
		background-color: #3e3e3e;
		text-align: center;
		color: #fff;
		box-sizing: border-box;
		margin-right: 20px;
		opacity: 0.8;
	}
	.myDrawer {
		margin-top: 52px;
	}

	.drag {
		position: absolute;
		top: 100px;
		left: 100px;
		width: 500px;
		height: 300px;
		background: #e9e9e9;
		/*border: 1px solid #444;*/
		/*border-radius: 5px;*/
		/*box-shadow: 0 1px 3px 2px #666;*/
	}

	.drag .title {
		position: relative;
		height: 27px;
		margin: 5px;
	}

	.drag .title h2 {
		font-size: 14px;
		height: 27px;
		line-height: 24px;
		border-bottom: 1px solid #A1B4B0;
	}

	.drag .title div {
		position: absolute;
		height: 19px;
		top: 2px;
		right: 0;
	}

	.drag .title a,
	a.open {
		float: left;
		width: 21px;
		height: 19px;
		display: block;
		margin-left: 5px;
		background: url(../assets/tool.png) no-repeat;
	}
	a.open {
		position: absolute;
		top: 10px;
		left: 50%;
		margin-left: -10px;
		background-position: 0 0;
	}

	a.open:hover {
		background-position: 0 -29px;
	}

	.drag .title a.min {
		background-position: -29px 0;
	}

	.drag .title a.min:hover {
		background-position: -29px -29px;
	}

	.drag .title a.max {
		background-position: -60px 0;
	}

	.drag .title a.max:hover {
		background-position: -60px -29px;
	}

	.drag .title a.revert {
		background-position: -149px 0;
		display: none;
	}

	.drag .title a.revert:hover {
		background-position: -149px -29px;
	}

	.drag .title a.close {
		background-position: -89px 0;
	}

	.drag .title a.close:hover {
		background-position: -89px -29px;
	}

	.drag .content {
		overflow: auto;
		margin: 0 5px;
	}

	.drag .resizeBR {
		position: absolute;
		width: 14px;
		height: 14px;
		right: 0;
		bottom: 0;
		overflow: hidden;
		cursor: nw-resize;
		background: url(../assets/resize.png) no-repeat;
	}
	.drag .resizeL,
	.drag .resizeT,
	.drag .resizeR,
	.drag .resizeB,
	.drag .resizeLT,
	.drag .resizeTR,
	.drag .resizeLB {
		position: absolute;
		background: #000;
		overflow: hidden;
		opacity: 0;
		filter: alpha(opacity=0);
	}

	.drag .resizeL,
	.drag .resizeR {
		top: 0;
		width: 5px;
		height: 100%;
		cursor: w-resize;
	}

	.drag .resizeR {
		right: 0;
	}

	.drag .resizeT,
	.drag .resizeB {
		width: 100%;
		height: 5px;
		cursor: n-resize;
	}

	.drag .resizeT {
		top: 0;
	}

	.drag .resizeB {
		bottom: 0;
	}

	.drag .resizeLT,
	.drag .resizeTR,
	.drag .resizeLB {
		width: 8px;
		height: 8px;
		background: #FF0;
	}

	.drag .resizeLT {
		top: 0;
		left: 0;
		cursor: nw-resize;
	}

	.drag .resizeTR {
		top: 0;
		right: 0;
		cursor: ne-resize;
	}

	.drag .resizeLB {
		left: 0;
		bottom: 0;
		cursor: ne-resize;
	}
</style>
