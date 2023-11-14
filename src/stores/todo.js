import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export const useTodo = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  persist: {
    enabled: true,
    strategies: [
      {
        storage: window.localStorage
      }
    ]
  },
  getters: {
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
    pendingTodos: (state) => state.todos.filter((todo) => !todo.done),
    totalTodos: (state) => state.todos.length
  },
  actions: {
    add(task) {
      const newTodos = [
        {
          id: uuidv4(),
          task,
          done: false,
          createdAt: Date.now()
        },
        ...this.todos
      ]
      this.todos = newTodos
    },
    remove(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    toggle(id) {
      this.todos = this.todos.map((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
        return todo
      })
    }
  }
})
