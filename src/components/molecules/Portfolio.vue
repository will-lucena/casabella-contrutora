<template>
  <SectionShell class="section">
    <div class="content">
      <h2>Outros de nossos empreendimentos</h2>
      <div>
        <img src="" alt="" />
        Sucesso de vendas, o Residencial Olho D'água 3, também é sucesso entre os nossos clientes
        compradores e moradores. Bem projetado, com acabamento de excelente qualidade e assistência
        técnica quase inexistente, se tornou referência em empreendimentos do mesmo seguimento.
      </div>
    </div>
    <BaseButton>Quero saber mais</BaseButton>
  </SectionShell>
</template>

<script setup>
import BaseButton from '../atoms/BaseButton.vue'
import SectionShell from '../molecules/SectionShell.vue'
</script>

<style lang="scss" scoped>
.section {
  background-color: #fcb10c;
}

.content {
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;
}
</style>
