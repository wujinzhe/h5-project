<template>
  <div @click="click" class="toolbar-button" :class="{'divider': divider}">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'toolbar-button',
  props: {
    divider: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    click () {
      this.$emit('on-click')
    }
  }
}
</script>

<style scoped lang="less">
/* toolbar 按钮的基础样式 */
.toolbar-button {
  min-width: 34px;
  height: 100%;
  display: block;
  float: left;
  cursor: pointer;
  text-align: center;
  line-height: 34px;
  padding: 0 5px;
  box-sizing: content-box;
  position: relative;

  &:hover {
    color: @primary-color;
    background-color: #efffff;
  }

  i {
    font-size: 16px;
  }

}

.divider::after {
  content: '';
  height: 70%;
  border-right: 1px solid #ccc;
  position: absolute;
  right: 0;
  top: 15%;
}
</style>
