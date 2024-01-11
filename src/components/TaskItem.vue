<template>
  <div
    class="w-4/6 shadow-retro rounded-md border p-1 min-h-12 border-slate-700 flex flex-wrap items-center justify-between group"
  >
    <div class="flex items-center">
      <div
        class="h-4 w-4 border-1 rounded-md border border-green-800 me-2"
      ></div>
      <p class="text-slate-700 break-words max-w-80">Belajar VueJs</p>
    </div>
    <div
      class="gap-2 hidden group-hover:flex transition-all duration-150 ease-in-out float-end"
    >
      <button
        class="text-red-600 outline outline-1 rounded-full w-8 h-8 hover:bg-red-500 hover:text-slate-100 hover:shadow-retro hover:outline-slate-100 transition-all duration-300 ease-in-out"
      >
        <font-awesome-icon :icon="['fas', 'trash']" />
      </button>
      <button
        class="text-purple-500 outline outline-1 rounded-full w-8 h-8 hover:bg-purple-400 hover:text-slate-50 hover:shadow-retro hover:outline-slate-50 transition-all duration-300 ease-in-out"
      >
        <font-awesome-icon :icon="['fas', 'edit']" />
      </button>
    </div>
  </div>
</template>
