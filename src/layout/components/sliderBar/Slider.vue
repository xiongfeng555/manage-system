<template>
  <div v-if="!route.hidden">
    <template v-if="route.path==='/'">
      <app-link v-if="route.meta" :to="path">
        <el-menu-item :index="getIndex(route)">
          <i :class="route.meta.icon" />
          <span slot="title">{{ route.meta.title }}</span>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else :index="getIndex(route)">
      <template slot="title">
        <i :class="route.meta.icon" />
        <span>{{ route.meta.title }}</span>
      </template>
      <el-menu-item-group>
        <Item v-for="item in route.children" :key="item.path" :index="getIndex(route)" :route="item" :base-url="route.path" :parent="route.children" />
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>
<script>
import AppLink from './AppLink.vue'
import Item from './Item.vue'
export default {
  components: {
    AppLink,
    Item
  },
  props: {
    route: {
      required: true,
      type: Object
    },
    path: {
      required: true,
      type: String
    }
  },
  computed: {
    getShowRouter() {
      const showRouter = this.$store.state.permission_route.filter(item => {
        if (item.hidden) {
          return false
        } else {
          return true
        }
      })
      return showRouter
    }
  },
  methods: {
    // 只做两层嵌套，判断该路由有没有子路由
    hasNoChild(router) {
      if (!router.children) {
        return true
      }
      return false
    },
    getIndex(route) {
      return this.getShowRouter.indexOf(route).toString()
    },
    hasOneChild(router) {
      return router.children.length === 1
    }
  }
}
</script>
