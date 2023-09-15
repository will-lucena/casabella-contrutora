<template>
  <SectionShell class="section">
    <div class="content">
      <form class="form" @submit.prevent="onSubmit">
        <h2 class="heading">Entre em contato</h2>
        <BaseInput placeholder="Nome" v-model="name" />
        <BaseTextArea placeholder="Mensagem" v-model="message" />
        <BaseButton full-width>Enviar mensagem</BaseButton>
      </form>
      <GMapMap
        :center="{ lat, lng }"
        :zoom="20"
        map-type-id="terrain"
        style="min-height: 300px"
        class="map"
      >
        <GMapMarker :key="index" :position="{ lat, lng }" />
      </GMapMap>
    </div>
  </SectionShell>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from '../atoms/BaseButton.vue'
import BaseInput from '../atoms/BaseInput.vue'
import BaseTextArea from '../atoms/BaseTextArea.vue'
import SectionShell from '../molecules/SectionShell.vue'

const lat = -5.804091581760512
const lng = -35.20631708465691

const name = ref('')
const message = ref('')

function onSubmit() {
  if (!name.value || !message.value) {
    return
  }

  const phone = '+5584981592121'
  const url = `https://api.whatsapp.com/send?text=${message.value}&phone=${phone}`

  window.open(url)
}
</script>

<style lang="scss" scoped>
.section {
  background-color: #01874c;
}

.form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.content {
  width: 100%;
  height: 100%;
  max-width: 1140px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2rem;
}

.heading {
  font-size: 1.75rem;
  color: white;
  font-weight: 700;
}

.map {
  width: 100%;
}

@media only screen and (min-width: 769px) {
  .content {
    flex-direction: row;
  }
}
</style>
