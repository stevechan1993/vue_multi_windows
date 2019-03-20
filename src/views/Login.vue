<template>
  <el-row>
    <el-col :span="12">
      <div class="grid-content">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
          <h3 class="title">WELCOME</h3>
          <h3 class="title">BACK -</h3>
          <el-form-item prop="account">
            <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="请输入您的账号"></el-input>
          </el-form-item>
          <el-form-item v-if="visible" prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请输入您的密码...">
              <i slot="suffix" title="显示密码" @click="changePass('show')" style="cursor:pointer;"
                 class="el-input__icon iconfont icon-show"></i>
            </el-input>
          </el-form-item>
          <el-form-item v-else prop="checkPass">
            <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="请输入您的密码...">
              <i slot="suffix" title="显示密码" @click="changePass('hide')" style="cursor:pointer;"
                 class="el-input__icon iconfont icon-show"></i>
            </el-input>
          </el-form-item>
          <div>忘记密码？</div>
          <el-form-item style="width:100%; margin-top: 25px">
            <el-button type="primary" style="width:100px; float: right; background-color: #ff3825;border-color: #ff3825" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
            <el-button style="width: 100px; float: left; margin-left: 0px;" @click.native.prevent="handleReset2">注册</el-button>
          </el-form-item>
          <el-checkbox v-model="checked" checked class="remember">记住我</el-checkbox>
        </el-form>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content " style="position: fixed">
        <img src="../assets/log_bac.jpg" alt="Pulpit rock"  width=100% height="100%" >
      </div>
    </el-col>
  </el-row>
</template>

<script>
  import { requestLogin } from '../api/api';
  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
        rules2: {
          account: [
            //{ required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            //{ required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true,
        visible: true
      };
    },
    methods: {
      changePass(value) {
        this.visible = !(value === 'show');
      },
      //判断渲染，true:暗文显示，false:明文显示
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        var _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            //_this.$router.replace('/table');
            this.logining = true;
            //NProgress.start();
            var loginParams = { username: this.ruleForm2.account, password: this.ruleForm2.checkPass };
            requestLogin(loginParams).then(data => {
              this.logining = false;
              //NProgress.done();
              let { msg, code, user } = data;
              if (code !== 200) {
                this.$message({
                  message: msg,
                  type: 'error'
                });
              } else {
                sessionStorage.setItem('user', JSON.stringify(user));
                this.$router.push({ path: '/app' });
              }
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }

</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 0px auto;
    width: 300px;
    padding: 300px 35px 15px 35px;
    background: #fff;
    /*border: 1px solid #eaeaea;*/
    /*box-shadow: 0 0 25px #cac6c6;*/
    .title {
      margin: -14px auto 14px auto;
      text-align: left;
      color: #505458;
      font-weight: bold;
    }
    .remember {
      margin: 15px 0px 35px 0px;
    }
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
