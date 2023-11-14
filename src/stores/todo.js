import { defineStore } from 'pinia'

export const useTodo = defineStore('todo', {
  state: () => ({
    todos: [
      { id: 1, task: 'Buy milk', done: false },
      { id: 2, task: 'Buy eggs', done: true },
      { id: 3, task: 'Buy bread', done: true }
    ]
  }),
  getters: {
    doneTodos: (state) => state.todos.filter((todo) => todo.done),
    pendingTodos: (state) => state.todos.filter((todo) => !todo.done)
  },
  actions: {
    add(task) {
      this.todos.push({
        id: this.todos.length + 1,
        task,
        done: false
      })
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
