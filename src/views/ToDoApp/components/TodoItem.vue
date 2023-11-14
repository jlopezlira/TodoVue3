<template>
  <div class="mb-8 flex justify-between even:flex-row-reverse items-center w-full">
    <div class="order-1 w-5/12" />
    <div
      class="z-20 flex items-center order-1 bg-neutral-950 dark:bg-neutral-50 shadow-lg w-4 h-4 rounded-full"
    />
    <div class="order-1 bg-white dark:bg-neutral-500/20 rounded-lg shadow-lg w-5/12 p-4">
      <div class="my-2 leading-snug tracking-wide">
        <section class="flex items-center justify-between">
          <p :class="computedStatusClass">
            {{ props.task }}
          </p>
          <section class="flex gap-1 items-center">
            <button>
              <input
                type="checkbox"
                @change="handleDone()"
                :checked="props.done"
                class="appearance-none w-9 focus:outline-none checked:bg-green-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-green-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5"
              />
            </button>
            <button
              @click="handleDelete()"
              class="transition-all ease-in delay-75 p-2 rounded-full hover:bg-red-500 flex items-center"
            >
              <TrashIcon class="w-4 h-4" />
            </button>
          </section>
        </section>
        <p class="flex gap-1 items-center text-xs font-mono mt-2">
          <ClockIcon class="w-4 text-green-500" />{{ timeAgoComputed }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, computed } from 'vue'
  import { timeAgo } from '@/lib/utils'
  import { ClockIcon, TrashIcon } from '@heroicons/vue/24/outline'
  import { useTodo } from '@/stores/todo'

  const store = useTodo()
  const props = defineProps({
    id: String,
    task: String,
    createdAt: Number,
    done: Boolean
  })
  const timeAgoComputed = computed(() => timeAgo(props.createdAt))
  const computedStatusClass = computed(() => {
    return props.done
      ? 'line-through text-neutral-500 dark:text-neutral-400'
      : 'text-neutral-900 dark:text-neutral-50'
  })

  const handleDelete = () => {
    store.remove(props.id)
  }

  const handleDone = () => {
    store.toggle(props.id)
  }
</script>
