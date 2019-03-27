<template>
    <div>
        <Row>
            <Col span="24" style="height: 64px; top: 5px">
                <Row style="top: 20px">
                    <Col span="12">
                        <div style="float: left; position: relative; margin-left: 20px; margin-top: -4px; color: #2d8cf0;font-size: 16px">
                            程序指令
                        </div>
                    </Col>
                    <Col span="12">
                        <div style="float: right; position: relative; margin-right: 20px; margin-top: -4px; font-size: 16px">
                            共有7个程序指令
                        </div>
                    </Col>
                </Row>
            </Col>
            <Divider/>
        </Row>
        <Row>
            <Col span="6" style="height: 50px">
                <div style="float: left; position: relative; margin-left: 20px; margin-top: 14px; color: #2d8cf0; font-size: 16px">
                    文件名称：
                </div>
                <div style="float: left; position: relative; margin-top: 14px; font-size: 16px; float: left">WERTY</div>
            </Col>
            <Col span="6" style="height: 50px">
                <div style="float: left; position: relative; margin-left: 20px; margin-top: 14px; color: #2d8cf0; font-size: 16px">
                    机器人轴组：
                </div>
                <div style="float: left; position: relative; margin-top: 14px; font-size: 16px; float: left">R1</div>
            </Col>
            <Col span="6" style="height: 50px">
                <div style="float: left; position: relative; margin-left: 20px; margin-top: 14px; color: #2d8cf0; font-size: 16px">
                    工具手：
                </div>
                <div style="float: left; position: relative; margin-top: 14px; font-size: 16px; float: left">T0</div>
            </Col>
            <Col span="6" style="height: 50px">
                <div style="float: left; position: relative; margin-left: 20px; margin-top: 14px; color: #2d8cf0; font-size: 16px">
                    运行次数：
                </div>
                <div style="float: left; position: relative; margin-top: 14px; font-size: 16px; float: left">1/1</div>
            </Col>
        </Row>
        <Row>
            <Divider style="margin-bottom: 50px; "/>
            <Col span="14">
                <Table ref="currentRowTable" :row-class-name="rowClassName" :columns="columns1" :data="data1"></Table>
            </Col>
            <Col span="10" style="padding-left: 20px">
                <Tabs type="card">
                    <TabPane label="电机转速">
                        <Table border :columns="columns2" :data="data2"></Table>
                    </TabPane>
                    <TabPane label="电机扭矩">
                        <Table border :columns="columns3" :data="data3"></Table>
                    </TabPane>
                    <TabPane label="机器坐标">
                        <Table border :columns="columns4" :data="data4"></Table>
                    </TabPane>
                </Tabs>
            </Col>
        </Row>
    </div>
</template>

<script>
  export default {
    name: 'Programes',
    data() {
      return {
        count: 0,
        rowArray: [],
        columns1: [
          {
            title: '步骤',
            key: 'step',
          },
          {
            title: '内容',
            key: 'content',
          },
        ],
        columns2: [
          {
            title: '轴',
            key: 'axis',
          },
          {
            title: '转速',
            key: 'rotate',
          },
          {
            title: '最大转速',
            key: 'maxRotate',
          },
        ],
        columns3: [
          {
            title: '轴',
            key: 'axis'
          },
          {
            title: '扭矩',
            key: 'torque'
          },
          {
            title: '最大扭矩',
            key: 'maxtorque'
          }
        ],
        columns4: [
          {
            title: '位置参数',
            key: 'position'
          },
          {
            title: '当前值',
            key: 'value'
          }
        ],
        data1: [
          {
            step: '0',
            content: '开始',
          },
          {
            step: '1',
            content: '点到点P001速度10% 平滑0 加速度10 减速10',
          },
          {
            step: '2',
            content: '点到点P002速度10% 平滑0 加速度10 减速10',
          },
          {
            step: '3',
            content: '点到点P003速度10% 平滑0 加速度10 减速10',
          },
          {
            step: '4',
            content: '点到点P004速度10% 平滑0 加速度10 减速10',
          },
          {
            step: '5',
            content: '点到点P005速度10% 平滑0 加速度10 减速10',
          },
          {
            step: '6',
            content: '结束',
          },
        ],
        data2: [
          {
            axis: 'S',
            rotate: '-50转/min',
            maxRotate: '53转/min',
          },
          {
            axis: 'L',
            rotate: '-96转/min',
            maxRotate: '109转/min',
          },
          {
            axis: 'U',
            rotate: '1转/min',
            maxRotate: '1转/min',
          },
          {
            axis: 'R',
            rotate: '0转/min',
            maxRotate: '0转/min',
          },
          {
            axis: 'B',
            rotate: '25转/min',
            maxRotate: '40转/min',
          },
          {
            axis: 'T',
            rotate: '0转/min',
            maxRotate: '0转/min',
          },
          {
            axis: '01',
            rotate: '0转/min',
            maxRotate: '0转/min',
          },
          {
            axis: '02',
            rotate: '0转/min',
            maxRotate: '0转/min',
          },
          {
            axis: '03',
            rotate: '0转/min',
            maxRotate: '0转/min',
          },
        ],
        data3: [
          {
            axis: 'S',
            torque: '180毫牛*m',
            maxtorque: '196毫牛*m'
          },
          {
            axis: 'L',
            torque: '-86毫牛*m',
            maxtorque: '196毫牛*m'
          },
          {
            axis: 'U',
            torque: '-168毫牛*m',
            maxtorque: '200毫牛*m'
          },
          {
            axis: 'R',
            torque: '10毫牛*m',
            maxtorque: '11毫牛*m'
          },
          {
            axis: 'B',
            torque: '94毫牛*m',
            maxtorque: '131毫牛*m'
          },
          {
            axis: 'T',
            torque: '10毫牛*m',
            maxtorque: '12毫牛*m'
          },
          {
            axis: 'O1',
            torque: '0毫牛*m',
            maxtorque: '0毫牛*m'
          },
          {
            axis: 'O2',
            torque: '0毫牛*m',
            maxtorque: '0毫牛*m'
          },
          {
            axis: 'O3',
            torque: '0毫牛*m',
            maxtorque: '0毫牛*m'
          }
        ],
        data4: [
          {
            position: 'S',
            value: '44.9697'
          },
          {
            position: 'L',
            value: '-7.85151'
          },
          {
            position: 'U',
            value: '-6.46382'
          },
          {
            position: 'R',
            value: '-4.55419'
          },
          {
            position: 'B',
            value: '67.6898'
          },
          {
            position: 'T',
            value: '-3.37456'
          }
        ],
        formLeft: {
          input1: '',
          input2: '',
          input3: '',
          input4: '',
        },
      };
    },
    props: {

    },
    methods: {
      rowClassName(row, index) {
        if (this.rowArray.length < 8) {
          this.rowArray.push(row);
        }
      },
      toggleHighLight() {
        var count = 2;
        var that = this;
        for (var i = 0; i < this.rowArray.length; i++) {
          this.rowArray[i]._isHighlight = false;
        }
        this.rowArray[1]._isHighlight = true;
        var t = setInterval(toggle, 11600);
        function toggle() {
          if (count == 7) {
            clearInterval(t);
          } else {
            if (count > 0) {
              that.rowArray[count - 1]._isHighlight = false;
            }
            that.rowArray[count]._isHighlight = true;
            count ++;
          }
        }
      }
    }
  };
</script>

<style scoped>

    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
        height: 120px;
        margin-top: -16px;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
        border-color: transparent;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
        border-color: #fff;
    }

    .ivu-table .demo-table-info-row td {
        background-color: #2db7f5;
        color: #fff;
    }

    .ivu-table .demo-table-error-row td {
        background-color: #ff6600;
        color: #fff;
    }

    .ivu-table td.demo-table-info-column {
        background-color: #2db7f5;
        color: #fff;
    }

    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }

    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }

    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }

    /*偶数行*/
    .ivu-table-stripe-even td {
        background-color: #434343 !important;
    }

    /*奇数行*/
    .ivu-table-stripe-odd td {
        background-color: #282828 !important;
    }
</style>
