<template>
  <div class="app-wrapper">
    <div>
      <img
        alt="Gabriel Santos logo"
        class="logo"
        src="./assets/logo_gs_preta.png"
        width="125"
        height="125"
      />
    </div>

    <div class="wrapper">
      <TodoList />
    </div>
    <FooterLayout />
  </div>
</template>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  display: block;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<script setup lang="ts">
import TodoList from './components/TodoList.vue'
import FooterLayout from './layouts/FooterLayout.vue'
</script>
