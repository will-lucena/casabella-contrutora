<template>
  <div class="container">
    <Home />
    <Tour />
    <Portfolio />
    <Contact />
    <About />
  </div>
  <Header />
</template>

<script setup>
import About from '../molecules/About.vue'
import Contact from '../molecules/Contact.vue'
import Home from '../molecules/Home.vue'
import Portfolio from '../molecules/Portfolio.vue'
import Tour from '../molecules/Tour.vue'
import Header from './Header.vue'
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
