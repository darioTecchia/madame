<template>
  <div class="aperitivo pages-wrapper">
    <MenuAperitivo />
  </div>
</template>

<script>
import MenuAperitivo from '~/components/partials/MenuAperitivo.vue'

export default {
  head: {
    title: 'Madamé - Aperitivo'
  },
  components: {
    MenuAperitivo
  }
}
</script>

<style scoped>
.aperitivo {
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
}

.aperitivo h1 {
  align-self: center;
}
</style>
