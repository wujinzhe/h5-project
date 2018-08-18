<template>
  <div class="editor-content" ref="editor">
    <p contenteditable="true" class="editor-text" id="start"></p>
    <section v-for="(item, key) in componentList" :key="key">
      <component :is="item"></component>
      <p contenteditable="true" class="edtior-text"></p>
    </section>
  </div>
</template>

<script>
const controlList = require.context('../../editor/control/', true, /control\.vue$/)
let controls = []
let controlsName = []
controlList.keys().map(key => {
  let name = key.replace(/(\.\/)|(\.vue)/ig, '').replace('/', '-')
  controlsName.push(name)
  controls[name] = controlList(key).default
})

export default {
  name: 'editor-content',
  components: {
    ...controls
  },
  data () {
    return {
      componentList: this.$store.state.editor.controlList
    }
  },
  mounted () {
    this.$refs.editor.querySelector('#start').focus()
  }
}
</script>

<style lang="less">
  .editor-content {
    height: 667px;
    width: 375px;
    border: 1px solid #ccc;
    margin:20px auto !important;
    outline: none;
    overflow: auto;
    padding: 20px 15px;

    * {
      outline: none;
    }

    p.editor-text {
      font-size: 14px !important;
      line-height: 23px !important;
    }

    /*滚动条样式*/
    /*滚动条整体样式*/
    &::-webkit-scrollbar {
      width: 2px;     /*高宽分别对应横竖滚动条的尺寸*/
    }

    /*滚动条里面小方块*/
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.2);
    }

    /*滚动条里面轨道*/
    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }
</style>
