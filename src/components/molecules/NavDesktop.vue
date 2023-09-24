<template>
  <nav>
    <ul class="items">
      <li>
        <a href="#tour" class="menu_item">Tour virtual</a>
      </li>
      <li>
        <a href="#portfolio" class="menu_item">Portfolio</a>
      </li>
      <li>
        <a href="#contact" class="menu_item">Contato</a>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.items {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 2rem;

  padding: 0 2rem;
}

.menu_item {
  font-size: 1rem;
  font-weight: 400;
  color: var(--white);
}
</style>
