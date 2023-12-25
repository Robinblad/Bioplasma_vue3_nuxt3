
<script lang="ts" setup>
definePageMeta({
  layout: "framework",

});

</script>

<template>
  <div class="background">
    <div class="content">Berrycore - частная компания основанная в Новосибирске в 2019 году занимающаяся производством
      продуктов здорового питания. Философией компании является стремление внести вклад в культуру здорового образа жизни
      и расширение горизонтов пищевой промышленности. Основатель Скворцов Константин Николаевич.</div>
    <div class="backgroundCover">

    </div>

    <nuxtlayout name="framework">

    </nuxtlayout>
  </div>
</template>

<style scoped>
.background {
  background-image: url(../static/images/background.jpg);
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 1200px;
  margin-top: -91px;
  z-index: -5;
}

.backgroundCover {
  background-color: black;
  width: 100%;
  height: 1200px;
  margin-top: -91px;
  opacity: 0.2;
  z-index: -4;
}

.content {
  position: absolute;
  top: 35vh;
  left: 22vw;
  width: 36vw;
  height: fit-content;
  padding: 12vh 9vw;
  background-color: #333333;
  z-index: 3;
  opacity: 0.6;
  color: #FFF;
  text-align: center;
  font-family: Victor Mono, Nexa;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 0;
  animation: contentAnimation 2s forwards;
  animation-delay: 0.5s;
}


@keyframes contentAnimation {
  from {
    opacity: 0;
    transform: rotateX(90deg);
  }

  to {
    opacity: 0.6;
    transform: rotateX(0deg);
  }
}
</style>