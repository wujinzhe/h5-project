<template>
  <div>
    <textarea id="mce">Next, get a free Tiny Cloud API key!</textarea>
  </div>
</template>

<script>
import tinymce from 'tinymce'
export default {
  mounted () {
    console.log(tinymce)
    tinymce.init({ selector: '#mce' })
  }
}
</script>

<style scoped>

</style>
