<template>
  <div class="editor-edit">
    <div class="editor-edit__head">
      <div class="editor-edit__head__info">
        <Icon type="ios-person"/>
        奥巴马打地鼠
      </div>
    </div>
    <div class="editor-edit__body">
      <div class="editor-edit__body__control">
        <div class="editor-edit__body__control__head">
          组件
        </div>
        <control-list></control-list>
      </div>
      <div class="editor-edit__body__content">
        <!-- <tinymce v-model="content"></tinymce> -->
        <div class="editor-bar">
          <tool-bar></tool-bar>
        </div>
        <editor-content></editor-content>
      </div>
      <div class="editor-edit__body__attr">

      </div>
    </div>
  </div>
</template>

<script>
import tinymce from '@/components/tinymce/index.vue'
import comItem from '@/components/comItem/index.vue'
import controlList from '@/components/controlList/index.vue'
import toolBar from '@/components/editorToolBar/index.vue'
import editorContent from '@/editor/content/content.vue'

export default {
  name: 'edit',
  components: {
    tinymce,
    comItem,
    controlList,
    toolBar,
    editorContent
  },
  data () {
    return {
      content: '<p>11</p>'
    }
  },
  methods: {
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

      /* 组件侧边栏区 (editor-edit__body__side) */
      &__control {
        width: 200px;
        height: 100%;
        border-right: 1px solid #ccc;

        &__head {
          height: 34px;
          border-bottom: 1px solid #ccc;
          text-align:center;
          font-size: 17px;
          line-height: 34px;
        }
      }

      /* 属性侧边栏区 (editor-edit__body__side) */
      &__attr {
        width: 400px;
        height: 100%;
        border-left: 1px solid #ccc;
      }
    }
  }

  .editor-bar {
    border-bottom: 1px solid #ccc;
    height: 34px;
  }
</style>
