<template>
  <footer class="fixed bottom-2 p-4 w-full text-xs flex gap-4 justify-end">
    <RouterLink to="/" class="link">Home</RouterLink>
    <RouterLink to="/about" class="link">About</RouterLink>
  </footer>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
</script>
