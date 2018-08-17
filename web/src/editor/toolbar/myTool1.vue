<template>
  <toolbar-button @on-click="click">
    <div slot="content">
      <Icon type="ios-color-palette" />
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
      this.$Message.success('我点击了画板')
    }
  }
}
</script>

<style scoped>

</style>
