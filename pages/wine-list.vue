<template>
  <div class="wine-list">
    <MenuWine />
  </div>
</template>

<script>
import MenuWine from '~/components/partials/MenuWine.vue'

export default {
  head: {
    title: 'Madamé - Wine List'
  },
  components: {
    MenuWine
  }
}
</script>

<style scoped>
.wine-list {
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
  margin-top: 120px;
}

.wine-list h1 {
  align-self: center;
}
</style>
