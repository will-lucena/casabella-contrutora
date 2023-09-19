<template>
  <SectionShell class="section">
    <div class="content">
      <div>
        <p class="text">CONSTRUTORA CASABELLA</p>
        <p class="text">CNPJ 11.291.349/0001-46</p>
        <p class="text">Rua de Manoel Ovídio, nº 1381, Barro vermelho, Natal-RN</p>
        <p class="text">84 3033-1629</p>
      </div>
      <h3 class="copyright">Desenvolvido por Will Lucena</h3>
    </div>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../molecules/SectionShell.vue'
</script>

<style lang="scss" scoped>
.section {
  background-color: #00361e;
  height: 100%;
  padding-bottom: 0;
}

.content {
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
}

.text {
  font-size: 1rem;
  color: white;
  font-weight: 400;
}

.copyright {
  font-size: 0.75rem;
  color: white;
  font-weight: 100;
  text-align: center;

  margin: 1rem 0;
}
</style>
