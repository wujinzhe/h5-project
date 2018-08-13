<template>
  <div>
    <div class="editor-header">
      <Avatar style="background-color: #ff9800" icon="ios-person" />
    </div>
    <div class="editor-toolbar">

    </div>
    <div class="editor-body">
      <div class="editor-body__item"></div>
      <div class="editor-body__item"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
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

<style scoped lang="less">
  .editor-header {
    border-bottom: 1px solid #ccc;
    height: 80px;
  }
  .editor-toolbar {
    border-bottom: 1px solid #ccc;
    height: 50px;
    background-color: white;
  }
  .editor-body {
    &__item {
      border: 1px solid #ccc;
    }
  }
</style>
