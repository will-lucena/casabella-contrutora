<template>
  <SectionShell class="section">
    <div class="content">
      <section class="info__container">
        <section class="info__about_us">
          <div>
            <h2>Quem somos</h2>
            <p>
              Há mais de uma década no mercado de construção civil na Grande Natal e com um
              portfólio consistente de construções e empreendimentos de excelência, a Casabella é
              uma construtora comprometida com você. Projetamos futuros, prezando pela sua confiança
              e zelando pela nossa credibilidade, sempre com transparência e toda a assistência
              necessária.
            </p>
          </div>

          <div>
            <h2>Nossa Missão</h2>
            <p>
              Ciente da vontade e desejo de seus clientes, a Casabella Construtora proporciona a
              concretização dos sonhos, transformando ideias em realidade, sempre com seriedade e
              qualidade na execução de suas obras, para entregar, à cada família, a melhor moradia,
              conforto, lazer e segurança, fornecendo a estrutura completa para uma vida melhor.
              Conte sempre consoco!
            </p>
          </div>
          <section>
            <font-awesome-icon v-if="!expanded" icon="fa-brands fa-instagram" class="menu_toggle" />

            <font-awesome-icon v-if="!expanded" icon="fa-brands fa-facebook" class="menu_toggle" />

            <font-awesome-icon v-if="!expanded" icon="fa-brands fa-whatsapp" class="menu_toggle" />
          </section>
        </section>

        <section class="info_profiles">
          <Profile v-for="(index, profile) in profiles" :key="index" :profile="profile" />
        </section>
      </section>

      <section class="product__container">
        <section class="product__info">
          <h2>Nosso mais novo empreendimento</h2>
          <p>askdjahskdjahskdjbaskdqgkwdhas</p>
          <BaseButton />
        </section>

        <div class="product__images">
          <img v-for="(index, imageSource) in images" :key="index" :src="imageSource" />
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

const profiles = ref([])
const images = ref([])
</script>

<style lang="scss" scoped>
h2,
p {
  color: white;
}
.section {
  background-color: #01874c;
  height: 95vh;
  margin-top: 50px;
}

.content {
  width: 100%;
  height: 100%;
  max-width: 920px;
  margin: 0 auto;
}

.info {
  &__container {
    display: flex;
    flex-direction: column;
  }

  &__about_us {
    display: flex;
    flex-direction: column;
  }

  &__profiles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.product {
  &__container {
    display: flex;
    flex-direction: column;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
}

@media only screen and (min-width: 600px) {
  .info {
    &__container {
      display: flex;
      flex-direction: row;
    }
  }

  .product {
    &__container {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
