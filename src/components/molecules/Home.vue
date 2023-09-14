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

          <section class="info__profiles">
            <Profile v-for="(profile, index) in profiles" :key="index" :profile="profile" />
          </section>
        </section>

        <section class="info__mission">
          <div>
            <h2 class="heading">Nossa Missão</h2>
            <p class="text">
              Ciente da vontade e desejo de seus clientes, a Casabella Construtora proporciona a
              concretização dos sonhos, transformando ideias em realidade, sempre com seriedade e
              qualidade na execução de suas obras, para entregar, à cada família, a melhor moradia,
              conforto, lazer e segurança, fornecendo a estrutura completa para uma vida melhor.
              Conte sempre consoco!
            </p>
          </div>
          <section class="social_media__container">
            <a v-if="!expanded" href="">
              <font-awesome-icon size="lg" icon="fa-brands fa-instagram" class="social_media" />
            </a>

            <a v-if="!expanded" href="">
              <font-awesome-icon
                size="lg"
                v-if="!expanded"
                icon="fa-brands fa-facebook"
                class="social_media"
              />
            </a>

            <a v-if="!expanded" href="">
              <font-awesome-icon
                size="lg"
                v-if="!expanded"
                icon="fa-brands fa-whatsapp"
                class="social_media"
              />
            </a>
          </section>
        </section>
      </section>

      <section class="product__container">
        <section class="product__info">
          <h2 class="heading">Nosso mais novo empreendimento</h2>
          <p class="text">
            O Residencial Coohabinal Village está localizado em uma das melhores localizações de
            Parnamirim, com área de lazer completa, proporcionando para você e sua família,
            segurança, tranquilidade e conforto em sua casa!
          </p>
          <BaseButton>Agende uma visita</BaseButton>
        </section>

        <div class="product__images">
          <img
            class="product__image"
            v-for="({ source, alt }, index) in images"
            :key="index"
            :src="source"
            :alt="alt"
          />
        </div>
      </section>
    </div>
  </SectionShell>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '../atoms/BaseButton.vue'
import Profile from '../atoms/Profile.vue'
import SectionShell from '../molecules/SectionShell.vue'

import fachada1 from '@/assets/coohabinalVillage/fachada1.png'
import quarto from '@/assets/coohabinalVillage/quarto.png'

import fachada3 from '@/assets/coohabinalVillage/fachada3.png'
import sala from '@/assets/coohabinalVillage/sala.png'

const profiles = ref([
  {
    name: 'Joao da silva',
    imageSource: fachada3
  },
  {
    name: 'Joao da cunha',
    imageSource: fachada1
  },
  {
    name: 'Joao da costa',
    imageSource: quarto
  },
  {
    name: 'Joao da selva',
    imageSource: sala
  }
])
const images = ref([
  { alt: 'fachada1', source: fachada1 }
  // { alt: 'fachada3', source: fachada3 },
  // { alt: 'quarto', source: quarto },
  // { alt: 'sala', source: sala }
])
</script>

<style lang="scss" scoped>
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

@media only screen and (min-width: 769px) {
  .info {
    &__container {
      display: flex;
      flex-direction: column;
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
    }
  }

  .heading,
  .text {
    text-align: left;
  }
}
</style>
