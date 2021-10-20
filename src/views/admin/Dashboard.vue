<template>
  <div class="min-h-screen flex flex-col bg-dark text-light justify-between">
    <Header />
    <section class="flex flex-col space-y-8 justify-center items-center">
      <h1>Hi</h1>
    </section>
    <div class="flex items-center justify-center pb-12">
      <GithubLink />
    </div>
  </div>
</template>

<script setup>
  //import { ref } from 'vue'
  //import { useStore } from 'vuex'
  //import { useRouter } from 'vue-router'

  import Header from '@/components/Header.vue'
  import GithubLink from '@/components/GithubLink.vue'

  //const store = useStore()
  //const router = useRouter()
</script>
