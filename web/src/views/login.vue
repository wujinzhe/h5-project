<template>
  <div class="editor-login-box">
    <h1 class="editor-login-box__title">HTML5在线编辑工具</h1>
    <div class="editor-login-box__column">
      <Input
        prefix="ios-contact"
        v-model="userName"
        placeholder="账号">
      </Input>
    </div>
    <div class="editor-login-box__column">
      <Input
        prefix="ios-lock"
        v-model="password"
        type="password"
        placeholder="密码">
      </Input>
    </div>
    <div class="editor-login-box__column">
      <Button type="primary" @click="login" style="width: 100%;">登录</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>

<style scoped lang="less">
  .editor-login-box {
    width: 300px;
    height: 300px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

    /* login-box 的标题 */
    &__title {
      text-align: center;
    }

    /* login-box 的列 */
    &__column {
      margin-top: 10px;
    }
  }
</style>
