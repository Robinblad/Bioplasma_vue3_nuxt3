<template>
  <div class="content">
    <h5 class="info info1">berrycore.bioplasma@gmail.com</h5>
    <h5 class="info info2">Berrycore ®</h5>
    <h5 class="info info3">Made by Konstantin Skvortsov</h5>
  </div>
</template>

<script>
export default {
  name: 'Content',
}
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  gap: 8vw;
  align-items: center;
}

.info {
  color: #000;
  font-family: Arial;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  z-index: 3;
}

.info1 {
  font-size: 17px;
}

.info2 {
  font-size: 19px;
}

.info3 {
  font-size: 15px;
  font-style: italic;
}
</style>