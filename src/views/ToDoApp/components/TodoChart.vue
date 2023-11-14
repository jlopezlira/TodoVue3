<template>
  <section class="w-full flex items-center justify-center  h-[300px] mx-auto p-4 rounded bg-slate-500/10">
    <Doughnut :data="data" :options="options" />
  </section>
  </template>
  
  <script setup>
  import {computed } from 'vue'
  import { useTodo } from '@/stores/todo';
    import { storeToRefs } from 'pinia';  
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Doughnut } from 'vue-chartjs'
  ChartJS.register(ArcElement, Tooltip, Legend)

  const { todos } = storeToRefs(useTodo());

  const doneTodos = computed(() => todos.value.filter(todo => todo.done))
  const pendingTodos = computed(() => todos.value.filter(todo => !todo.done))

    const data = computed(() => (
      {
        labels: [`Done (${doneTodos.value.length})`, `Pending (${pendingTodos.value.length})`],
        datasets: [
          {
            data: [
              doneTodos.value.length, pendingTodos.value.length
            ],
            backgroundColor: ['#41B883', '#E46651'],
            hoverBackgroundColor: ['#3A8EE6', '#E46651'],
            borderWidth: 0,
          },
        ],
      }
    )
    )

    const options = {
      responsive: true,
      maintainAspectRatio: true,
    }
   </script>
  