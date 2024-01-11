<template>
  <TodoInputVue />
  <Todos :todos="uncompletedTodo" />
  <Todos :todos="completedTodo" />
</template>
<script setup>
import TodoInputVue from '../components/TodoInput.vue';
import Todos from '../components/todos/Todos.vue';
import { computed, onMounted, ref } from 'vue';
import { allTodos } from '../http/todo-api';
const todos = ref([]);
onMounted(async () => {
  const { data } = await allTodos();

  todos.value = data.todos;
});

const uncompletedTodo = computed(() =>
  todos.value.filter((todo) => !todo.completed)
);
const completedTodo = computed(() =>
  todos.value.filter((todo) => todo.completed)
);
</script>
