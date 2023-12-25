<template>
  <div class="lines">
    <div class="upperline">
      <div class="upperlineEffect"></div>
    </div>
    <Content />
    <div class="lowerline">
      <div class="lowerlineEffect"></div>
    </div>
  </div>
</template>

<script>
import Content from './Content.vue';
export default {
  name: "Frame",
  components: {
    Content,
  },
}
</script>

<style scoped>
.lines {
  width: 100%;
  height: 53px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.upperline {
  width: 950px;
  height: 1px;
  margin: 0 auto;
  position: relative;
  background: radial-gradient(50% 50% at 50% 50%, #000 0%, rgba(84, 84, 84, 0.00) 65.1%);
  z-index: 3;
}

.lowerline {
  width: 550px;
  height: 1px;
  margin: 0 auto;
  position: relative;
  background: radial-gradient(50% 50% at 50% 50%, #000 0%, rgba(84, 84, 84, 0.00) 65.1%);
  z-index: 3;
}

.upperlineEffect {
  width: 350px;
  height: 1px;
  left: 0;
  position: absolute;
  background: radial-gradient(50% 50% at 50% 50%, #FFF 0%, rgba(255, 255, 255, 0.00) 67.71%);
  animation: upperlinemove 4s ease infinite;
}

@keyframes upperlinemove {
  from {
    left: 100px;
    opacity: 0;
  }

  40% {
    opacity: 1;
    height: 2px;
  }

  to {
    left: 500px;
    opacity: 0;
  }
}

.lowerlineEffect {
  width: 300px;
  height: 1px;
  left: 0;
  position: absolute;
  background: radial-gradient(50% 50% at 50% 50%, #FFF 0%, rgba(255, 255, 255, 0.00) 67.71%);
  animation: lowerlinemove 5s ease infinite;
}

@keyframes lowerlinemove {
  from {
    left: 0;
    opacity: 0;

  }

  50% {
    opacity: 1;
    height: 2px;
  }

  to {
    left: 300px;
    opacity: 0;

  }
}
</style>