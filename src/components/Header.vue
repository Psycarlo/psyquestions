<template>
  <header class="mx-24 pt-12">
    <nav class="flex flex-row justify-center sm:justify-between">
      <a class="flex cursor-pointer" @click="headerClick">
        <img src="../assets/images/memoji-hun.png" alt="Logo" class="w-16" />
        <div class="flex items-center pl-3">
          <p class="text-2xl font-bold">
            Psy<span class="text-primary">Questions</span>
          </p>
        </div>
      </a>
      <div
        class="flex justify-center items-center font-bold invisible sm:visible"
      >
        <p>Season 1</p>
      </div>
    </nav>
  </header>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()

  function headerClick() {
    router.push({ name: 'Landing' })
  }
</script>
