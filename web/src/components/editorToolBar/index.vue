<template>
  <div style="height: 100%;">
    <component :is="item" v-for="(item, key) in controlsName" :key="key"></component>
  </div>
</template>

<script>
const controlList = require.context('../../editor/toolbar/', false, /.vue$/)
let controls = []
let controlsName = []
controlList.keys().map(key => {
  controlsName.push(key.replace(/(\.\/)|(\.vue)/ig, ''))
  controls[key.replace(/(\.\/)|(\.vue)/ig, '')] = controlList(key).default
})

export default {
  name: 'toolbar',
  components: {
    ...controls
  },
  data () {
    return {
      controlsName
    }
  }
}
</script>

<style scoped>

</style>
