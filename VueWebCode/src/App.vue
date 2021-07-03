<template>
  <div id="app" class="layui-container">
    <div class="layui-row">
      <h1>登录页</h1>
    </div>
    <form class="layui-form" action="">
      <div class="layui-form-item">
        <label class="layui-form-label">输入框</label>
        <div class="layui-input-inline">
          <input
            type="text"
            name="title"
            required
            lay-verify="required"
            placeholder="请输入标题"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">密码框</label>
        <div class="layui-input-inline">
          <input
            type="password"
            name="password"
            required
            lay-verify="required"
            placeholder="请输入密码"
            autocomplete="off"
            class="layui-input"
          />
        </div>
      </div>
      <div class="layui-form-item">
        <label class="layui-form-label">验证码</label>
        <div class="layui-input-inline">
          <input
            type="text"
            name="title"
            required
            lay-verify="required"
            placeholder="请输入验证码"
            autocomplete="off"
            class="layui-input"
          />
        </div>
        <div v-html="svg" @click="getCaptcha"></div>
      </div>
      <div class="layui-form-item">
        <div class="layui-input-block">
          <button class="layui-btn" lay-submit lay-filter="formDemo">
            立即提交
          </button>
          <button type="reset" class="layui-btn layui-btn-primary">
            重置密码
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scopedSlots>
h1 {
  text-align: center;
}
svg {
  position: relative;
  top: -15px;
  margin: 0;
  padding: 0;
}
</style>
<script>
import axios from 'axios'
export default {
  name: 'login',
  data() {
    return {
      svg: ''
    }
  },
  mounted() {
    this.getCaptcha()
  },
  methods:
  {
    getCaptcha() {
      axios.get('http://localhost:3000/public/captcha').then((res) => {
        if (res.status == '200') {
          this.svg = res.data
        }
      })
    }
  }
}
</script>