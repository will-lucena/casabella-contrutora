<template>
  <SectionShell class="section">
    <div class="content"></div>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../molecules/SectionShell.vue'
</script>

<style lang="scss" scoped>
.section {
  background-color: green;
  height: 95vh;
}

.content {
  width: 100%;
  height: 100%;
  max-width: 920px;
  margin: 0 auto;
}
</style>
