<template>
  <Modal
    :mask-closable="false"
    :closable="false"
    v-bind="$attrs"
    v-model="modelValue"
    >
    <slot></slot>
    <div slot="footer">
      <Button type="primary" class="btn-white" @click="cancel">取消</Button>
      <Button type="primary" @click="ok" :disabled="okDisabled">确定</Button>
    </div>
  </Modal>
</template>

<script>
export default {
  name: 'modal',
  props: {
    okDisabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  model: {
    props: 'value',
    event: 'modelChange'
  },
  data () {
    return {
      modelValue: this.value
    }
  },
  watch: {
    value (val) {
      this.modelValue = val
      // this.$emit('modelChange', val)
    }
  },
  methods: {
    cancel () {
      this.$emit('cancel')
    },
    ok () {
      this.$emit('ok')
    }
  }
}
</script>

<style scoped>

</style>
