<template>
  <div class="min-h-screen flex flex-col bg-dark text-light justify-between">
    <Header />
    <section class="flex flex-col space-y-8 justify-center items-center">
      <h1 class="text-8xl font-bold text-center">
        4<span class="text-primary">0</span>4
      </h1>
      <p class="pb-16">Page not found!</p>
      <router-link
        :to="{ name: 'Landing' }"
        class="text-light font-bold hover:text-primary"
        >Back Home</router-link
      >
      <!--Add prevent default-->
    </section>
    <div class="flex items-center justify-center pb-12">
      <GithubLink />
    </div>
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import GithubLink from '@/components/GithubLink.vue'
</script>
