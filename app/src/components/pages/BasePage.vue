<template lang="html">
  <div style="padding-top:100px;">
    <header><slot name="header"></slot></header>
    <main><slot></slot></main>
    <aside><slot name="aside"></slot></aside>
    <footer><slot name="footer"></slot></footer>
  </div>
</template>

<script>
export default {
  name: "BasePage"
}
</script>

<style scoped>
main {
  max-width: 600px;
  width: calc(100% - 80px);
  min-width: 280px;
  margin-left: auto;
  margin-right: auto;
}

header {
  position: fixed;
  width: 100%;
  top:0;
  z-index: 2;
  background-color: white;
  box-shadow: 0px 0px 4px 0px black;
}

aside {
  z-index: 3;
}
</style>
