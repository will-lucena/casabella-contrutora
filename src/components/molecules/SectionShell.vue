<template>
  <section class="section">
    <slot></slot>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.section {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  margin: 0 auto;
  padding: 0 1rem;
}
</style>
