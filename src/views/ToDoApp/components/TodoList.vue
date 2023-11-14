<template>
    <section class="relative wrap overflow-hidden xl:w-8/12 mx-auto py-10 h-full">
        <div class="border-[0.5px] absolute border-neutral-300 h-full left-1/2" />
            <div class="mb-8 flex justify-between even:flex-row-reverse items-center w-full" v-for="todo in store.todos" :key="todo.id">
                <div class="order-1 w-5/12" />
                <div class="z-20 flex items-center order-1 bg-neutral-950 dark:bg-neutral-50 shadow-lg w-4 h-4 rounded-full" />
                <div class="order-1 bg-neutral-500/20 rounded-lg shadow-lg w-5/12 px-2 p-4">
                    <p class="my-2 leading-snug tracking-wide">
                        {{ todo.task }}
                    </p>
                    <button @click="toggleTask(todo.id)">
                        <CheckIcon class="icon " />
                    </button>
                </div>
            </div>
    </section>
</template>

<script setup>
    import { useTodo } from '@/stores/todo';
    import { CheckIcon } from '@heroicons/vue/24/outline'

    const store = useTodo();
    const toggleTask = (id) => {
        store.toggle(id)
    }
</script>
