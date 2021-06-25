<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import "./assets/css/index.scss";
html,body{
  height: 100%;
  width: 100%;
}
body{
  margin:0;
  padding:0;
}
#app{
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
