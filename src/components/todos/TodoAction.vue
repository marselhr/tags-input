<template>
    <div class="flex gap-2 transition-all ease-in-out">
        <!-- <p class="transition delay-500 text-slate-900">{{ todo.updated_at }}</p> -->
        <div class="gap-2 hidden group-hover:flex transition-all duration-150 ease-in-out float-end">
            <button
                class="flex items-center justify-center text-red-600 outline outline-1 rounded-full w-6 h-6 p-3 hover:bg-red-500 hover:text-slate-100 hover:shadow-retro hover:outline-slate-100 transition-all duration-300 ease-in-out">
                <font-awesome-icon :icon="['fas', 'trash']" />
            </button>
            <button
                class="flex justify-center items-center text-green-500 outline outline-1 rounded-full w-6 h-6 p-3 hover:bg-green-600 hover:text-slate-50 hover:shadow-retro hover:outline-slate-50 transition-all duration-300 ease-in-out"
                @click="emit('edit')">
                <font-awesome-icon :icon="['fas', 'edit']" />
            </button>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['edit']);
</script>
