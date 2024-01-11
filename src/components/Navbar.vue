<template>
  <div class="bg-slate-100 h-16 w-full flex items-center">
    <div class="px-20 flex gap-2 items-center justify-between w-full">
      <div>
        <h3 class="text-xl font-medium">
          <a href="">Todo<span class="text-primary">App</span></a>
        </h3>
      </div>
      <nav class="flex items-center">
        <ul class="flex gap-2">
          <li class="group nav-item">
            <a href="" class="nav-link"> Home </a>
          </li>
          <li class="group nav-item">
            <a href="" class="nav-link"> Tasks </a>
          </li>
          <li class="group nav-item">
            <a href="" class="nav-link"> Summary </a>
          </li>
        </ul>
      </nav>

      <nav>
        <ul class="flex gap-2">
          <li class="group">
            <button type="button" class="btn-primary">Register</button>
          </li>
          <li class="group">
            <button type="button" class="btn-outline-primary">Login</button>
          </li>
          <li class="group">
            <button type="button" class="btn-outline-primary">Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped></style>
