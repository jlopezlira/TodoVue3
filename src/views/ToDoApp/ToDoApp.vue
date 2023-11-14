<template>
    <TodoChart v-if="todos > 0" />
    <EmptyState v-else/>
    <TodoForm />
    <TodoList v-if="todos > 0"/>
</template>

<script setup>
    import {computed} from 'vue';
    import { useTodo } from '@/stores/todo';
    import EmptyState from '@/components/EmptyState.vue';
    import TodoChart from './components/TodoChart.vue';
    import TodoForm from './components/TodoForm.vue';
    import TodoList from './components/TodoList.vue';
    
    const store = useTodo();
    const todos = computed(() => store.totalTodos);
</script>
