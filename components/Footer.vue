<template>
  <div class="footer">
    <Frame />
  </div>
</template>


<script>
import Frame from "./footer/Frame.vue";

export default {
  name: "Footer",
  components: {
    Frame,
  },
}
</script>

<style scoped>
.footer {
  position: relative;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.footer::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: url('../static/images/triangulpatternbottom1200.png') center/cover no-repeat;
  opacity: 0.1;
  z-index: -1;
}

.footer::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(64, 47, 125, 0.79);
  z-index: 1;
}
</style>