<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({ modelValue: { type: String, default: '' } })
const emit = defineEmits(['update:modelValue', 'add'])
function submit() {
  emit('add', { text: props.modelValue })
  emit('update:modelValue', '')
}
</script>

<template>
  <form @submit.prevent="submit" style="display:flex; gap:8px; margin:12px 0;">
    <input
      :value="modelValue"
      @input="e => emit('update:modelValue', e.target.value)"
      placeholder="やることを入力"
      style="flex:1; padding:8px;"
    />
    <button type="submit" style="padding:8px 12px;">追加</button>
  </form>
</template>
