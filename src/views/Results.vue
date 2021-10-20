<template>
  <div class="min-h-screen flex flex-col bg-dark text-light justify-between">
    <Header />
    <div class="flex flex-col justify-center items-center space-y-28">
      <p class="text-light font-bold text-3xl">
        Your
        <span class="text-primary">results</span>
      </p>
      <div class="pb-6 flex">
        <h1 class="text-6xl font-bold max-w-6xl px-12 text-center">
          {{ calculateResult1() }}
        </h1>
        <!-- <h1 class="text-6xl font-bold max-w-6xl px-12 text-center">
          {{ calculateResult1() }}
        </h1> -->
      </div>
      <div class="flex justify-center items-center">
        <button
          class="
            font-bold
            text-xl
            flex
            justify-center
            py-3
            px-12
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
          @click="goHome"
        >
          HOME
        </button>
      </div>
    </div>
    <div class="flex justify-center pb-12">
      <GithubLink />
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  import Header from '@/components/Header.vue'
  import GithubLink from '@/components/GithubLink.vue'

  const store = useStore()
  const router = useRouter()

  const questions = computed(() => store.state.questions)
  const results = computed(() => store.state.results)
  const maxQuestionsCount = computed(() => store.getters.maxQuestionsCount)

  function calculateResult1() {
    let count = 0
    questions.value.forEach((entry, idx) => {
      if (entry.questionInfo.bias === results.value[idx].choice) {
        count += 1
      }
    })
    const res = (count / maxQuestionsCount.value) * 100
    const rounded = Math.round(res * 10) / 10
    if (!rounded) return 'Error'
    return `${rounded}% of your answers were the same as psycarlo's`
  }

  function goHome() {
    router.push({ name: 'Landing' })
  }
</script>
