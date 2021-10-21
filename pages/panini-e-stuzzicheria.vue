<template>
  <div class="light-break">
    <MenuBreak />
  </div>
</template>

<script>
import MenuBreak from '~/components/partials/MenuBreak.vue'

export default {
  head: {
    title: 'Madamé - Light Break'
  },
  components: {
    MenuBreak
  }
}
</script>

<style scoped>
.light-break {
  display: flex;
  height: 100vh;
  justify-content: center;
  text-align: center;
}

.light-break h1 {
  align-self: center;
}
</style>
