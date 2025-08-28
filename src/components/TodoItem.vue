<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({ todo: { type: Object, required: true } })
const emit = defineEmits(['toggle', 'remove'])
</script>

<template>
  <div style="display:flex; align-items:center; gap:8px;">
    <input type="checkbox" :checked="todo.done" @change="emit('toggle', todo.id)" />
    <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">
      {{ todo.text }}
    </span>
    <button @click="emit('remove', todo.id)" style="margin-left:auto;">削除</button>
  </div>
</template>
