<template>
  <div>
    <h1>我是登录页面</h1>
    <div style="width: 200px;">

      <Input v-model="userName" placeholder=""></Input>
      <Button type="primary">按钮</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userName: ''
    }
  }
}
</script>

<style scoped>

</style>
