<template>
  <div class="cart-wrapper">
    <img class="cart" src="../../static/images/cart.png" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'Cart',
}
</script>

<style scoped>
@keyframes pulsate-in {
  0% {
    transform: scale(0);
  }

  40% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes pulsate-out {
  0% {
    transform: scale(1);
  }

  40% {
    transform: scale(2);
  }

  100% {
    transform: scale(0);
  }
}

.cart-wrapper {
  padding: 20px 40px;
  margin: -20px -40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.cart-wrapper::before {
  content: "";
  position: absolute;
  width: 0px;
  height: 0px;
  transition: all 0.6s;
  z-index: -1;
  border-radius: 50%;
  animation: pulsate-out 0.5s forwards;
}

.cart {
  width: 26px;
}

.cart-wrapper:hover::before {
  width: 60px;
  height: 60px;
  background-color: #1236ff;
  animation: pulsate-in 0.5s forwards;
}
</style>