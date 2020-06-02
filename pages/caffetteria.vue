<template>
  <div class="caffetteria">
    <MenuCaffetteria />
  </div>
</template>

<script>
import MenuCaffetteria from '~/components/partials/MenuCaffetteria.vue'

export default {
  head: {
    title: 'Madamé - Caffetteria'
  },
  components: {
    MenuCaffetteria
  }
}
</script>

<style>
.caffetteria {
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
}

.caffetteria h1 {
  align-self: center;
}
</style>
