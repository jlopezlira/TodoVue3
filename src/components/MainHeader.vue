<template>
  <header class="flex w-full items-center justify-between p-4 shadow">
    <RouterLink to="/" class="flex gap-2 items-center">
      <RectangleStackIcon class="w-8 text-green-500" />
      <h1 class="antialiased text-2xl font-bold">
        Todo<span class="text-green-500 font-mono">Vue</span>3
      </h1>
    </RouterLink>
    <button
      @click="toggleDark()"
      class="transition-all ease-in delay-75 p-2 rounded-full hover:bg-green-500 hover:text-neutral-950"
    >
      <SunIcon v-if="!isDark" class="icon" />
      <MoonIcon v-else class="icon" />
    </button>
  </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
    import { RectangleStackIcon, SunIcon, MoonIcon } from '@heroicons/vue/24/outline'
    import { useDark, useToggle } from '@vueuse/core'
    const isDark = useDark()
    const toggleDark = useToggle(isDark)
</script>
