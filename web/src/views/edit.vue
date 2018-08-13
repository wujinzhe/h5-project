<template>
  <div class="editor-edit">
    <div class="editor-edit__head">
    </div>
    <div class="editor-edit__body">
      <div class="editor-edit__body__content">
        <mce v-model="content" :init="mceConfig"></mce>
      </div>
      <div class="editor-edit__body__side">

      </div>
      <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        >
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
      </Modal>
    </div>
  </div>
</template>

<script>
import mce from '@tinymce/tinymce-vue'

export default {
  name: 'edit',
  components: {
    mce
  },
  data () {
    return {
      content: '',
      mceConfig: {
        plugins: 'table image imagetools textcolor link code',
        menubar: false,
        toolbar: 'newdocument | undo redo | bold italic underline | fontsizeselect | outdent indent | table | link image | forecolor backcolor | mybutton | code',
        statusbar: false,
        language_url: '/static/zh_CN.js',
        setup: (editor) => {
          editor.addButton('mybutton', {
            text: '',
            icon: 'link',
            onclick: () => {
              this.modal1 = true
            }
          })
        }
      },
      modal1: false
    }
  },
  methods: {
    editorLinkClick () {
      this.modal1 = true
      this.$Modal.success('啦啦啦')
      console.log('111')
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
  }

</style>
