<template>
  <div class="container">
    <Home />
    <Tour id="tour" />
    <Portfolio id="portfolio" />
    <Contact id="contact" />
    <About />
  </div>
  <Header />
  <a
    href="https://api.whatsapp.com/send?phone=5584981592121"
    target="_blank"
    aria-label="ícone do whatsapp"
    class="whatsapp_cta"
  >
    <font-awesome-icon size="2xl" icon="fa-brands fa-whatsapp" class="whatsapp_cta__icon" />
  </a>
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

.whatsapp_cta {
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 99999;

  padding: 1rem;
  margin: 1rem;
  color: var(--white);
  background-color: var(--light-green);
  border-radius: 100%;
  text-align: center;
  box-shadow: 2px 2px 3px #222;
}
</style>
