<template>
  <SectionShell class="section">
    <div class="content">
      <h2 class="heading">Outros de nossos empreendimentos</h2>
      <div class="product__container">
        <div class="product" v-for="({ copy, imageSource, alt }, index) in products" :key="index">
          <img class="image" :src="imageSource" :alt="alt" />
          <p class="text">
            {{ copy }}
          </p>
        </div>
      </div>
      <BaseButton full-width @click="onClick">Quero saber mais</BaseButton>
    </div>
  </SectionShell>
</template>

<script setup>
import fachada1 from '@/assets/coohabinalVillage/fachada1.png'
import { ref } from 'vue'
import BaseButton from '../atoms/BaseButton.vue'
import SectionShell from '../molecules/SectionShell.vue'

const products = ref([
  {
    alt: 'fachada1',
    imageSource: fachada1,
    copy: `Sucesso de vendas, o Residencial Olho D'água 3, também é sucesso entre os nossos clientes compradores e moradores. Bem projetado, com acabamento de excelente qualidade e assistência técnica quase inexistente, se tornou referência em empreendimentos do mesmo seguimento.`
  },
  {
    alt: 'fachada1',
    imageSource: fachada1,
    copy: `Sucesso de vendas, o Residencial Olho D'água 3, também é sucesso entre os nossos clientes compradores e moradores. Bem projetado, com acabamento de excelente qualidade e assistência técnica quase inexistente, se tornou referência em empreendimentos do mesmo seguimento.`
  },
  {
    alt: 'fachada1',
    imageSource: fachada1,
    copy: `Sucesso de vendas, o Residencial Olho D'água 3, também é sucesso entre os nossos clientes compradores e moradores. Bem projetado, com acabamento de excelente qualidade e assistência técnica quase inexistente, se tornou referência em empreendimentos do mesmo seguimento.`
  }
  // { alt: 'fachada3', source: fachada3 },
  // { alt: 'quarto', source: quarto },
  // { alt: 'sala', source: sala }
])

function onClick() {
  const element = document.getElementById('contact')
  element.scrollIntoView()
}
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  &__container {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.heading {
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
}

.text {
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
}

.image {
  width: 240px;
  height: 135px;
}

@media only screen and (min-width: 769px) {
  .image {
    width: 160px;
    height: 90px;
  }

  .text {
    text-align: start;
  }

  .product__container {
    flex-wrap: nowrap;
  }
}

@media only screen and (min-width: 1200px) {
  .image {
    width: 320px;
    height: 180px;
  }

  .text {
    text-align: start;
  }
}
</style>
