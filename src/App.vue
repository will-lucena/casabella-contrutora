<template>
  <Index />
</template>

<script setup>
import Index from './views/Index.vue'
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: calc(15px + 0.390625vw);
}

p,
span,
h1,
h2,
h3,
h4,
h5,
h6,
a {
  font-family: 'Montserrat', sans-serif;
}

a {
  width: fit-content;
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}
</style>
