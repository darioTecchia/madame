<template>
  <div>
    <img v-lazy-load data-src="~/assets/menu/aperitivi-e-cocktails/page_1.jpeg">
    <img v-lazy-load data-src="~/assets/menu/aperitivi-e-cocktails/page_2.jpeg">
    <img v-lazy-load data-src="~/assets/menu/aperitivi-e-cocktails/page_3.jpeg">
    <img v-lazy-load data-src="~/assets/menu/aperitivi-e-cocktails/page_4.jpeg">
    <img v-lazy-load data-src="~/assets/menu/aperitivi-e-cocktails/page_5.jpeg">
    <img v-lazy-load data-src="~/assets/menu/aperitivi-e-cocktails/page_6.jpeg">
    <img v-lazy-load data-src="~/assets/menu/aperitivi-e-cocktails/page_7.jpeg">
    <img v-lazy-load data-src="~/assets/menu/aperitivi-e-cocktails/page_8.jpeg">
    <img v-lazy-load data-src="~/assets/menu/aperitivi-e-cocktails/page_9.jpeg">
    <img v-lazy-load data-src="~/assets/menu/aperitivi-e-cocktails/page_10.jpeg">
    <img v-lazy-load data-src="~/assets/menu/aperitivi-e-cocktails/page_11.jpeg">
    <img v-lazy-load data-src="~/assets/menu/aperitivi-e-cocktails/page_12.jpeg">
    <img v-lazy-load data-src="~/assets/menu/aperitivi-e-cocktails/page_13.jpeg">
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
