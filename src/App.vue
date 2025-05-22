<template>
  <div class="wrapper">
    <header-view />
    <router-view />
    <mail-view />
    <footer-view />
  </div>

<div v-if="isVisible" @click="scrollToTop" class="back-to-top">
  <i class="fa-solid fa-arrow-up"></i>
</div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue'
import FooterView from '@/components/FooterView.vue'
import MailView from './components/MailView.vue'

export default {
  components: { HeaderView, FooterView, MailView },

  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  methods: {
    handleScroll() {
      this.isVisible = window.scrollY > 1000;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
}
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: sans-serif, Helvetica, Arial, ;
}

:root {
  --primary: #97865A;
  --secondary: #F9FAEA;
  --tertiary: #fcc765;
  --quarternary: #0C2A20;
  --quinary: #000000;
  --senary: #A7CC98;
  --septenary: #4B7F4F;
}

html,
body {
  background-color: var(--secondary);
  min-height: 100%;
  overflow-y: scroll;
  max-width: 100%;
  margin: 0 auto;
}

* {
  margin: 0;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.wrapper {
  max-width: 2000px;
  margin: 0 auto;
  width: 100%;
}

#app {
  /* font-family: sans-serif, Helvetica, Arial, ; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1 {
  font-family: serif;
  font-size: 88px;
}

h2 {
  font-family: serif;
  font-size: 48px;
  margin: 48px 0 48px 0;
}

p {
  font-family: sans-serif;
  font-size: 24px;
  line-height: 1.4;
  text-align: left;
}

.fa-arrow-up {
  position: fixed;
  z-index: 1000;
  bottom: 20px;
  right: 30px;
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: var(--secondary);
  background-color: orange;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: scale(0); */
  transition: bottom 200ms, transform 200ms;
}

.fa-arrow-up:hover {
  bottom: 35px;
}

/* #to-top.show {
  transform: scale(1);
} */
</style>

<!-- Rule of 8 is used for font-size and spacing. If that didn't work I scaled up or down, making sure to keep it close to that multiple of 8. -->
