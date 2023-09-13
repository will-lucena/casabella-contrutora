<template>
  <div>
    <font-awesome-icon
      v-if="!expanded"
      icon="fa-solid fa-bars"
      @click="toggle"
      class="menu_toggle"
      size="xl"
    />
    <div v-else>
      <div class="bottom_sheet__background"></div>
      <div class="bottom_sheet">
        <font-awesome-icon
          v-if="expanded"
          icon="fa-solid fa-xmark"
          @click="toggle"
          class="close_bottom_sheet"
          size="2xl"
        />
        <h3 @click="toggle" class="menu_item">
          <a class="menu_item" href="#tour">Tour virtual</a>
        </h3>
        <h3 @click="toggle" class="menu_item">
          <a class="menu_item" href="#portfolio">Portfolio</a>
        </h3>
        <h3 @click="toggle" class="menu_item"><a class="menu_item" href="#contact">Contato</a></h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref(false)

function toggle() {
  expanded.value = !expanded.value
}
</script>

<style lang="scss" scoped>
.bottom_sheet {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;

  &__background {
    background-color: black;
    opacity: 0.95;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
}

.menu_item,
.close_bottom_sheet,
.menu_toggle {
  color: white;
  align-self: flex-end;
}

.menu_toggle {
  padding: 0 1rem;
}
</style>
