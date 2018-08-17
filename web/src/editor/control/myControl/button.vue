<template>
  <div>
    <control-button @on-click="click">
      <div slot="icon">
        <Icon type="logo-octocat" />
      </div>
      我的组件
    </control-button>
  </div>
</template>

<script>
export default {
  name: 'myControl',
  data () {
    return {}
  },
  methods: {
    click () {
      this.$Message.success('点击了myControl')
      // console.log('点击了myControl')
    }
  }
}
</script>

<style scoped>

</style>
