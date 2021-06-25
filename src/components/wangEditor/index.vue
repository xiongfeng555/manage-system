<template>
  <div class="editorText">
    <div ref="editor" />
    <el-button type="primary" class="submit" @click="submit">提交</el-button>
  </div>

</template>

<script>
import E from 'wangeditor'
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    meanArray: {
      // 自定义菜单
      type: Array,
      default: null
    }
  },
  data() {
    return {
      // 默认有这么多菜单，meanArray有值以meanArray为准
      defaultMeanus: [
        'head',
        'bold',
        'fontSize',
        'fontName',
        'italic',
        'underline',
        'strikeThrough',
        'indent',
        'lineHeight',
        'foreColor',
        'backColor',
        'link',
        'list',
        'justify',
        'quote',
        'emoticon',
        'image',
        'video',
        'table',
        'code',
        'splitLine',
        'undo',
        'redo'
      ],
      editor: ''
    }
  },
  watch: {
    value: function(value) {
      if (value !== this.editor.txt.html()) {
        this.editor.txt.html(this.value)
      }
    }
    // value为编辑框输入的内容，这里我监听了一下值，当父组件调用得时候，如果给value赋值了，子组件将会显示父组件赋给的值
  },
  mounted() {
    const that = this
    that.$nextTick(function() {
      that.init()
    })
  },
  methods: {
    init() {
      const _this = this
      this.editor = new E(this.$refs.editor)
      this.editor.config.uploadImgShowBase64 = true // 使用 base64 保存图片
      this.setMenus() // 设置菜单
      this.editor.config.onchange = (html) => {
        _this.$emit('change', html) // 将内容同步到父组件中
      }
      this.editor.create() // 创建编辑器
    },
    setMenus() {
      // 设置菜单
      if (this.meanArray) {
        this.editor.config.menus = this.meanArray
      } else {
        this.editor.config.menus = this.defaultMeanus
      }
    },
    getHtml() {
      // 得到文本内容
      return this.editor.txt.html()
    },
    setHtml(txt) {
      // 设置富文本里面的值
      this.editor.txt.html(txt)
    },
    submit() {
      console.log(this.getHtml())
      this.$message({
        message: '提交成功！',
        type: 'success',
        duration: 2000,
        showClose: true
      })
    }
  }
}
</script>
<style lang="scss">

</style>
