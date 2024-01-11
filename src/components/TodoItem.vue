<template>
  <div
    class="w-4/6 shadow-retro rounded-md border p-1 mb-2 min-h-12 border-slate-700 flex flex-wrap items-center justify-between group"
    v-for="todo in todos"
    :key="todo.index"
  >
    <div class="flex items-center">
      <div
        class="h-4 w-4 border-1 rounded-md border border-green-800 me-2"
      ></div>
      <p class="text-slate-700 break-words max-w-80">{{ todo.title }}</p>
    </div>
    <div class="flex gap-2 transition-all ease-in-out">
      <p class="transition delay-500 text-slate-700">{{ todo.updated_at }}</p>
      <div
        class="gap-2 hidden group-hover:flex transition-all duration-150 ease-in-out float-end"
      >
        <button
          class="flex items-center justify-center text-red-600 outline outline-1 rounded-full w-6 h-6 p-3 hover:bg-red-500 hover:text-slate-100 hover:shadow-retro hover:outline-slate-100 transition-all duration-300 ease-in-out"
        >
          <font-awesome-icon :icon="['fas', 'trash']" />
        </button>
        <button
          class="flex justify-center items-center text-green-500 outline outline-1 rounded-full w-6 h-6 p-3 hover:bg-green-600 hover:text-slate-50 hover:shadow-retro hover:outline-slate-50 transition-all duration-300 ease-in-out"
        >
          <font-awesome-icon :icon="['fas', 'edit']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { allTodos } from '../http/todo-api';
const todos = ref([]);
onMounted(async () => {
  const { data } = await allTodos();

  todos.value = data.todos;
});
</script>
