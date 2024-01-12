<template>
  <div @dblclick="isEdit = true"
    class="w-4/6 shadow-retro rounded-md border p-1 mb-2 min-h-12 border-slate-700 flex flex-wrap items-center justify-between group transition-all duration-300 ease-in-out"
    :class="completedClass">
    <div class="flex items-center w-full">
      <input type="checkbox" class="h-4 w-4 border border-green-700 rounded me-2" :checked="todo.completed" />

      <input v-if="isEdit" @keyup.esc="isEdit = false" v-focus type="text"
        class="flex-grow bg-transparent rounded focus:outline-none" />
      <span v-else class="text-slate-700 break-words max-w-4/6">
        {{ todo.title }}
      </span>
    </div>
    <TodoAction @edit="isEdit = !isEdit" v-show="!isEdit" />
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import TodoAction from './TodoAction.vue';
const props = defineProps({
  todo: Object,
});

const isEdit = ref(false);

const completedClass = computed(() =>
  props.todo.completed
    ? 'line-through text-slate-400 bg-gray-200'
    : 'bg-purple-300 text-slate-600 hover:bg-gray-200'
);



const vFocus = {
  mounted: (el) => el.focus()
}
</script>
