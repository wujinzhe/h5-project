<template>
  <div>
    <div>
      <mce v-model="content" :init="mceConfig"></mce>
    </div>
  </div>
</template>

<script>
import mce from '@tinymce/tinymce-vue'

export default {
  name: 'home',
  components: {
    mce
  },
  data () {
    return {
      content: '',
      mceConfig: {
        toolbar: 'newdocument | undo redo | styleselect | bold italic | fontsizeselect | outdent indent'
      }
    }
  }
}
</script>

<style scoped>

</style>
