<template>
    <div>
        <Row>
            <Col span="24" style="height: 64px; top: 5px">
                <Row style="top: 20px">
                    <Col span="12">
                        <div class="font_div"
                             style="float: left; position: relative; margin-left: 20px; color: #2d8cf0">工程预览
                        </div>
                    </Col>
                    <Col span="12">
                        <div class="font_div" style="float: right; position: relative; margin-right: 20px">共有3个程序</div>
                    </Col>
                </Row>
            </Col>
            <Divider/>
        </Row>
        <Row>
            <Col span="24" style="height: 86px; top: -12px">
                <div style="position: relative;top: 25px;right: 29px;">
                    <Button :size="buttonSize" type="primary" style="float: right; margin-left: 20px; height: 30px; width: 80px">打开</Button>
                    <Button :size="buttonSize" type="primary" style="float: right; width: 80px; height: 30px">新建</Button>
                </div>
            </Col>
            <Divider style="margin: 0px;"/>
        </Row>
        <Row>
            <Col span="24">
                <Table height="600" :columns="columns1" :data="data2"></Table>
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
            nu: '001',
            name: 'BXDAGASKLDJGQIOEFASDF',
            axis: 'R1',
            date: '2019/03/25',
            info: 'TEXT',
          },
          {
            nu: '002',
            name: 'BXDAGASKLDJGQIOEFASDF',
            axis: 'R1',
            date: '2019/03/25',
            info: 'TEXT',
          },
          {
            nu: '003',
            name: 'BXDAGASKLDJGQIOEFASDF',
            axis: 'R1',
            date: '2019/03/25',
            info: 'TEXT',
          },
          {
            nu: '004',
            name: 'BXDAGASKLDJGQIOEFASDF',
            axis: 'R1',
            date: '2019/03/25',
            info: 'TEXT',
          },
          {
            nu: '005',
            name: 'BXDAGASKLDJGQIOEFASDF',
            axis: 'R1',
            date: '2019/03/25',
            info: 'TEXT',
          },
          {
            nu: '006',
            name: 'BXDAGASKLDJGQIOEFASDF',
            axis: 'R1',
            date: '2019/03/25',
            info: 'TEXT',
          },
          {
            nu: '006',
            name: 'BXDAGASKLDJGQIOEFASDF',
            axis: 'R1',
            date: '2019/03/25',
            info: 'TEXT',
          },
          {
            nu: '006',
            name: 'BXDAGASKLDJGQIOEFASDF',
            axis: 'R1',
            date: '2019/03/25',
            info: 'TEXT',
          },
          {
            nu: '006',
            name: 'BXDAGASKLDJGQIOEFASDF',
            axis: 'R1',
            date: '2019/03/25',
            info: 'TEXT',
          },
          {
            nu: '006',
            name: 'BXDAGASKLDJGQIOEFASDF',
            axis: 'R1',
            date: '2019/03/25',
            info: 'TEXT',
          },
          {
            nu: '006',
            name: 'BXDAGASKLDJGQIOEFASDF',
            axis: 'R1',
            date: '2019/03/25',
            info: 'TEXT',
          },
          {
            nu: '006',
            name: 'BXDAGASKLDJGQIOEFASDF',
            axis: 'R1',
            date: '2019/03/25',
            info: 'TEXT',
          }
        ],
      };
    },
  };
</script>

<style scoped>

</style>
