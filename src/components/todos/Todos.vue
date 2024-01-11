<template>
  <div v-if="todos.length && show" class="items-center flex flex-col w-full">
    <Todo v-for="todo in todos" :todo="todo" :key="todo.id" />
  </div>
</template>

<script setup>
import Todo from './Todo.vue';

defineProps({
  todos: Array,
  show: {
    type: Boolean,
    default: true,
  },
});
</script>
