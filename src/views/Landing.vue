<template>
  <div class="min-h-screen flex flex-col bg-dark text-light justify-between">
    <Header />
    <section class="flex flex-col space-y-8 justify-center items-center">
      <h1 class="text-6xl font-bold text-center pb-12">
        Welcome to <span class="text-primary">psyquestions!</span>
      </h1>
      <p class="text-light font-bold">Leave the username field blank to play as anonymous</p>
      <!--Add prevent default-->
      <form class="w-3/4 max-w-md" @submit.prevent="onSubmit">
        <div class="flex items-center justify-center">
          <input
            id="username"
            v-model="username"
            name="username"
            type="text"
            placeholder="Username (Optional)"
            class="
              w-full
              px-3
              py-3
              rounded-md
              bg-dark-input
              focus:bg-transparent
              focus:border
              focus:outline-none
              focus:border-primary
              focus:ring
              focus:ring-primary
            "
          />
        </div>
        <div class="mt-14 mb-6 flex justify-center items-center">
          <button
            class="
              w-2/5
              font-bold
              text-xl
              flex
              justify-center
              py-3
              px-2
              rounded-md
              bg-gradient-to-l
              from-primary-dark
              to-primary-light
              transition
              duration-500
              ease-in-out
              transform
              hover:-translate-y-0.5 hover:scale-105
            "
          >
            START
          </button>
        </div>
      </form>
    </section>
    <div class="flex items-center justify-center pb-12">
      <GithubLink />
    </div>
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  import Header from '@/components/Header.vue'
  import GithubLink from '@/components/GithubLink.vue'

  const username = ref('')

  const store = useStore()

  const router = useRouter()

  async function onSubmit() {
    if (!username.value) {
      username.value = 'Anonymous'
    }
    store.commit('setUsername', username.value)
    router.push({ name: 'Questions' })
  }

  onMounted(() => {
    store.commit('setUsername', null)
    store.commit('setQuestions', [])
    store.commit('setCurrentQuestionId', 0)
    store.commit('setResults', [])
  })
</script>
