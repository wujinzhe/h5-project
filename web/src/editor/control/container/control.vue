<template>
  <Split
    class="container control"
    v-model="split"
    :class="{'show-border': isFocus}">
    <div slot="left" class="split-pane">
      <p contenteditable="true" class="editor-text">
        Left Pane
      </p>
    </div>
    <div slot="right" class="split-pane">
      <p contenteditable="true" class="editor-text">
        Right Pane
      </p>
    </div>
  </Split>
</template>

<script>
export default {
  name: 'container-control',
  data () {
    return {
      split: 0.5,
      isFocus: false
    }
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
  .control {
    height: 200px;
    position: relative;
    outline: 1px solid #ccc;

    * { outline: none; }

    &__top {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.192);
      width: 50px;
      height: 30px;
      top: -30px;
      right: 0;

      i {
        font-size: 20px;
        color: white;
      }
    }

    .split-pane{
      padding: 10px;
    }
  }

  .show-border {
    border: 1px solid #ccc;
  }

</style>
