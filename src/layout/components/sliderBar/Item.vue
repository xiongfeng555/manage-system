<template>
  <div>
    <app-link v-if="route.meta" :to="getFullPath">
      <el-menu-item :index="getFullIndex" @click="isFlush()">{{ route.meta.title }}</el-menu-item>
    </app-link>
  </div>
</template>
<script>
import AppLink from './AppLink.vue'
export default {
  components: {
    AppLink
  },
  props: {
    index: {
      type: String,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    baseUrl: {
      type: String,
      required: true
    },
    parent: {
      type: Array,
      required: true
    }
  },
  computed: {
    getFullPath() {
      return this.baseUrl + '/' + this.route.path
    },
    getFullIndex() {
      const childIndex = (this.parent.indexOf(this.route) + 1).toString()
      return this.index + '-' + childIndex
    }
  },
  methods: {
    isFlush() {
      if (this.getWindowHref() === this.getFullPath) {
        this.$router.replace({
          path: '/redirect' + this.getWindowHref()
        })
      }
    },
    getWindowHref() {
      return window.location.href.split('#')[1]
    }
  }
}
</script>
