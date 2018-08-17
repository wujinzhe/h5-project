<template>
  <div>
    <component :is="item" v-for="(item, key) in nameList" :key="key"></component>
  </div>
</template>

<script>
const controlList = require.context('../../editor/control/', true, /button\.vue$/)
let controls = []
let controlsName = []
controlList.keys().map(key => {
  controlsName.push(key.replace(/(\.\/)|(\/button\.vue)/ig, ''))
  controls[key.replace(/(\.\/)|(\/button\.vue)/ig, '')] = controlList(key).default
})

export default {
  name: 'control-list',
  data () {
    return {
      nameList: controlsName
    }
  },
  components: {
    ...controls
  },
  created () {
    console.log(controls)
  }
}
</script>

<style scoped>

</style>
