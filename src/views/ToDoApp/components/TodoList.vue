<template>
  <section class="relative wrap overflow-hidden xl:w-8/12 mx-auto py-10 h-full">
    <div class="border-[0.5px] absolute border-neutral-300 h-full left-1/2" />
    <TodoItem
      v-for="todo in store.todos"
      :key="todo.id"
      :id="todo.id"
      :task="todo.task"
      :createdAt="todo.createdAt"
      :done="todo.done"
    />
  </section>
</template>

<script setup>
  import TodoItem from './TodoItem.vue'
  import { useTodo } from '@/stores/todo'

  const store = useTodo()
</script>
