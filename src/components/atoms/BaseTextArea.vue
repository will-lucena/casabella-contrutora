<template>
  <textarea
    class="text_input"
    name=""
    id=""
    cols="30"
    rows="10"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script setup>
defineProps(['modelValue', 'placeholder'])
defineEmits(['update:modelValue'])
</script>

<style lang="scss" scoped>
.text_input {
  background: transparent;
  border: 1px solid var(--white);

  color: var(--white);
  outline: none;
  resize: none;
  overflow: auto;
  padding: 0.5rem 0.25rem;
}

.text_input::placeholder {
  color: var(--white);
  opacity: 0.8;
}

.text_input:focus {
  border: none;
  border-bottom: 1px solid var(--white);
  padding: 0;
  padding-bottom: 0.25rem;
}
</style>
