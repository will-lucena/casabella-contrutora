<template>
  <header class="header__container">
    <img class="logo" src="@/assets/logo.png" alt="Casabella Construtora logo" />
    <h1><a class="title" href="#">Casabella Construtora</a></h1>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}
.logo {
  width: 50px;
  height: 50px;
}

.title {
  color: white;
  font-size: 1rem;
  font-weight: 600;
}

@media only screen and (min-width: 769px) {
  .title {
    font-size: 1.5rem;
  }
}
</style>
