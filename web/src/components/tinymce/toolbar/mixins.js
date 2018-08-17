export default {
  name: 'myButton',
  icon: '',
  tooltip: '新增按钮',
  text: '',
  data () {
    return {
      content: this.value
    }
  },
  model: {
    props: 'value',
    event: 'toolbarChange'
  },
  props: {
    value: {
      type: String
    }
  },
  watch: {
    value (val) {
      this.content = val
    },
    content (val) {
      this.$emit('toolbarChange', val)
    }
  },
  methods: {
    click () {
      console.log('我是自定义按钮')
      this.$parent.editor.insertContent('我是自定义按钮')
    }
  }
}
