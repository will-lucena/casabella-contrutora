<template>
  <SectionShell class="section">
    <div class="content">
      <section class="info__container">
        <section class="info__about_us">
          <div class="about_us__copy">
            <h2 class="heading">Quem somos</h2>
            <p class="text">
              Há mais de uma década no mercado de construção civil na Grande Natal e com um
              portfólio consistente de construções e empreendimentos de excelência, a Casabella é
              uma construtora comprometida com você. Projetamos futuros, prezando pela sua confiança
              e zelando pela nossa credibilidade, sempre com transparência e toda a assistência
              necessária.
            </p>
          </div>
        </section>

        <section class="info__mission">
          <div>
            <h2 class="heading">Nossa Missão</h2>
            <p class="text">
              Ciente da vontade e desejo de seus clientes, a Casabella Construtora proporciona a
              concretização dos sonhos, transformando ideias em realidade, sempre com seriedade e
              qualidade na execução de suas obras, para entregar, à cada família, a melhor moradia,
              conforto, lazer e segurança, fornecendo a estrutura completa para uma vida melhor.
              Conte sempre conosco!
            </p>
          </div>
          <section class="social_media__container">
            <a
              href="https://www.instagram.com/casabellaconstrucaobr/"
              target="_blank"
              aria-label="ícone do instagram"
            >
              <font-awesome-icon size="lg" icon="fa-brands fa-instagram" class="social_media" />
            </a>

            <a
              href="https://www.facebook.com/casabellaconstrucaobr"
              target="_blank"
              aria-label="ícone do facebook"
            >
              <font-awesome-icon size="lg" icon="fa-brands fa-facebook" class="social_media" />
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=5584981592121"
              target="_blank"
              aria-label="ícone do whatsapp"
            >
              <font-awesome-icon size="lg" icon="fa-brands fa-whatsapp" class="social_media" />
            </a>
          </section>
        </section>
      </section>

      <img class="people" src="@/assets/team.webp" alt="Time de engenharia" />

      <section class="product__container">
        <section class="product__info">
          <h2 class="heading">Nosso mais novo empreendimento</h2>
          <p class="text">
            O Residencial Coohabinal Village está localizado em uma das melhores localizações de
            Parnamirim, com área de lazer completa, proporcionando para você e sua família,
            segurança, tranquilidade e conforto em sua casa!
          </p>
          <BaseButton class="product__cta" @click="onClick">Agende uma visita</BaseButton>
        </section>
        <GMapMap
          :center="{ lat: -5.932024139418291, lng: -35.27390407208708 }"
          :zoom="18"
          map-type-id="terrain"
          style="min-height: 300px"
          class="map"
        >
          <GMapMarker :position="{ lat: -5.932024139418291, lng: -35.27390407208708 }" />
        </GMapMap>
      </section>
      <Carousel class="people" :slides="slides" />
    </div>
  </SectionShell>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '../atoms/BaseButton.vue'
import SectionShell from '../molecules/SectionShell.vue'

import coohabinalVillage1 from '@/assets/coohabinalVillage/image1.webp'
import coohabinalVillage2 from '@/assets/coohabinalVillage/image2.webp'
import coohabinalVillage3 from '@/assets/coohabinalVillage/image3.webp'
import coohabinalVillage4 from '@/assets/coohabinalVillage/image4.webp'
import Carousel from '../atoms/Carousel.vue'

const slides = ref([
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
])

function onClick() {
  const element = document.getElementById('contact')
  element.scrollIntoView()
}
</script>

<style lang="scss" scoped>
@import '@/assets/base.scss';
.section {
  background-color: #01874c;
  margin-top: 50px;
  height: 100%;
  padding-bottom: 2rem;
}

.content {
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__about_us {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__profiles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }

  &__mission {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}

.product {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  &__images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__image {
    width: 240px;
    height: 135px;
  }
}

.heading,
.text {
  color: white;
  text-align: center;
}

.heading {
  font-size: 1.25rem;
  font-weight: 600;
}

.text {
  font-size: 1rem;
  font-weight: 400;
}

.social_media {
  color: white;

  &__container {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    gap: 2rem;
    justify-content: center;
  }
}

.people {
  width: 100%;
}
.map {
  width: 100%;
  flex: 1;
}

@media only screen and (min-width: $screen-size-md) {
  .info {
    &__container {
      display: flex;
      flex-direction: row;
    }

    &__about_us {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
  }

  .about_us__copy {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .product {
    &__container {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    &__info,
    &__images {
      flex: 1;
      gap: 1rem;
    }

    &__cta {
      align-self: center;
    }
  }

  .heading,
  .text {
    text-align: left;
  }
}
</style>
