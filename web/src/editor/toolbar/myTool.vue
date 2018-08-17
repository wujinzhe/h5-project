<template>
  <toolbar-button @on-click="click">
    <div slot="content">
      <Icon type="logo-octocat" />
    </div>
  </toolbar-button>
</template>

<script>
export default {
  name: 'myTool',
  data () {
    return {}
  },
  methods: {
    click () {
      this.$Message.success('我点击了猫头')
    }
  }
}
</script>

<style scoped>

</style>
