<template>

  <div class="main-container">

    <RSSHeader/>
    <RSSSidebar/>
    <RSSPosts/>

  </div>

</template>

<script setup>

    import RSSHeader from './RSSHeader.vue';
    import RSSPosts from './RSSPosts.vue';
    import RSSSidebar from './RSSSidebar.vue';

</script>

<style lang="scss" scoped>

.main-container{
  display: grid;
  grid-template-columns: 25rem 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: "header header"
  "sidebar main";
  height: 100vh;
}

</style>