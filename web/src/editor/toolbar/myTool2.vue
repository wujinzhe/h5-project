<template>
  <toolbar-button @on-click="click">
    <div slot="content">
      <ColorPicker v-model="color" size="small" />
    </div>
  </toolbar-button>
</template>

<script>
export default {
  name: 'myTool',
  data () {
    return {
      color: '#ffffff'
    }
  },
  methods: {
    click () {
      this.$Message.success('我点击了这个⚙')
    }
  }
}
</script>

<style scoped>

</style>
