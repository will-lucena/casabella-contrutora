<template>
  <SectionShell class="section">
    <div class="content">
      <form class="form">
        <h2>Entre em contato</h2>
        <input type="text" name="" id="" placeholder="Nome" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></textarea>
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
import SectionShell from '../molecules/SectionShell.vue'

const lat = -5.804091581760512
const lng = -35.20631708465691
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

.map {
  width: 100%;
}

@media only screen and (min-width: 769px) {
  .content {
    flex-direction: row;
  }
}
</style>
