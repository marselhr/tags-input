<template>
  <input
    class="h-9 w-4/6 rounded-md p-2 mx-auto mb-3 text-slate-600 outline-none border-none focus:outline-primary shadow-retro focus:shadow-none"
    type="text"
    name=""
    id=""
    placeholder="+ Task Here and Hit Enter to Save"
    @keydown.enter="addNewTodo"
  />
</template>

<script setup>
import { reactive } from 'vue';

const newTodo = reactive({
  title: '',
  completed: false,
});

const emit = defineEmits(['added']);

const addNewTodo = (event) => {
  if (event.target.value.trim()) {
    newTodo.title = event.target.value;
    event.target.value = '';
    emit('added', newTodo);
  }
};
</script>
