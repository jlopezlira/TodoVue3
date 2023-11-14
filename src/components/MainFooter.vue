<template>
  <footer class="fixed bottom-2 p-4 w-full text-xs flex gap-4 justify-end">
    <RouterLink to="/" class="link">Home</RouterLink>
    <RouterLink to="/about" class="link">About</RouterLink>
    <a href="https://github.com/jlopezlira/TodoVue3" target="_blank" class="link">
      Open code on Github
    </a>
  </footer>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
</script>
