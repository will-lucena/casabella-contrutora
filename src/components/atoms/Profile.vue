<template>
  <div class="profile__container">
    <img :src="profile.imageSource" :alt="profile.name" class="profile__image" />
    <h4 class="profile__name">{{ profile.name }}</h4>
  </div>
</template>

<script setup>
defineProps(['profile'])
</script>

<style lang="scss" scoped>
.profile {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  &__image {
    width: 50px;
    height: 50px;

    border-radius: 50%;
  }

  &__name {
    font-size: 0.75rem;
    font-weight: 100;
    color: white;
  }
}
</style>
