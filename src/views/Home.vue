<template>
	<el-row class="container">
		<!--顶部导航栏-->
		<el-col :span="24" class="header">
			<!--应用列表-->
			<el-col :span="6" style="height: 52px; width: 100px; background: #FF3825;">
				<el-dropdown trigger="click" >
				  	<span class="el-dropdown-link"><img src="../assets/logo_nav/card.png" style="margin: -10px 31px"/></span>
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
				<span class="taskspan">
					<Badge dot>
        				<a href="#/Page1" class="demo-badge">
							<!--<img src="../assets/logo_nav/log0_12.png" />-->
						</a>
    				</Badge>
				</span>
				<span class="taskspan">
					<a href="#/Page2" class="demo-badge">
						<!--<img src="../assets/logo_nav/log0_13.png" />-->
					</a>
				</span>
				<span class="taskspan">
					<a href="#/Page3" class="demo-badge">
						<!--<img src="../assets/logo_nav/log0_14.png" />-->
					</a>
				</span>
				<span class="taskspan">
					<a href="#/Page4" class="demo-badge">
						<!--<img src="../assets/logo_nav/log0_nav_15.png" />-->
					</a>
				</span>
			</el-col>
			<!--用户信息-->
			<el-col :span="6" class="userinfo" style="height: 52px; width: 100px; margin-right: 0px; float: right">
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

		<!--全屏按钮-->
		<!--<el-col :span="24" class="el-menu-demo" style="width: 30%; position: absolute;z-index: 999;right: 40px; top: 53px">-->
			<!--<el-button style="width: 80px; float: right; margin-top: 13px; margin-right: -20px; background: #20a0ff; color: #ffffff" @click="buttoncli">全屏</el-button>-->
		<!--</el-col>-->

		<!--应用呈现区域-->
		<!--<el-col :span="24" class="application">-->
		<!--导航栏-->
		<!--<el-col :span="24" class="subheader">-->
			<!--&lt;!&ndash;应用图标&ndash;&gt;-->
			<!--<el-col :span="12" class="el-menu-demo">-->
				<!--<span><img src="../assets/logo_nav/log0_14.png" style="margin-top: 18px; margin-left: 20px;"/></span>-->
			<!--</el-col>-->
			<!--&lt;!&ndash;二级导航&ndash;&gt;-->
			<!--<el-col :span="12" class="nav-midle">-->
				<!--<el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect1">-->
					<!--<el-menu-item index="1">Overview</el-menu-item>-->
					<!--<el-menu-item index="1">Campaign</el-menu-item>-->
					<!--<el-menu-item index="3">Analytics</el-menu-item>-->
				<!--</el-menu>-->
			<!--</el-col>-->
		<!--</el-col>-->
		<!--侧边导航栏-->
		<el-col :span="24" class="main">
			<!--<aside :class="collapsed?'menu-collapsed':'menu-expanded'">-->
				<!--<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"-->
						 <!--unique-opened router v-show="!collapsed">-->
					<!--<template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">-->
						<!--<el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path" style="padding-left: 32px"><i :class="item.iconCls"></i>{{item.children[0].name}}</el-menu-item>-->
					<!--</template>-->
				<!--</el-menu>-->
			<!--</aside>-->
			<!--应用内容-->
			<section class="content-container">
				<div id="drag" class="drag" style="z-index: 1">
					<div class="title">
						<h2>可拖动窗口1</h2>
						<div>
							<a class="min" href="javascript:" title="最小化"></a>
							<a class="max" href="javascript:" title="最大化"></a>
							<a class="revert" href="javascript:" title="还原"></a>
							<a class="close" href="javascript:" title="关闭"></a>
						</div>
					</div>
					<div class="resizeL"></div>
					<div class="resizeT"></div>
					<div class="resizeR"></div>
					<div class="resizeB"></div>
					<div class="resizeLT"></div>
					<div class="resizeTR"></div>
					<div class="resizeBR"></div>
					<div class="resizeLB"></div>
					<div class="content">
						<div id="canvasContentDiv" class="grid-content bg-purple-light">
							<el-col :span="24" class="content-wrapper" style="background: #EEF1F6">
								<transition name="fade" mode="out-in">
									<router-view></router-view>
								</transition>
							</el-col>
						</div>
					</div>
				</div>
			</section>
		</el-col>
		<!--</el-col>-->
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
			byId: function (id) {
				return typeof id === "string" ? document.getElementById(id): id;
			},
			byTagName: function (elem, obj) {
				return (obj || document).getElementsByTagName(elem)
			},
			byClass: function(sClass, oParent) {
				var aClass = [];
				var reClass = new RegExp("(^| )" + sClass + "( |$)");
				var aElem = this.byTagName("*", oParent);
				for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
				return aClass;
			},
			drag: function(oDrag, handle) {
				var that = this;
				var disX = 0;
				var disY = 0;
				var oMin = this.byClass("min", oDrag)[0];
				var oMax = this.byClass("max", oDrag)[0];
				var oRevert = this.byClass("revert", oDrag)[0];
				var oClose = this.byClass("close", oDrag)[0];
				handle = handle || oDrag;
				handle.style.cursor = "move";
				handle.onmousedown = function (event) {
					var event = event || window.event;
					disX = event.clientX - oDrag.offsetLeft;
					disY = event.clientY - oDrag.offsetTop;
					document.onmousemove = function (event) {
						var event = event || window.event;
						var iL = event.clientX - disX;
						var iT = event.clientY - disY;
						var maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
						var maxT = document.documentElement.clientHeight - oDrag.offsetHeight;
						iL <= 0 && (iL = 0);
						iT <= 0 && (iT = 0);
						iL >= maxL && (iL = maxL);
						iT >= maxT && (iT = maxT);
						oDrag.style.left = iL + "px";
						oDrag.style.top = iT + "px";
						return false
					};
					document.onmouseup = function () {
						document.onmousemove = null;
						document.onmouseup = null;
						this.releaseCapture && this.releaseCapture()
					};
					this.setCapture && this.setCapture();
					return false
				};
				//最大化按钮
				oMax.onclick = function () {
					oDrag.style.top = 0;
					oDrag.style.left = 0;
					oDrag.style.width = document.documentElement.clientWidth - 2 + "px";
					oDrag.style.height = document.documentElement.clientHeight - 2 + "px";
					this.style.display = "none";
					oRevert.style.display = "block";
				};
				//还原按钮
				oRevert.onclick = function () {
					// oDrag.style.width = this.dragMinWidth + "px";
					// oDrag.style.height = this.dragMinHeight + "px";
					oDrag.style.width = 500 + "px";
					oDrag.style.height = 300 + "px";
					oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + "px";
					oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + "px";
					this.style.display = "none";
					oMax.style.display = "block";
				};
				//最小化按钮
				oMin.onclick = oClose.onclick = function () {
					oDrag.style.display = "none";
					var oA = document.createElement("a");
					oA.className = "open";
					oA.href = "javascript:;";
					oA.title = "还原";

					document.body.appendChild(oA);

					oA.style.background = "red";
					oA.style.position = "absolute";
					oA.style.top = "10px";
					oA.style.left = "125px";
					oA.style.width = "34px";
					oA.style.height = "34px";

					//绑定点击事件
					oA.onclick = function () {
						oDrag.style.display = "block";
						document.body.removeChild(this);
						this.onclick = null;
					};
				};
				//阻止冒泡
				oMin.onmousedown = oMax.onmousedown = oClose.onmousedown = function (event) {
					this.onfocus = function () { this.blur() };
					(event || window.event).cancelBubble = true
				};
			},
			 resize: function(oParent, handle, isLeft, isTop, lockX, lockY) {
				handle.onmousedown = function (event) {
					var event = event || window.event;
					var disX = event.clientX - handle.offsetLeft;
					var disY = event.clientY - handle.offsetTop;
					var iParentTop = oParent.offsetTop;
					var iParentLeft = oParent.offsetLeft;
					var iParentWidth = oParent.offsetWidth;
					var iParentHeight = oParent.offsetHeight;
					document.onmousemove = function (event) {
						var event = event || window.event;
						var iL = event.clientX - disX;
						var iT = event.clientY - disY;
						var maxW = document.documentElement.clientWidth - oParent.offsetLeft - 2;
						var maxH = document.documentElement.clientHeight - oParent.offsetTop - 2;
						var iW = isLeft ? iParentWidth - iL : handle.offsetWidth + iL;
						var iH = isTop ? iParentHeight - iT : handle.offsetHeight + iT;

						isLeft && (oParent.style.left = iParentLeft + iL + "px");
						isTop && (oParent.style.top = iParentTop + iT + "px");

						iW < 500 && (iW = 500);

						iW > maxW && (iW = maxW);

						lockX || (oParent.style.width = iW + "px");

						iH < 300 && (iH = 300);

						iH > maxH && (iH = maxH);

						lockY || (oParent.style.height = iH + "px");

						if ((isLeft && iW == 500) || (isTop && iH == 300)) document.onmousemove = null;
						return false;
					};
					document.onmouseup = function () {
						document.onmousemove = null;
						document.onmouseup = null;
					};
					return false;
				}
			},
			deleteItem() {
				console.log("delete");
			},
			onSubmit() {
				console.log('submit!');
			},
			// handleopen() {
			// 	console.log('handleopen');
			// },
			// handleclose() {
			// 	console.log('handleclose');
			// },
			// handleselect: function (a, b) {
			// },
			// handleSelect1(key, keyPath) {
			// 	console.log(key, keyPath);
			// },
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
			// showMenu(i,status){
			// 	this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			// }
		},
		mounted() {
			let that = this;
			let user = sessionStorage.getItem('user');

			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}

			window.onload = window.onresize = function () {
				var oDrag = document.getElementById("drag");
				var oTitle = that.byClass("title", oDrag)[0];
				var oL = that.byClass("resizeL", oDrag)[0];
				var oT = that.byClass("resizeT", oDrag)[0];
				var oR = that.byClass("resizeR", oDrag)[0];
				var oB = that.byClass("resizeB", oDrag)[0];
				var oLT = that.byClass("resizeLT", oDrag)[0];
				var oTR = that.byClass("resizeTR", oDrag)[0];
				var oBR = that.byClass("resizeBR", oDrag)[0];
				var oLB = that.byClass("resizeLB", oDrag)[0];

				that.drag(oDrag, oTitle);

				//四角
				that.resize(oDrag, oLT, true, true, false, false);
				that.resize(oDrag, oTR, false, true, false, false);
				that.resize(oDrag, oBR, false, false, false, false);
				that.resize(oDrag, oLB, true, false, false, false);

				//四边
				that.resize(oDrag, oL, true, false, false, true);
				that.resize(oDrag, oT, false, true, true, false);
				that.resize(oDrag, oR, false, false, false, true);
				that.resize(oDrag, oB, false, false, true, false);
				oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + "px";
				oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + "px";
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '~scss_vars';
	.demo-badge {
		width: 34px;
		height: 34px;
		background: #eee;
		border-radius: 6px;
		display: inline-block;
		margin-top: 5px;
		margin-left: 10px;
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
		border: 1px solid #444;
		border-radius: 5px;
		box-shadow: 0 1px 3px 2px #666;
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
