<template>
  <div>
    <el-row class="main-content">
      <div class="login">
        <div class="login-content">
          <el-input
            class="login-user"
            placeholder="请输入内容"
            prefix-icon="el-icon-user"
            v-model="username"
          >
          </el-input>
          <el-input
            class="login-password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
            password
            v-model="password"
          >
          </el-input>
          <el-button
            class="login-button"
            type="primary"
            size="large"
            @click="
              () => {
                this.$router.push({ name: 'DashBoard' });
              }
            "
            >登录</el-button
          >
        </div>
      </div>
    </el-row>
    <footer class="footer">©️上海明运信息科技有限公司</footer>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, onMounted, onUpdated, onUnmounted } from "vue";
export default defineComponent({
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
});
</script>

<style>
.main-content {
  height: calc(100vh - 50px);
  width: 100%;
  display: flex;
  align-items: center;
}
.login {
  width: 100%;
  height: 400px;
  background-color: blue;
  display: flex;
  align-items: center;
}
.login-content {
  position: absolute;
  right: 20%;
  height: 500px;
  width: 300px;
  background-color: white;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid #000;
}
.login-user {
  margin-top: 100px;
  width:90%;
}
.login-password {
  margin-top: 20px;
    width:90%;

}
.login-button {
  width: 90%;
  margin-top: 60px;
}
.footer {
  width: 100%;
  text-align: center;
  color: #666;
  height: 50px;
}
</style>  