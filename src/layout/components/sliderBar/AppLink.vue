<template>
  <router-link v-bind="linkProps(to)">
    <slot />
  </router-link>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  methods: {
    linkProps(to) {
      return {
        to: to
      }
    }
  }
}
</script>
