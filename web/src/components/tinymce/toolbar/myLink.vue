<template>
  <com-modal
    width="600"
    title="添加链接"
    v-model="codeModal"
    @ok="linkModalOk"
    @cancel="linkModalCancel"
    :okDisabled="true"
  >
    <Form label-position="left" :label-width="60">
      <FormItem label="链接文字">
        <Input v-model="linkText" placeholder="链接文字"></Input>
      </FormItem>
      <FormItem label="链接地址">
        <Input v-model="linkUrl" placeholder="链接地址"></Input>
      </FormItem>
    </Form>
  </com-modal>
</template>

<script>
import comModal from '@/components/modal/modal.vue'

export default {
  name: 'myLink',
  icon: 'link',
  tooltip: '链接',
  components: {
    comModal
  },
  data () {
    return {
      codeModal: false,
      linkText: '',
      linkUrl: ''
    }
  },
  methods: {
    /** 点击该工具触发的事件（每个工具按钮必须添加该方法） */
    click () {
      this.codeModal = true
    },
    /** 【HTML代码】弹窗确认 */
    linkModalOk () {
      this.codeModal = false
      this.content = this.codeContent // 将代码赋值给富文本的HTML
      this.codeContent = ''
    },
    /** 【HTML代码】弹窗取消 */
    linkModalCancel () {
      console.log('cancel')
      this.codeModal = false
      this.codeContent = ''
    }
  }
}
</script>

<style scoped>

</style>
