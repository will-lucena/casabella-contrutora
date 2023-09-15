<template>
  <SectionShell>
    <iframe
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
      title="Tour virtual"
      src="https://www.silverioneto.com.br/casabella/index.htm"
      name="casabella"
      width="100%"
      height="100%"
      loading="lazy"
      frameborder="0"
      allowfullscreen="true"
      allow="fullscreen; accelerometer; gyroscope; magnetometer; vr; xr; xr-spatial-tracking; autoplay; camera; microphone"
    ></iframe>
  </SectionShell>
</template>

<script setup>
import SectionShell from '../molecules/SectionShell.vue'
</script>

<style lang="scss" scoped>
.section {
  height: 300px;
}

@media only screen and (min-width: 769px) {
  .section {
    height: 500px;
  }
}
</style>
