<template>
  <Todo v-for="todo in todos" :todo="todo" :key="todo.id" />
</template>

<script setup>
import Todo from './Todo.vue';

defineProps({
  todos: Array,
});
</script>
