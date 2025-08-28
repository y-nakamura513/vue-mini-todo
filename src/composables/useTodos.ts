import { computed } from 'vue'
import { usePersist } from './usePersist'

export type Todo = { id: number; text: string; done: boolean }

export function useTodos(storageKey = 'todos') {
  const todos = usePersist<Todo[]>(storageKey, [])
  const remaining = computed(() => todos.value.filter(t => !t.done).length)

  function add(text: string) {
    const title = text.trim()
    if (!title) return
    todos.value.push({ id: Date.now(), text: title, done: false })
  }
  function toggle(id: number) {
    const t = todos.value.find(x => x.id === id)
    if (t) t.done = !t.done
  }
  function remove(id: number) {
    todos.value = todos.value.filter(x => x.id !== id)
  }

  return { todos, remaining, add, toggle, remove }
}
