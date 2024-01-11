<template>
  <TodoInputVue />
  <Todos :todos="uncompletedTodo" />

  <button
    v-show="showToggleCompletedBtn"
    @click="($event) => (showCompletedTodo = !showCompletedTodo)"
    class="my-2 px-4 py-1 bg-slate-500 rounded shadow-retro text-slate-100 cursor-pointer group hover:bg-slate-600 focus:ring focus:ring-slate-500"
  >
    <span v-if="!showCompletedTodo">Show Completed</span>
    <span v-else>Hide Completed</span>
  </button>
  <Todos :todos="completedTodo" :show="completedTodo && showCompletedTodo" />
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

const showToggleCompletedBtn = computed(
  () => uncompletedTodo.value.length > 0 && completedTodo.value.length > 0
);

const completedTodoIsVisible = computed(
  () => uncompletedTodo.value.length === 0 || completedTodo.value.length > 0
);

const showCompletedTodo = ref(false);
</script>
