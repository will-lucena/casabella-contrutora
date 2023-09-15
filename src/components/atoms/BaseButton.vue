<template>
  <button class="button" :class="{ 'button--full_width': fullWidth }">
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  fullWidth: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.button {
  background-color: transparent;
  border: 1px solid white;
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  cursor: pointer;
  color: white;

  transition: all 0.3s ease-in-out;

  &--full_width {
    width: 100%;
  }

  &:hover {
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
}
</style>
