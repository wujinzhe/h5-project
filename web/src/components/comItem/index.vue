<template>
  <div class="editor-component" @click="click">
    <div class="editor-component__icon">
      <Icon type="logo-octocat" />
    </div>
    <span class="editor-component__text">我的组件</span>
  </div>
</template>

<script>
export default {
  name: 'com-item',
  methods: {
    click () {
      this.$emit('on-click')
    }
  },
  created () {

  }
}
</script>

<style scoped lang="less">
  .editor-component {
    border-bottom: 1px solid #efefef;
    height: 40px;
    line-height: 40px;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      color: @primary-color;
      box-shadow: inset -1px -1px 10px 0px rgba(0, 0, 0, 0.21);
    }

    &__icon {
      width: 50px;
      text-align: center;
      font-size: 0;
      float: left;
      vertical-align: middle;

      i {
        font-size: 20px;
      }
    }

    &__text {
      display: block;
      margin-left: 50px;
    }
  }
</style>
