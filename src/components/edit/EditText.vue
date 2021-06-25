<template>
  <div>
    <editor ref="editorOne" v-model="detail" @change="change" />
  </div>
</template>

<script>
import Editor from '@/components/wangEditor'
export default {

  components: { Editor },
  data() {
    return {
      detail: ''
    }
  },
  created() {
    this.setBreadCrumb()
  },
  methods: {
    change(val) {
      console.log(val)
    },
    setBreadCrumb() {
      this.$store.commit('setBreadCrumb', ['编辑', '文本编辑'])
    }
  }
}
</script>
