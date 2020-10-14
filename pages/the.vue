<template>
  <div class="caffetteria">
    <MenuThe />
  </div>
</template>

<script>
import MenuThe from '~/components/partials/MenuThe.vue'

export default {
  head: {
    title: 'Madamé - Caffetteria'
  },
  components: {
    MenuThe
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
