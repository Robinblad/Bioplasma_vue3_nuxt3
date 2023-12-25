<script>
import { HeaderButtonStyles } from "./header/Button.ts";
import Logo from "./header/Logo.vue";
import Cart from "./header/Cart.vue";

export default {
  name: "Header",
  components: {
    Logo,
    Cart,
  },
  data() {
    return {
      HeaderButtonStyles,
      isScrollable: false
    };
  },
  mounted() {
    this.checkScroll();
    window.addEventListener('resize', this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScroll);
  },
  methods: {
    checkScroll() {
      this.isScrollable = document.documentElement.scrollHeight > window.innerHeight;
    },
  },
};


</script>

<template>
  <div class="header">
    <div :class="{ 'wrapper2': !isScrollable, 'wrapper': isScrollable }">
      <Logo class="logo" />
      <div class="buttons">
        <NuxtLink to="/" :class="HeaderButtonStyles">Главная</NuxtLink>
        <NuxtLink to="/production" :class="HeaderButtonStyles">Продукция</NuxtLink>
        <NuxtLink to="/about" :class="HeaderButtonStyles">Компания</NuxtLink>
      </div>
      <NuxtLink to="/cart" class="cart-link">
        <Cart />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.header {
  width: 100%;
  height: 91px;
  background-color: rgba(84, 104, 138, 0.81);

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 91px;
    background: url('../static/images/triangulpatternheader1200.png') center/cover no-repeat;
    opacity: 0.15;
    z-index: -1;
  }
}

.wrapper {
  height: 91px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  width: 95vw;
}

.wrapper2 {
  height: 91px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
}

.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 5 / 8;
  gap: 11vw;
}

.cart-link {
  grid-column: 10 / 11;
  align-self: center;
  margin-left: 7vw;
}
</style>





