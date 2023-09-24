<template>
  <header class="header__container">
    <img class="logo" src="@/assets/logoBranca.png" alt="Casabella Construtora logo" />
    <h1><a class="title" href="#">Casabella Construtora</a></h1>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/base.scss';
.header__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  padding-left: 1rem;
}
.logo {
  width: 50px;
}

.title {
  color: var(--white);
  font-size: 1rem;
  font-weight: 600;
}

@media only screen and (min-width: $screen-size-md) {
  .title {
    font-size: 1.5rem;
  }

  .logo {
    width: 80px;
    height: 50px;
    object-fit: contain;
  }
}
</style>
