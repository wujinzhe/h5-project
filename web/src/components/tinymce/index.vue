<template>
  <div>
    <mce v-on="$listeners" v-model="mceContent" :init="mceConfig"></mce>
    <component
      v-model="mceContent"
      :is="name"
      v-for="(name, key) in toolName"
      :key="key">
    </component>
  </div>
</template>

<script>
import mce from '@tinymce/tinymce-vue'
import { tools, toolName, setup } from './setup'

export default {
  name: 'tinymce',
  components: {
    mce,
    ...tools
  },
  model: {
    props: 'value',
    event: 'mceChange'
  },
  props: {
    value: {
      type: String
    }
  },
  data () {
    return {
      mceContent: this.value,
      toolName,
      editor: null,
      mceConfig: {
        plugins: 'table image imagetools textcolor hr lists',
        menubar: false,
        toolbar: `undo redo | 
          bold italic underline | 
          fontsizeselect | 
          outdent indent | 
          table hr bullist numlist | 
          myLink image | 
          forecolor backcolor | 
          myCode`,
        statusbar: false,
        language_url: '/static/zh_CN.js',
        setup: (editor) => {
          this.$store.commit('initEditor', editor)
          setup.call(this, editor)
        }
      }
    }
  },
  watch: {
    mceContent (val) {
      console.log('mceContent', val)
      this.$emit('mceChange', val)
    },
    content (val) {
      console.log('tinymce watch', val)
      this.mceContent = val
    }
  }
}
</script>

<style scoped>

</style>
