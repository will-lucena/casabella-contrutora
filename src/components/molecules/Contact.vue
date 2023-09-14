<template>
  <SectionShell class="section">
    <div class="content">
      <h2>Entre em contato</h2>
      <input type="text" name="" id="" placeholder="Nome" />
      <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
    </div>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../molecules/SectionShell.vue'
</script>

<style lang="scss" scoped>
.section {
  background-color: #01874c;
}

.content {
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
