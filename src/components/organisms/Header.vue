<template>
  <header class="header">
    <Header />
    <NavMobile class="nav--mobile" />
    <NavDesktop class="nav--desktop" />
  </header>
</template>

<script setup>
import Header from '../atoms/Header.vue'
import NavDesktop from '../molecules/NavDesktop.vue'
import NavMobile from '../molecules/NavMobile.vue'
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
}

.nav {
  &--desktop {
    display: none;
  }

  &--mobile {
    display: flex;
  }
}

@media only screen and (min-width: 600px) {
  .nav {
    &--desktop {
      display: flex;
    }

    &--mobile {
      display: none;
    }
  }
}
</style>
