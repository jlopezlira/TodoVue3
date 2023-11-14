<template>
    <ul>
        <li v-for="todo in store.todos" 
         :key="todo.id"
        >{{ todo.task }}
        <button @click="toggleTask(todo.id)">
            <CheckIcon class="icon " />
        </button>
    </li>
    </ul>
</template>

<script setup>
    import { useTodo } from '@/stores/todo';
    import { CheckIcon } from '@heroicons/vue/24/outline'
    const store = useTodo();

    const toggleTask = (id) => {
        store.toggle(id)
    }

</script>
