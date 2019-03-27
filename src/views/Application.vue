<template>
    <div id="drag" class="drag">
        <div class="layout">
            <div class="resizeL"></div>
            <div class="resizeT"></div>
            <div class="resizeR"></div>
            <div class="resizeB"></div>
            <div class="resizeLT"></div>
            <div class="resizeTR"></div>
            <div class="resizeBR"></div>
            <div class="resizeLB"></div>
            <Layout>
                <Header :style="{background: '#fff', height: '80px'}">
                    <Row>
                        <div class="title"></div>
                    </Row>
                    <Row>
                        <!--Logo-->
                        <Col span="4">
                            <div class="layout-logo" style="background: #fff">
                                <div style="float: left">
                                    <img src="../assets/logo_topnav.png" style="margin-bottom: 7px"/>
                                </div>
                                <div style="float: left; position: relative; left: 3px; top: -16px">
                                    <a href="#">INEXBOT</a>
                                </div>
                            </div>
                        </Col>
                        <!--模式和状态-->
                        <Col span="4">
                            <Col span="12" style="top: -10px;">
                                <Select v-model="mode" style="width:100px; top: -10px; ">
                                    <Option v-for="item in modeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                </Select>
                                <div class="btn-tip">
                                    <p>模式</p>
                                </div>
                            </Col>
                            <Col span="12" style="top: -10px">
                                <Select v-model="state" style="width:100px;">
                                    <Option v-for="item in stateList" :value="item.value" :key="item.value">{{item.label }}</Option>
                                </Select>
                                <div class="btn-tip">
                                    <p>伺服状态</p>
                                </div>
                            </Col>
                        </Col>
                        <!--操作-->
                        <Col span="12" style="top: -10px">
                            <Col span="4">
                                <Select v-model="code" style="width:85px">
                                    <Option v-for="item in codeList" :value="item.value" :key="item.value">{{ item.label
                                        }}
                                    </Option>
                                </Select>
                                <div class="btn-tip">
                                    <p>程序</p>
                                </div>
                            </Col>
                            <Col span="4">
                                <InputNumber
                                        :max="100"
                                        v-model="speed"
                                        :formatter="value => `${value}%`"
                                        :parser="value => value.replace('%', '')"
                                        :step="5">
                                </InputNumber>
                                <div class="btn-tip" style="margin-left: -12px">
                                    <p>速度</p>
                                </div>
                            </Col>
                            <Col span="4">
                                <Select v-model="robot" style="width:85px">
                                    <Option v-for="item in robotList" :value="item.value" :key="item.value">{{
                                        item.label }}
                                    </Option>
                                </Select>
                                <div class="btn-tip">
                                    <p>机器人</p>
                                </div>
                            </Col>
                            <Col span="4">
                                <Select v-model="tool" style="width:85px">
                                    <Option v-for="item in toolList" :value="item.value" :key="item.value">{{ item.label
                                        }}
                                    </Option>
                                </Select>
                                <div class="btn-tip">
                                    <p>工具</p>
                                </div>
                            </Col>
                            <Col span="4">
                                <Select v-model="tech" style="width:85px">
                                    <Option v-for="item in techList" :value="item.value" :key="item.value">{{ item.label
                                        }}
                                    </Option>
                                </Select>
                                <div class="btn-tip">
                                    <p>工艺</p>
                                </div>
                            </Col>
                            <Col span="4">
                                <Select v-model="cord" style="width:85px">
                                    <Option v-for="item in cordList" :value="item.value" :key="item.value">{{ item.label
                                        }}
                                    </Option>
                                </Select>
                                <div class="btn-tip">
                                    <p>坐标系</p>
                                </div>
                            </Col>
                        </Col>
                        <!--窗口操作-->
                        <Col span="4">
                            <div class="win-opt">
                                <div>
                                    <a class="min" href="javascript:" title="最小化"></a>
                                    <a class="max" href="javascript:" title="最大化"></a>
                                    <a class="revert" href="javascript:" title="还原"></a>
                                    <a class="close" href="javascript:" title="关闭"></a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Header>
                <Divider/>
                <Layout>
                    <Sider hide-trigger
                           :style="{background: '#fff', padding: '0 0 0 0', 'border-right': '1px solid #e8eaec'}">
                        <Menu @on-select="handleSelect" width="auto" :class="menuitemClasses">
                            <MenuItem name="/app/techs">
                                <Icon type="ios-navigate"></Icon>
                                <span>工艺</span>
                            </MenuItem>
                            <MenuItem name="/app/variable">
                                <Icon type="ios-navigate"></Icon>
                                <span>变量</span>
                            </MenuItem>
                            <MenuItem name="/app/projects">
                                <Icon type="ios-navigate"></Icon>
                                <span>工程</span>
                            </MenuItem>
                            <MenuItem name="/app/programes">
                                <Icon type="ios-navigate"></Icon>
                                <span>程序</span>
                            </MenuItem>
                            <MenuItem name="/app/logs">
                                <Icon type="ios-navigate"></Icon>
                                <span>日志</span>
                            </MenuItem>
                            <MenuItem name="/app/realtime">
                                <Icon type="ios-navigate"></Icon>
                                <span>实时</span>
                            </MenuItem>
                        </Menu>
                    </Sider>
                    <Layout :style="{'padding-left': '24px', 'padding-right': '24px'}">
                        <Content id="test"
                                 :style="{padding: '0px', background: '#fff', 'border-left': '1px solid #e8eaec', 'border-right': '1px solid #e8eaec'}">
                            <router-view></router-view>
                        </Content>
                    </Layout>
                    <Sider hide-trigger
                           :style="{background: '#fff', 'min-width': '277px', 'border-left': '1px solid #e8eaec' }">
                        <Row>
                            <Col span="24" style="height: 60px">
                                <div class="font_div">启停控制</div>
                            </Col>
                        </Row>
                        <Divider/>
                        <Row>
                            <Col span="24"
                                 style="height: 150px; display: flex;justify-content:center;align-items:Center;">
                                <div style="display: flex;justify-content:center;align-items:Center;">
                                    <Button :size="buttonSize" type="primary" @click.native.prevent="startAxis"
                                            style="margin-right: 45px; height: 75px; width: 75px; border-radius: 50%; background: #fff; color: #00bfff; border: 1px solid #2d8cf0">
                                        START
                                    </Button>
                                    <Button :size="buttonSize" type="primary" @click="stopAxis"
                                            style="height: 75px; width: 75px; border-radius: 50%;background: #fff; color: #ff4500; border: 1px solid #ff4500">
                                        STOP
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                        <Divider/>
                        <Row>
                            <Col span="24" style="height: 60px;">
                                <div class="font_div">点动控制</div>
                            </Col>
                        </Row>
                        <Divider/>
                        <Row>
                            <Col span="24">
                                <br>
                                <Row class="btn-mid">
                                    <span>S</span>
                                    <Button icon="ios-remove" @click="sMinus" class="btn-small"></Button>
                                    <Button icon="ios-add" @click="sPlus" class="btn-small"></Button>
                                </Row>
                                <br>
                                <Row class="btn-mid">
                                    <span>L</span>
                                    <Button icon="ios-remove" @click="lMinus" class="btn-small"></Button>
                                    <Button icon="ios-add" @click="lPlus" class="btn-small"></Button>
                                </Row>
                                <br>
                                <Row class="btn-mid">
                                    <span>U</span>
                                    <Button icon="ios-remove" @click="uMinus" class="btn-small"></Button>
                                    <Button icon="ios-add" @click="uPlus" class="btn-small"></Button>
                                </Row>
                                <br>
                                <Row class="btn-mid">
                                    <span>R</span>
                                    <Button icon="ios-remove" @click="rMinus" class="btn-small"></Button>
                                    <Button icon="ios-add" @click="rPlus" class="btn-small"></Button>
                                </Row>
                                <br>
                                <Row class="btn-mid">
                                    <span>B</span>
                                    <Button icon="ios-remove" @click="bMinus" class="btn-small"></Button>
                                    <Button icon="ios-add" @click="bPlus" class="btn-small"></Button>
                                </Row>
                                <br>
                                <Row class="btn-mid">
                                    <span>T</span>
                                    <Button icon="ios-remove" @click="tMinus" class="btn-small"></Button>
                                    <Button icon="ios-add" @click="tPlus" class="btn-small"></Button>
                                </Row>
                            </Col>
                        </Row>
                    </Sider>
                </Layout>
            </Layout>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapsed: false,
        buttonSize: 'large',
        sAxis: 0,
        lAxis: 0,
        uAxis: 0,
        rAxis: 0,
        bAxis: 0,
        tAxis: 0,
        stateList: [
          {
            value: '0',
            label: '伺服停止',
          },
          {
            value: '1',
            label: '伺服就绪',
          },
        ],
        modeList: [
          {
            value: '0',
            label: '示教模式',
          },
          {
            value: '2',
            label: '运行模式',
          },
        ],
        codeList: [
          {
            value: '0',
            label: '停止',
          },
          {
            value: '1',
            label: '运行',
          },
        ],
        robotList: [
          {
            value: '1',
            label: 'Robot1',
          },
          {
            value: '2',
            label: 'Robot2',
          },
        ],
        toolList: [
          {
            value: '0',
            label: '无工具',
          },
          {
            value: '1',
            label: '工具1',
          },
        ],
        techList: [
          {
            value: '1',
            label: '工艺1',
          },
          {
            value: '2',
            label: '工艺2',
          },
        ],
        cordList: [
          {
            value: '1',
            label: '坐标系1',
          },
          {
            value: '2',
            label: '坐标系2',
          },
        ],
        mode: '0',
        state: '0',
        code: '0',
        speed: 50,
        robot: '1',
        tool: '1',
        tech: '1',
        cord: '1',
      };
    },
    watch: {
      mode(val, oldVal) {
        console.log(val);
        if (val === '0') {
          let bodys = {};
          this.$axios.inexbot
            .inexbotMode0(bodys)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        } else if (val === '2') {
          let bodys = {};
          this.$axios.inexbot
            .inexbotMode2(bodys)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        }
      },
      code(val, oldVal) {
        console.log(val);
      },
      state(val, oldVal) {
        console.log(val);
        if (val === '0') {
          let bodys = {};
          this.$axios.inexbot
            .inexbotStatus0(bodys)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        } else if (val === '1'){
          let bodys = {};
          this.$axios.inexbot
            .inexbotStatus1(bodys)
            .then(response => {
              console.log(response);
            })
            .catch(error => {
              console.log(error);
            });
        }
      },
      speed(val, oldVal) {
        console.log(val);
      },
      robot(val, oldVal) {
        console.log(val);
      },
      tool(val, oldVal) {
        console.log(val);
      },
      tech(val, oldVal) {
        console.log(val);
      },
      cord(val, oldVal) {
        console.log(val);
      },
    },
    methods: {
      handleSelect: function(name) {
        this.$router.push(name);
      },
      //S轴
      sPlus: function() {
        console.log(++this.sAxis);
      },
      sMinus: function() {
        console.log(--this.sAxis);
      },
      //L轴
      lPlus: function() {
        console.log(++this.lAxis);
      },
      lMinus: function() {
        console.log(--this.lAxis);
      },
      //U轴
      uPlus: function() {
        console.log(++this.uAxis);
      },
      uMinus: function() {
        console.log(--this.uAxis);
      },
      //R轴
      rPlus: function() {
        console.log(++this.rAxis);
      },
      rMinus: function() {
        console.log(--this.rAxis);
      },
      //B轴
      bPlus: function() {
        console.log(++this.bAxis);
      },
      bMinus: function() {
        console.log(--this.bAxis);
      },
      //T轴
      tPlus: function() {
        console.log(++this.tAxis);
      },
      tMinus: function() {
        console.log(--this.tAxis);
      },
      //启停控制
      startAxis: function() {
        console.log('START');
        this.code = "1";
        let bodys = {};
        this.$axios.inexbot
          .inexbotStart(bodys)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          })
      },
      stopAxis: function() {
        console.log('STOP');
        this.code = '0';
      },
      //窗口拖动与缩放
      byTagName: function(elem, obj) {
        return obj.getElementsByTagName(elem) || document.getElementsByTagName(elem);
      },
      byClass: function(sClass, oParent) {
        var aClass = [];
        var reClass = new RegExp('(^| )' + sClass + '( |$)');
        var aElem = this.byTagName('*', oParent);
        for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
        return aClass;
      },
      drag: function(oDrag, handle) {
        var disX = 0;
        var disY = 0;
        var oMin = this.byClass('min', oDrag)[0];
        var oMax = this.byClass('max', oDrag)[0];
        var oRevert = this.byClass('revert', oDrag)[0];
        var oClose = this.byClass('close', oDrag)[0];
        handle = handle || oDrag;
        handle.style.cursor = 'move';
        handle.onmousedown = function(event) {
          var event = event || window.event;
          disX = event.clientX - oDrag.offsetLeft;
          disY = event.clientY - oDrag.offsetTop;
          document.onmousemove = function(event) {
            var event = event || window.event;
            var iL = event.clientX - disX;
            var iT = event.clientY - disY;
            var maxL = document.documentElement.clientWidth - oDrag.offsetWidth;
            var maxT = document.documentElement.clientHeight - oDrag.offsetHeight;
            iL <= 0 && (iL = 0);
            iT <= 0 && (iT = 0);
            iL >= maxL && (iL = maxL);
            iT >= maxT && (iT = maxT);
            oDrag.style.left = iL + 'px';
            oDrag.style.top = iT + 'px';
            return false;
          };
          document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
            this.releaseCapture && this.releaseCapture();
          };
          this.setCapture && this.setCapture();
          return false;
        };
        //最大化按钮
        oMax.onclick = function() {
          oDrag.style.top = 0;
          oDrag.style.left = 0;

          oDrag.style.width = document.documentElement.clientWidth - 2 + 'px';
          oDrag.style.height = document.documentElement.clientHeight - 2 + 'px';

          document.getElementById('test').style.height = document.documentElement.clientHeight - 2 + 'px';

          this.style.display = 'none';
          oRevert.style.display = 'block';
        };
        //还原按钮
        oRevert.onclick = function() {
          oDrag.style.width = 1200 + 'px';
          oDrag.style.height = 720 + 'px';

          document.getElementById('test').style.height = 720 + 'px';

          oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + 'px';
          oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + 'px';
          this.style.display = 'none';
          oMax.style.display = 'block';
        };
        //最小化按钮
        oMin.onclick = oClose.onclick = function() {
          oDrag.style.display = 'none';
          var oA = document.createElement('a');
          oA.className = 'open';
          oA.href = 'javascript:;';
          oA.title = '还原';

          document.body.appendChild(oA);

          //oA.style.background = "red";
          oA.style.position = 'absolute';
          oA.style.top = '10px';
          oA.style.left = '125px';
          oA.style.width = '34px';
          oA.style.height = '34px';

          //绑定点击事件
          oA.onclick = function() {
            oDrag.style.display = 'block';
            document.body.removeChild(this);
            this.onclick = null;
          };
        };
        //阻止冒泡
        oMin.onmousedown = oMax.onmousedown = oClose.onmousedown = function(event) {
          this.onfocus = function() {
            this.blur();
          };
          (event || window.event).cancelBubble = true;
        };
      },
      resize: function(oParent, handle, isLeft, isTop, lockX, lockY) {
        handle.onmousedown = function(event) {
          var event = event || window.event;
          var oCnt = document.getElementById('test');
          var disX = event.clientX - handle.offsetLeft;
          var disY = event.clientY - handle.offsetTop;
          var iParentTop = oParent.offsetTop;
          var iParentLeft = oParent.offsetLeft;
          var iParentWidth = oParent.offsetWidth;
          var iParentHeight = oParent.offsetHeight;
          document.onmousemove = function(event) {
            var event = event || window.event;
            var iL = event.clientX - disX;
            var iT = event.clientY - disY;

            var maxW = document.documentElement.clientWidth - oParent.offsetLeft - 2;
            var maxH = document.documentElement.clientHeight - oParent.offsetTop - 2;

            var iW = isLeft ? iParentWidth - iL : handle.offsetWidth + iL;
            var iH = isTop ? iParentHeight - iT : handle.offsetHeight + iT;

            isLeft && (oParent.style.left = iParentLeft + iL + 'px');
            isTop && (oParent.style.top = iParentTop + iT + 'px');

            iW < 1200 && (iW = 1200);

            iW > maxW && (iW = maxW);

            lockX || (oParent.style.width = iW + 'px');

            iH < 720 && (iH = 720);

            iH > maxH && (iH = maxH);

            lockY || (oCnt.style.height = oParent.style.height = iH + 'px');

            if ((isLeft && iW == 1200) || (isTop && iH == 1200)) document.onmousemove = null;
            return false;
          };
          document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
          };
          return false;
        };
      },
    },
    computed: {
      menuitemClasses: function() {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : '',
        ];
      },
    },
    mounted() {
      let oDrag = document.getElementById('drag');
      let oCnt = document.getElementById('test');
      let oTitle = this.byClass('title', oDrag)[0];
      let oRevert = this.byClass('revert', oDrag)[0];
      let oMax = this.byClass('max', oDrag)[0];
      let oL = this.byClass('resizeL', oDrag)[0];
      let oT = this.byClass('resizeT', oDrag)[0];
      let oR = this.byClass('resizeR', oDrag)[0];
      let oB = this.byClass('resizeB', oDrag)[0];
      let oLT = this.byClass('resizeLT', oDrag)[0];
      let oTR = this.byClass('resizeTR', oDrag)[0];
      let oBR = this.byClass('resizeBR', oDrag)[0];
      let oLB = this.byClass('resizeLB', oDrag)[0];

      this.drag(oDrag, oTitle);

      //四角
      this.resize(oDrag, oLT, true, true, false, false);
      this.resize(oDrag, oTR, false, true, false, false);
      this.resize(oDrag, oBR, false, false, false, false);
      this.resize(oDrag, oLB, true, false, false, false);

      //四边
      this.resize(oDrag, oL, true, false, false, true);
      this.resize(oDrag, oT, false, true, true, false);
      this.resize(oDrag, oR, false, false, false, true);
      this.resize(oDrag, oB, false, false, true, false);

      oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + 'px';
      oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + 'px';

      //默认打开最大化
      oDrag.style.top = 0;
      oDrag.style.left = 0;

      oDrag.style.width = document.documentElement.clientWidth - 2 + 'px';
      oDrag.style.height = document.documentElement.clientHeight - 2 + 'px';
      oCnt.style.height = document.documentElement.clientHeight - 2 + 'px';

      oMax.style.display = 'none';
      oRevert.style.display = 'block';

      //绑定还原按钮点击事件
      oRevert.onclick = function() {
        oDrag.style.width = 1200 + 'px';
        oDrag.style.height = 720 + 'px';
        oCnt.style.height = 720 + 'px';

        oDrag.style.left = (document.documentElement.clientWidth - oDrag.offsetWidth) / 2 + 'px';
        oDrag.style.top = (document.documentElement.clientHeight - oDrag.offsetHeight) / 2 + 'px';
        oRevert.style.display = 'none';
        oMax.style.display = 'block';
      };

      /* Set Modo to 0 */
      let modeBodys = {};
      this.$axios.inexbot
        .inexbotMode0(modeBodys)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });

      /* Set Status to 0 */
      let StatusBodys = {};
      this.$axios.inexbot
        .inexbotStatus0(StatusBodys)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });

      /* Set Code to Pause */
      this.code = "0";

      /* Sent Heatbeat */
      // let heartBeatBodys = {};
      // this.$axios.inexbot
      //   .inexbotHeartBeat(heartBeatBodys)
      //   .then(response => {
      //
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   })
    },
  };
</script>

<style scoped>
    .drag {
        position: absolute;
        top: 100px;
        left: 100px;
        width: 500px;
        height: 300px;
        background: #e9e9e9;
    }

    .drag .title {
        position: relative;
        height: 5px;
        margin: 2px;
    }

    .drag .win-opt {
        display: block;
        position: relative;
        left: -15px;
        top: 12px;
        float: right;
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
        top: 16px;
        right: 24px;
    }

    .drag .win-opt a,
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

    .drag .win-opt a.min {
        background-position: -29px 0;
    }

    .drag .win-opt a.min:hover {
        background-position: -29px -29px;
    }

    .drag .win-opt a.max {
        background-position: -60px 0;
    }

    .drag .win-opt a.max:hover {
        background-position: -60px -29px;
    }

    .drag .win-opt a.revert {
        background-position: -149px 0;
        display: none;
    }

    .drag .win-opt a.revert:hover {
        background-position: -149px -29px;
    }

    .drag .win-opt a.close {
        background-position: -89px 0;
    }

    .drag .win-opt a.close:hover {
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
        z-index: 999;
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
        z-index: 999;
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

    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        /*border-radius: 4px;*/
        overflow: hidden;
    }

    .layout-logo {
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 16px;
        left: 34px;
    }

    .layout-nav {
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }

    .ivu-layout-header {
        padding: 0px;
    }

    .layout-con {
        height: 100%;
        width: 100%;
    }

    .menu-item span {
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }

    .menu-item i {
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }

    .collapsed-menu span {
        width: 0px;
        transition: width .2s ease;
    }

    .collapsed-menu i {
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }

    .ivu-divider-horizontal {
        margin: 0;
    }

    .ivu-select {
        margin-left: 15px;
    }

    .font_div {
        text-align: center;
        line-height: 60px;
        color: #2d8cf0;
        font-size: 14px;
    }

    .btn-mid {
        display: flex;
        justify-content: center;
        align-items: Center;
    }

    .btn-small {
        width: 67px;
        height: 23px;
        margin: 10px 10px 10px;
    }

    .btn-mid span {
        margin-right: 15px;
    }

    .btn-tip {
        position: relative;
        left: 40px;
        width: 50px;
        clear: both;
    }

    .btn-tip p {
        height: 0px;
        margin-top: -35px;
    }
</style>
