<template>
    <div>
        <!--总览-->
        <Row>
            <Col span="24" style="height: 64px">
                <Row>
                    <Col span="12">
                        <div class="font_div" style="float: left; position: relative; margin-left: 20px">工程预览</div>
                    </Col>
                    <Col span="12">
                        <div class="font_div" style="float: right; position: relative; margin-right: 20px" >共有3个程序</div>
                    </Col>
                </Row>
            </Col>
            <Divider />
        </Row>
        <!--操作-->
        <Row>
            <Col span="24" style="height: 86px;">
                <div style="position: relative;top: 25px;right: 29px;">
                    <Button :size="buttonSize" type="primary" style="float: right; margin-left: 10px">打开</Button>
                    <Button :size="buttonSize" type="primary" style="float: right">新建</Button>
                </div>
            </Col>
            <Divider />
        </Row>
        <!--表格-->
        <Row>
            <Col span="24">
                <Table height="600" :columns="columns1" :data="data2"></Table>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "projects",
        data() {
            return {
                columns1: [
                    {
                        title: '序号',
                        key: 'age'
                    },
                    {
                        title: '程序名称',
                        key: 'name'
                    },
                    {
                        title: '修改时间',
                        key: 'date'
                    },
                    {
                        title: '程序备注',
                        key: 'address'
                    }
                ],
                data2: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
