<template>
  <div>
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/partials/Header.vue'

export default {
  components: {
    Header
  },
  created (context) {
    console.log('Developed by Dario Tecchia')
  },
  head: {
    title: 'Madamé'
  }
}
</script>

<style>
@font-face {
  font-family: 'ITC Avant Garde Gothic Std Extra';
  src: url('../assets/fonts/ITCAvantGardeStd-XLt.eot');
  src: url('../assets/fonts/ITCAvantGardeStd-XLt.eot?#iefix') format('embedded-opentype'),
      url('../assets/fonts/ITCAvantGardeStd-XLt.woff2') format('woff2'),
      url('../assets/fonts/ITCAvantGardeStd-XLt.woff') format('woff'),
      url('../assets/fonts/ITCAvantGardeStd-XLt.ttf') format('truetype'),
      url('../assets/fonts/ITCAvantGardeStd-XLt.svg#ITCAvantGardeStd-XLt') format('svg');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

:root {
  --std-size: 40px;
  --petit-size: 20px;
}

a,
a:visited {
  text-decoration: none;
  color: #000000;
}

* {
  font-weight: lighter;
}

body {
  font-family: 'ITC Avant Garde Gothic Std Extra';
  margin: 0px;
  background: white !important;
}

.upper-case {
  text-transform: uppercase;
}

.hide {
  display: none;
}

.pages-wrapper {
  padding-top: 66px;
}

.pages-wrapper svg {
  /* height: 20%; */
  margin-bottom: 20px;
}
</style>
