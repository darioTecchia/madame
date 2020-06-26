<template>
  <div>
    <img v-lazy-load data-src="~/assets/menu/food/page_1.png">
    <img v-lazy-load data-src="~/assets/menu/food/page_2.png">
    <img v-lazy-load data-src="~/assets/menu/food/page_3.png">
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
img {
  width: 80%;
  height: 100%;
  opacity: 0;

  transition: opacity ease-in 1s;
}

.isLoaded {
  height: unset;
  opacity: 1;
}

@media all and (max-width: 768px) {
  img {
    width: 100%;
  }
}
</style>
