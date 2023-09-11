<template>
  <div class="container">
    <LandingPage />
  </div>
</template>

<script setup>
import LandingPage from '../components/organisms/LandingPage.vue'
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  background-color: azure;
}
</style>
