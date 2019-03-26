<template>
    <div>
        <Row>
            <Col span="24" style="height: 64px; top: 5px">
                <Row style="top: 20px">
                    <Col span="12">
                        <div style="float: left; position: relative; margin-left: 20px; margin-top: -4px; color: #2d8cf0;font-size: 16px">程序指令</div>
                    </Col>
                    <Col span="12">
                        <div style="float: right; position: relative; margin-right: 20px; margin-top: -4px; font-size: 16px">共有11个程序指令</div>
                    </Col>
                </Row>
            </Col>
            <Divider/>
        </Row>
        <Row>
            <Col span="6" style="height: 50px">
                <div style="float: left; position: relative; margin-left: 20px; margin-top: 14px; color: #2d8cf0; font-size: 16px">文件名称：</div>
                <div style="float: left; position: relative; margin-top: 14px; font-size: 16px; float: left">WERTY</div>
            </Col>
            <Col span="6" style="height: 50px">
                <div style="float: left; position: relative; margin-left: 20px; margin-top: 14px; color: #2d8cf0; font-size: 16px">机器人轴组：</div>
                <div style="float: left; position: relative; margin-top: 14px; font-size: 16px; float: left">R1</div>
            </Col>
            <Col span="6" style="height: 50px">
                <div style="float: left; position: relative; margin-left: 20px; margin-top: 14px; color: #2d8cf0; font-size: 16px">工具手：</div>
                <div style="float: left; position: relative; margin-top: 14px; font-size: 16px; float: left">T0</div>
            </Col>
            <Col span="6" style="height: 50px">
                <div style="float: left; position: relative; margin-left: 20px; margin-top: 14px; color: #2d8cf0; font-size: 16px">运行次数：</div>
                <div style="float: left; position: relative; margin-top: 14px; font-size: 16px; float: left">1/1</div>
            </Col>
        </Row>
        <Row>
            <Divider style="margin-bottom: 50px; "/>
            <Col span="14">
                <Table :row-class-name="rowClassName" :columns="columns1" :data="data1"></Table>
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
        columns1: [
          {
            title: '步骤',
            key: 'step'
          },
          {
            title: '内容',
            key: 'content'
          },
        ],
        columns2: [
          {
            title: '轴',
            key: 'axis'
          },
          {
            title: '转速',
            key: 'rotate'
          },
          {
            title: '最大转速',
            key: 'maxRotate'
          }
        ],
        columns3: [

        ],
        columns4: [

        ],
        data1: [
          {
            step: '000',
            content: 'BXDAGASKLDJGQIOEFASDF',
          },
          {
            step: '001',
            content: 'BXDAGASKLDJGQIOEFASDF',
          },
          {
            step: '002',
            content: 'BXDAGASKLDJGQIOEFASDF',
          },
          {
            step: '003',
            content: 'BXDAGASKLDJGQIOEFASDF',
          },
          {
            step: '004',
            content: 'BXDAGASKLDJGQIOEFASDF',
          },
          {
            step: '005',
            content: 'BXDAGASKLDJGQIOEFASDF',
          },
          {
            step: '006',
            content: 'BXDAGASKLDJGQIOEFASDF',
          },
          {
            step: '007',
            content: 'BXDAGASKLDJGQIOEFASDF',
          },
        ],
        data2: [
          {
            axis: 'S',
            rotate: '0转/min',
            maxRotate: '0转/min'
          },
          {
            axis: 'L',
            rotate: '0转/min',
            maxRotate: '0转/min'
          },
          {
            axis: 'U',
            rotate: '0转/min',
            maxRotate: '0转/min'
          },
          {
            axis: 'R',
            rotate: '0转/min',
            maxRotate: '0转/min'
          },
          {
            axis: 'B',
            rotate: '0转/min',
            maxRotate: '0转/min'
          },
          {
            axis: 'T',
            rotate: '0转/min',
            maxRotate: '0转/min'
          },
          {
            axis: '01',
            rotate: '0转/min',
            maxRotate: '0转/min'
          },
          {
            axis: '02',
            rotate: '0转/min',
            maxRotate: '0转/min'
          },
          {
            axis: '03',
            rotate: '0转/min',
            maxRotate: '0转/min'
          }
        ],
        data3: [

        ],
        data4: [

        ],
        formLeft: {
          input1: '',
          input2: '',
          input3: '',
          input4: '',
        },
      };
    },
    methods: {
      rowClassName (index) {
        if (index === 1) {
          return 'demo-table-info-row';
        } else if (index === 3) {
          return 'demo-table-error-row';
        }
        return '';
      }
    }
  };
</script>

<style scoped>
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

    .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-column{
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
</style>
