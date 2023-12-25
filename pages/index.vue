
<script lang="ts" setup>
definePageMeta({
  layout: "framework",

});

</script>

<template>
  <div class="background">
    <div class="wrapper">
      <h2 class="title1">встречайте новый тип продукта</h2>
      <h1 class="title2">Bioplasma</h1>
      <h3 class="title3">это аналог смузи представляющий собой смесь с широким спектром компонентов из ягод, фруктов,
        зёрен и других ингредиентов</h3>
    </div>
    <div class="backgroundCover"></div>

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
  opacity: 0.3;
  z-index: -4;
}

.wrapper {
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5vh;
  color: #ffffff;
  z-index: 2;
  margin-top: 2vh;

}

.title1 {
  font-size: 27px;
  font-family: Calibri;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.03em;
  opacity: 0;
  animation: title1Animation 2s forwards;
  animation-delay: 0.5s;
}

@keyframes title1Animation {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0vh);
  }
}

.title2 {
  font-size: 65px;
  font-family: Arial;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 1vh;
  opacity: 0;
  animation: title2Animation 2s forwards;
  animation-delay: 1.2s;
}

@keyframes title2Animation {
  from {
    opacity: 0;
    transform: rotateX(180deg);
  }

  to {
    opacity: 1;
    transform: rotateX(0deg);
  }
}

.title3 {
  width: 518px;
  font-size: 27px;
  font-family: Calibri;
  font-weight: 400;
  font-style: normal;
  line-height: normal;
  line-height: 150%;
  text-align: center;
  opacity: 0;
  animation: title3Animation 1.9s forwards;
  animation-delay: 0.9s;
}

@keyframes title3Animation {
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0vh);
  }
}
</style>