<template>
  <header>
    <div class="menu">
      <span @click="hover = true" class="menu-button upper-case">menú</span>
      <transition name="bounce">
        <div v-show="hover" @click="hover = false" class="menu-options">
          <nuxt-link to="/caffetteria">caffetteria</nuxt-link>
          <nuxt-link to="/pasticceria-e-yogurt">pasticceria e yogurt</nuxt-link>
          <nuxt-link to="/bibite">bibite</nuxt-link>
          <nuxt-link to="/the">thè</nuxt-link>
          <nuxt-link to="/panini-e-stuzzicheria">panini e stuzzicheria</nuxt-link>
          <nuxt-link to="/aperitivi-e-cocktails">aperitivi e cocktails</nuxt-link>
          <nuxt-link to="/wine-list">wine list</nuxt-link>
          <nuxt-link to="/info">info</nuxt-link>
        </div>
      </transition>
    </div>

    <nuxt-link class="logo" to="/">
      <LogoMadame />
    </nuxt-link>

    <div class="info-button upper-case">
      <nuxt-link to="/info">info</nuxt-link>
    </div>
  </header>
</template>

<script>
import LogoMadame from '~/components/logo/LogoMadame.vue'

export default {
  components: {
    LogoMadame
  },
  data () {
    return {
      hover: false
    }
  }
}
</script>

<style scoped>
header {
  position: fixed;
  top: 50px;
  left: 50px;
  right: 50px;
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  z-index: 99;
  background-color: unset !important;
}

header > * {
  width: 18%;
  flex: 0 1 18%;
  background-color: transparent;
}

header .menu {
  text-align: left;
  font-size: var(--std-size);
}

header .menu-button:hover {
  cursor: pointer;
}

header .menu .menu-options {
  position: absolute;
  font-size: 45px;
  display: flex;
  position: fixed !important;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: #fff;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

header .menu .menu-options a {
  display: block;
  transition: all .2s;
  transition-timing-function: ease;
}

header .menu .menu-options a:hover {
  margin-left: 10px;
}

header .menu .menu-options a.collections-button {
  cursor: pointer;
}

header .menu .menu-options .collections-submenu {
  font-size: 35px;
  letter-spacing: 5px;
}

header .menu .menu-options .collections-submenu a {
  margin-bottom: 10px;
}

header .logo {
  text-align: center;
  width: fit-content;
}

header .logo svg {
  width: 100%;
  height: 50px;
}

header .info-button {
  text-align: right;
  font-size: var(--std-size);
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@media all and (max-width: 823px) {

  header .menu {
    font-size: var(--petit-size);
  }

  header .info-button {
    font-size: var(--petit-size);
  }

  header > * {
    width: 50%;
    flex: 0 1 50%;
  }

  header {
    top: 25px;
    left: 25px;
    right: 25px;
  }

  header .logo svg {
    height: 25px;
  }

}
</style>
