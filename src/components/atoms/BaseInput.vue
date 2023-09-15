<template>
  <input
    class="text_input"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps(['modelValue', 'placeholder'])
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.text_input {
  background: transparent;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  padding-bottom: 0.25rem;
}

.text_input::placeholder {
  color: white;
  opacity: 0.8;
}

.text_input:focus {
  outline: none;
  border: 1px solid white;
  padding: 0.5rem 0.25rem;
}
</style>
