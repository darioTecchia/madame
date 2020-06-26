<template>
  <div class="food">
    <MenuFood />
  </div>
</template>

<script>
import MenuFood from '~/components/partials/MenuFood.vue'

export default {
  head: {
    title: 'Madamé - Food'
  },
  components: {
    MenuFood
  }
}
</script>

<style scoped>
.food {
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
  margin-top: 120px;
}

.food h1 {
  align-self: center;
}
</style>
