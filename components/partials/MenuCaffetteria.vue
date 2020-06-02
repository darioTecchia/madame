<template>
  <div>
    <img v-lazy-load data-src="~/assets/menu/caffetteria/page_1.png">
    <img v-lazy-load data-src="~/assets/menu/caffetteria/page_2.png">
    <img v-lazy-load data-src="~/assets/menu/caffetteria/page_3.png">
    <img v-lazy-load data-src="~/assets/menu/caffetteria/page_4.png">
    <img v-lazy-load data-src="~/assets/menu/caffetteria/page_5.png">
    <img v-lazy-load data-src="~/assets/menu/caffetteria/page_6.png">
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  opacity: 0;

  transition: opacity ease-in 1s;
}

.isLoaded {
  height: unset;
  opacity: 1;
}
</style>
