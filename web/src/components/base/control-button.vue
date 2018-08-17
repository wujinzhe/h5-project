<template>
  <div class="control-button" @click="click">
    <div class="control-button__icon">
      <slot name="icon"></slot>
    </div>
    <span class="control-button__text">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'control-button',
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
  .control-button {
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
