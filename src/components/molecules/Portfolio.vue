<template>
  <SectionShell class="section">
    <div class="content">
      <h2 class="heading">Conheça nossos projetos</h2>
      <div class="product__container">
        <div class="product" v-for="({ copy, slides }, index) in products" :key="index">
          <Carousel :slides="slides" />
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
import coohabinalVillage1 from '@/assets/coohabinalVillage/image1.webp'
import coohabinalVillage2 from '@/assets/coohabinalVillage/image2.webp'
import coohabinalVillage3 from '@/assets/coohabinalVillage/image3.webp'
import coohabinalVillage4 from '@/assets/coohabinalVillage/image4.webp'
import olhoDagua1 from '@/assets/olhoDagua1/image1.webp'
import olhoDagua31 from '@/assets/olhoDagua3/image1.webp'
import olhoDagua32 from '@/assets/olhoDagua3/image2.webp'
import olhoDagua33 from '@/assets/olhoDagua3/image3.webp'
import olhoDagua34 from '@/assets/olhoDagua3/image4.webp'
import { ref } from 'vue'
import BaseButton from '../atoms/BaseButton.vue'
import Carousel from '../atoms/Carousel.vue'
import SectionShell from '../molecules/SectionShell.vue'

const products = ref([
  {
    slides: [
      {
        alt: `visão geral olho d'agua 1`,
        source: olhoDagua1
      }
    ],
    copy: `Nosso primeiro empreendimento vertical, projetado para levar conforto, segurança e qualidade aos nossos clientes/moradores, o Olho D'água 1 foi fundamental no crescimento da Casabella como construtora, nos trazendo a expertise para o lançamento seguinte, o Olho D'água 3.`
  },
  {
    slides: [
      {
        alt: `visão geral olho d'agua 3`,
        source: olhoDagua31
      },
      {
        alt: `bloco e piscina olho d'agua 3`,
        source: olhoDagua32
      },
      {
        alt: `fachada noite olho d'agua 3`,
        source: olhoDagua33
      },
      {
        alt: `fachada dia olho d'agua 3`,
        source: olhoDagua34
      }
    ],
    copy: `Sucesso de vendas, o Residencial Olho D'água 3, também é sucesso entre os nossos clientes compradores e moradores. Bem projetado, com acabamento de excelente qualidade e assistência técnica quase inexistente, se tornou referência em empreendimentos do mesmo seguimento.`
  },
  {
    slides: [
      {
        alt: `fachada coohabinal village`,
        source: coohabinalVillage1
      },
      {
        alt: `fachada inclinada coohabinal village`,
        source: coohabinalVillage2
      },
      {
        alt: `sala coohabinal village`,
        source: coohabinalVillage3
      },
      {
        alt: `quarto coohabinal village`,
        source: coohabinalVillage4
      }
    ],
    copy: `O Residencial Coohabinal Village está localizado em uma das melhores localizações de Parnamirim, com área de lazer completa, proporcionando para você e sua família, segurança, tranquilidade e conforto em sua casa!`
  }
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
  flex: 1;

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
  width: 100%;
}

@media only screen and (min-width: 769px) {
  .text {
    text-align: start;
  }

  .product__container {
    flex-wrap: nowrap;
  }
}

@media only screen and (min-width: 1200px) {
  .text {
    text-align: start;
  }
}
</style>
