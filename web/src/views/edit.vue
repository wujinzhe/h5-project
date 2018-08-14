<template>
  <div class="editor-edit">
    <div class="editor-edit__head">
      <div class="editor-edit__head__info">
        <Icon type="ios-person"/>
        奥巴马打地鼠
      </div>
    </div>
    <div class="editor-edit__body">
      <div class="editor-edit__body__content">
        <mce v-model="content" :init="mceConfig"></mce>
      </div>
      <div class="editor-edit__body__side">

      </div>
      <Modal
        class="editor-edit__code-modal"
        :mask-closable="false"
        width="900"
        v-model="codeModal"
        title="网页源代码"
        >
        <codemirror
          ref="myCm"
          :value="content"
          @input="codemirrorInput">
        </codemirror>
        <div slot="footer">
          <Button type="primary" class="btn-white" @click="codeModalCancel">取消</Button>
          <Button type="primary" @click="codeModalOk">确定</Button>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import mce from '@tinymce/tinymce-vue'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/theme/monokai.css'

export default {
  name: 'edit',
  components: {
    mce
  },
  data () {
    return {
      content: '',
      codeContent: '',
      editor: null,
      mceConfig: {
        plugins: 'table image imagetools textcolor',
        menubar: false,
        toolbar: 'newdocument | undo redo | bold italic underline | fontsizeselect | outdent indent | table | myLink image | forecolor backcolor | myCode ',
        statusbar: false,
        language_url: '/static/zh_CN.js',
        setup: (editor) => {
          this.editor = editor
          editor.addButton('myCode', {
            text: '',
            icon: 'code',
            tooltip: '源代码',
            onclick: () => {
              this.codeModal = true
            }
          })

          editor.addButton('myLink', {
            text: '',
            icon: 'link',
            tooltip: '链接',
            onclick: () => {
              this.codeModal = true
            }
          })
        }
      },
      codeModal: false
    }
  },
  computed: {
    codemirror () {
      return this.$refs.myCm.codemirror
    }
  },
  methods: {
    editorLinkClick () {
      this.codeModal = true
      this.$Modal.success('啦啦啦')
      console.log('111')
    },
    codemirrorInput (code) {
      this.codeContent = code
    },
    /** 【HTML代码】弹窗确认 */
    codeModalOk () {
      this.codeModal = false
      this.content = this.codeContent
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

<style scoped lang="less">
  .editor-edit {
    height: 100%;

    /* 头部 (editor-edit__head) */
    &__head {
      height: 50px;
      background-color: #ff9800;

      /* 用户信息 (editor-edit__head__info) */
      &__info {
        color: #ffffff;
        font-weight: 900;
        font-size: 16px;
        float: right;
        line-height: 50px;
        margin-right: 50px;
      }
    }

    /* body (editor-edit__body) */
    &__body {
      display: flex;
      height: calc(100% - 50px);
      flex-direction: row;

      /* 内容编辑区 (editor-edit__body__content) */
      &__content {
        flex-grow: 1;
        // background-color: rgba(255, 152, 0, 0.04);
      }

      /* 属性侧边栏区 (editor-edit__body__side) */
      &__side {
        width: 400px;
        height: 100%;
        border-left: 1px solid #ccc;
      }
    }

    &__code-modal {
      width: 800px;
    }
  }

</style>
