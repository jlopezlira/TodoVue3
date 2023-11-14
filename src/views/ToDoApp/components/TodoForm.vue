<template>
    <form class="flex my-4 gap-2" @submit.prevent="addTask()">
        <input
            type="text"
            v-model="task"
            placeholder="Add a new task"
            class="transition-all ease-in delay-75 w-full p-2 rounded border-0 focus:outline-none focus:ring-2 bg-neutral-50 text-neutral-900 focus:ring-green-500 focus:border-transparent"
        />
        <button
            :disabled="!isValid"
            class="transition-all ease-in delay-75 bg-green-500 px-4 py-2 rounded hover:bg-green-700 text-neutral-950 disabled:bg-neutral-600 disabled:cursor-not-allowed"
        >
            Add
        </button>
    </form>
</template>

<script setup>
    import { useTodo } from '@/stores/todo';
    import { ref, computed } from 'vue'
    import { toast } from 'vue3-toastify';

    const store = useTodo();
    const task = ref('')
    const isValid = computed(() => task.value.trim().length > 3)

    const addTask = () => {
        const formattedTask = task.value.trim()
        if (formattedTask.length < 3) {
            return
        }
        store.add(formattedTask)
        toast.success('Task added!')
    }
</script>
