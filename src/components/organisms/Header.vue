<template>
  <header class="header">
    <Header />
    <NavMobile class="nav--mobile" />
    <NavDesktop class="nav--desktop" @navigateTo="onNavigate" />
  </header>
</template>

<script setup>
import Header from '../atoms/Header.vue'
import NavDesktop from '../molecules/NavDesktop.vue'
import NavMobile from '../molecules/NavMobile.vue'

const emit = defineEmits('navigateTo')

function onNavigate(section) {
  emit('navigateTo', section)
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #01874c;
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
