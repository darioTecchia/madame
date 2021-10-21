<template>
  <div class="the pages-wrapper">
    <MenuThe />
  </div>
</template>

<script>
import MenuThe from '~/components/partials/MenuThe.vue'
export default {
  head: {
    title: 'Madamé - The'
  },
  components: {
    MenuThe
  }
}
</script>

<style>
.the {
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
}
.the h1 {
  align-self: center;
}
</style>
