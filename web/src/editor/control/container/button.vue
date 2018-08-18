<template>
  <control-button @on-click="click">
    <div slot="icon">
      <Icon type="md-browsers" />
    </div>
    容器
  </control-button>
</template>

<script>
export default {
  name: 'container-button',
  data () {
    return {}
  },
  methods: {
    click () {
      this.$Message.success('点击了myControl')
      this.$store.commit('addControlList', 'container-control')
      // console.log('点击了myControl')
    }
  }
}
</script>

<style scoped>

</style>
