<template>
  <div class="pasticceria-e-yogurt">
    <MenuPasticceria />
  </div>
</template>

<script>
import MenuPasticceria from '~/components/partials/MenuPasticceria.vue'

export default {
  head: {
    title: 'Madamé - Pasticceria e Yogurt'
  },
  components: {
    MenuPasticceria
  }
}
</script>

<style scoped>
.pasticceria-e-yogurt {
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
}

.pasticceria-e-yogurt h1 {
  align-self: center;
}
</style>
