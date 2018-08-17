<template>
  <div>
    <Modal
      :mask-closable="false"
      width="900"
      :closable="false"
      v-model="codeModal"
      title="网页源代码"
      >
      <codemirror
        ref="myCm"
        :value="codeContent">
      </codemirror>
      <div slot="footer">
        <Button type="primary" class="btn-white" @click="codeModalCancel">取消</Button>
        <Button type="primary" @click="codeModalOk">确定</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import mixins from './mixins'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/theme/monokai.css'

export default {
  name: 'myCode',
  icon: 'code',
  tooltip: '源代码',
  mixins: [mixins],
  data () {
    return {
      codeModal: false,
      codeContent: '' // code编辑工具显示的代码
    }
  },
  methods: {
    /** 点击该工具触发的事件（每个工具按钮必须添加该方法） */
    click () {
      this.codeModal = true
      this.codeContent = this.content
    },
    /** 【HTML代码】弹窗确认 */
    codeModalOk () {
      this.codeModal = false
      this.content = this.codeContent // 将代码赋值给富文本的HTML
      this.codeContent = ''
    },
    /** 【HTML代码】弹窗取消 */
    codeModalCancel () {
      this.codeModal = false
      this.codeContent = ''
    }
  }
}
</script>

<style scoped>

</style>
