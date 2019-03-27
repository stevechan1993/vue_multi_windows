<template>
    <div>
        <Row>
            <Col span="24" style="height: 64px; top: 5px">
                <Row style="top: 20px">
                    <Col span="12">
                        <div class="font_div"
                             style="float: left; position: relative; margin-left: 20px; margin-top: -4px; color: #2d8cf0; font-size: 16px">工程预览
                        </div>
                    </Col>
                    <Col span="12">
                        <div class="font_div" style="float: right; position: relative; margin-right: 20px; margin-top: -4px; font-size: 16px">共有3个程序</div>
                    </Col>
                </Row>
            </Col>
            <Divider/>
        </Row>
        <Row>
            <Col span="24" style="height: 86px; top: -12px">
                <div style="position: relative;top: 25px;right: 29px;">
                    <Button :size="buttonSize" type="primary" @click.native.prevent="handleOpenJob" style="float: right; margin-left: 20px; height: 35px; width: 90px">打开</Button>
                    <Button :size="buttonSize" type="primary" style="float: right; width: 90px; height: 35px">新建</Button>
                </div>
            </Col>
            <Divider style="margin: 0px;"/>
        </Row>
        <Row>
            <Col span="24">
                <Table ref="selection" height="600" :columns="columns1" :data="data2"></Table>
            </Col>
        </Row>
    </div>
</template>

<script>
  export default {
    name: 'projects',
    data() {
      return {
        buttonSize: 'large',
        columns1: [
          {
            type: 'selection',
            title: '序号',
            key: 'nu',
          },
          {
            title: '程序名称',
            key: 'name',
          },
          {
            title: '修改时间',
            key: 'date',
          },
          {
            title: '轴组',
            key: 'axis',
          },
          {
            title: '程序备注',
            key: 'info',
          },
        ],
        data2: [
          {
            nu: '1',
            name: 'FDRSAW',
            axis: 'R1',
            date: '2019/03/25',
            info: 'text',
          },
          {
            nu: '2',
            name: 'TYT',
            axis: 'R1',
            date: '2019/03/25',
            info: 'text',
          },
          {
            nu: '3',
            name: 'ddfdddd',
            axis: 'R1',
            date: '2019/03/25',
            info: 'text',
          },
          {
            nu: '4',
            name: 'RZFFFFF',
            axis: 'R1',
            date: '2019/03/25',
            info: 'text',
          },
          {
            nu: '5',
            name: 'WERTY',
            axis: 'R1',
            date: '2019/03/25',
            info: 'text',
          },
          {
            nu: '6',
            name: 'HUYTI',
            axis: 'R1',
            date: '2019/03/25',
            info: 'text',
          },
          {
            nu: '7',
            name: 'ERR',
            axis: 'R1',
            date: '2019/03/25',
            info: 'text',
          },
          {
            nu: '8',
            name: 'DRTYU',
            axis: 'R1',
            date: '2019/03/25',
            info: 'text',
          }
        ]
      };
    },
    methods: {
      handleOpenJob: function() {
        this.$router.push({path: '/app/programes'});
      }
    }
  };
</script>

<style scoped>

</style>
