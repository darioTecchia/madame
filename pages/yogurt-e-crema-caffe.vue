<template>
  <div class="pasticceria-e-yogurt pages-wrapper">
    <MenuYogurtECremaCaffe />
  </div>
</template>

<script>
import MenuYogurtECremaCaffe from '~/components/partials/MenuYogurtECremaCaffe.vue'

export default {
  head: {
    title: 'Madamé - Yogurt e Crema caffeè'
  },
  components: {
    MenuYogurtECremaCaffe
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
