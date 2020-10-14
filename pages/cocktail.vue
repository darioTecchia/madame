<template>
  <div class="cocktail">
    <MenuCocktail />
  </div>
</template>

<script>
import MenuCocktail from '~/components/partials/MenuCocktail.vue'

export default {
  head: {
    title: 'Madamé - Cocktail'
  },
  components: {
    MenuCocktail
  }
}
</script>

<style scoped>
.cocktail {
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
}

.cocktail h1 {
  align-self: center;
}
</style>
