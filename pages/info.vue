<template>
  <div class="info">
    <div class="logo">
      <LogoFace />
    </div>
    <div class="info-box">
      <span>Madamé Lounge Bar</span>
      <br><br>
      <span>
        <a target="_blank" href="https://www.google.com/maps/place/Madam%C3%A8/@40.625488,14.5672334,15z/data=!4m2!3m1!1s0x0:0x6fdb417377d98e37?sa=X&ved=2ahUKEwiNi-Td1-XpAhVQTxUIHc0hA-gQ_BIwCnoECBQQCA">Piazza Generale Avitabile, 80051 Agerola NA</a>
      </span>
      <br><br>
      <span><a href="tel:+39 329 398 5389">329 398 5389</a></span>
    </div>
  </div>
</template>

<script>
import LogoFace from '~/components/logo/LogoFace.vue'

export default {
  components: {
    LogoFace
  },
  head: {
    title: 'Madamé - Info'
  }
}
</script>

<style scoped>
.info {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.info > div {
  width: 18%;
  flex: 1 1 18%;
}

@media all and (max-aspect-ratio: 1/1) {
  .info {
    flex-direction: column;
    padding-top: 54px;
  }

  .info-box{
    width: fit-content !important;
    padding: 10px 20px;
  }

  .info > div {
    width: 32%;
    flex: 0 1 32%;
  }
}
</style>
