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
  font-family: 'AvantGarde';
  src: url(../assets/fonts/AvantGarde.otf);
}

@font-face {
  font-family: 'Diodrum';
  src: url(../assets/fonts/Diodrum.otf);
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
  font-family: AvantGarde;
  margin: 0px;
  background: white !important;
}

.upper-case {
  text-transform: uppercase;
}

.hide {
  display: none;
}
</style>
