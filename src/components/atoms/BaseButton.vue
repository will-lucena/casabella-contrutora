<template>
  <button
    class="button"
    :class="{ 'button--full_width': fullWidth, 'button--icon_button': iconButton }"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  fullWidth: {
    type: Boolean,
    default: false
  },
  iconButton: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.button {
  background-color: transparent;
  border: 1px solid var(--white);
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  cursor: pointer;
  color: var(--white);
  font-weight: 600;

  transition: all 0.3s ease-in-out;

  &--full_width {
    width: 100%;
  }

  &:hover {
    background-color: var(--white);
    color: var(--black);
  }

  &--icon_button {
    border: none;
  }
}
</style>
