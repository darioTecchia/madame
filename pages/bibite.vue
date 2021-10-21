<template>
  <div class="bibite pages-wrapper">
    <MenuBibite />
  </div>
</template>

<script>
import MenuBibite from '~/components/partials/MenuBibite.vue'

export default {
  head: {
    title: 'Madamé - Bibite'
  },
  components: {
    MenuBibite
  }
}
</script>

<style scoped>
.bibite {
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
}

.bibite h1 {
  align-self: center;
}
</style>
