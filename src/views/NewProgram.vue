<template>
    <div>
        <Row>
            <Col span="24" style="height: 64px; top: 5px">
                <Row style="top: 20px">
                    <Col span="24">
                        <div class="font_div" style="float: left; position: relative; margin-left: 20px; color: #2d8cf0">新建程序
                        </div>
                    </Col>
                </Row>
            </Col>
            <Divider/>
        </Row>
        <Row>
            <Col span="24" style="height: 86px; top: -12px; padding: 30px">
                <Form :model="formLeft" label-position="left" :label-width="100">
                    <FormItem label="程序名称">
                        <Input v-model="formLeft.input1" placeholder="请输入以字母开头的程序名称"></Input>
                    </FormItem>
                    <FormItem label="程序注解">
                        <Input v-model="formLeft.input2" placeholder="请输入程序注解"></Input>
                    </FormItem>
                    <FormItem label="编组">
                        <Input v-model="formLeft.input3" placeholder="请输入编组方式"></Input>
                    </FormItem>
                    <FormItem label="创建时间">
                        <Input v-model="formLeft.input4" placeholder="2019/05/06"></Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary">确认</Button>
                        <Button style="margin-left: 8px">取消</Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    </div>
</template>

<script>
  export default {
    name: 'NewProgram',
    data() {
      return {
        formLeft: {
          input1: '',
          input2: '',
          input3: '',
          input4: ''
        },
      }
    }
  };
</script>

<style scoped>

</style>
