import { ref, watch } from 'vue'

export function usePersist<T>(key: string, initial: T) {
  const state = ref<T>(load())
  function load(): T {
    try {
      const raw = localStorage.getItem(key)
      return raw ? JSON.parse(raw) as T : initial
    } catch { return initial }
  }
  watch(state, v => localStorage.setItem(key, JSON.stringify(v)), { deep: true })
  return state
}
