<script setup lang="ts">
import { ref } from 'vue'
import { useTodos } from '@/composables/useTodos'
import TodoForm from './TodoForm.vue'
import TodoItem from './TodoItem.vue'

const text = ref('')
const { todos, remaining, add, toggle, remove } = useTodos()

function onAdd(payload: { text: string }) {
  add(payload.text)
  text.value = ''
}
</script>

<template>
  <div style="max-width:560px;margin:24px auto;padding:16px;border:1px solid #ddd;border-radius:12px;">
    <h2>ミニTODO（Vue標準だけ）</h2>
    <TodoForm v-model="text" @add="onAdd" />
    <p style="margin:8px 0;">未完了：{{ remaining }} 件</p>
    <ul style="list-style:none;padding:0;margin:0;">
      <li v-for="t in todos" :key="t.id" style="margin:6px 0;">
        <TodoItem :todo="t" @toggle="toggle" @remove="remove" />
      </li>
    </ul>
  </div>
</template>
