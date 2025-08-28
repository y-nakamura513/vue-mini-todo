<script setup>
import { ref, computed, watch } from 'vue'
import TodoForm from './TodoForm.vue'
import TodoItem from './TodoItem.vue'

const text = ref('')
const todos = ref(JSON.parse(localStorage.getItem('todos') || '[]'))

const remaining = computed(() => todos.value.filter(t => !t.done).length)
watch(todos, v => localStorage.setItem('todos', JSON.stringify(v)), { deep: true })

function addTodo(payload) {
  if (!payload.text.trim()) return
  todos.value.push({ id: Date.now(), text: payload.text.trim(), done: false })
  text.value = ''
}
function toggleTodo(id) {
  const t = todos.value.find(t => t.id === id)
  if (t) t.done = !t.done
}
function removeTodo(id) {
  todos.value = todos.value.filter(t => t.id !== id)
}
</script>

<template>
  <div style="max-width:560px;margin:24px auto;padding:16px;border:1px solid #ddd;border-radius:12px;">
    <h2>ミニTODO（Vue標準だけ）</h2>
    <TodoForm v-model="text" @add="addTodo" />
    <p style="margin:8px 0;">未完了：{{ remaining }} 件</p>
    <ul style="list-style:none;padding:0;margin:0;">
      <li v-for="t in todos" :key="t.id" style="margin:6px 0;">
        <TodoItem :todo="t" @toggle="toggleTodo" @remove="removeTodo" />
      </li>
    </ul>
  </div>
</template>
