<template>
  <button class="album-btn" @click="handleClick" :style="customStyle">
    {{ props.title }}
    <slot></slot>
  </button>
</template>

<script setup>
import {computed} from "@vue/reactivity";
const emit = defineEmits(['click'])
const props = defineProps({
  title: {
    type: String,
    default: 'Button'
  },
  background: {
    type: String,
    default: 'white'
  },
  color: {
    type: String,
    default: 'black'
  },
  borderColor: {
    type: String,
    default: 'black'
  }
})

const handleClick = () => {
  emit('click')
}

const customStyle = computed( () => {
  return {
    background: props.background,
    color: props.color,
    border: `1px solid ${props.borderColor}`
  }
})

</script>

<style scoped>
.album-btn {
  padding: 2px 15px;
  font-weight: 600;
  font-size: 11px;
  cursor: pointer;
}
</style>