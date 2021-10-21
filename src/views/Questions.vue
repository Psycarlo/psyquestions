<template>
  <div
    class="
      min-h-screen
      flex flex-col
      bg-dark
      text-light
      justify-between
      overflow-x-hidden
    "
  >
    <Header />
    <div
      v-show="!isLoading"
      class="flex flex-col justify-center items-center space-y-28"
    >
      <p class="text-light font-bold text-3xl">
        Question <span class="text-primary">{{ currentQuestionId }}</span> of
        <span class="text-primary">{{ maxQuestions }}</span>
      </p>
      <h1
        class="
          flex flex-col
          items-center
          space-y-6
          text-6xl
          font-bold
          max-w-6xl
          px-12
          text-center
        "
      >
        <span class="max-w-4xl leading-relaxed">{{ currentQuestionText }}</span>
        <div class="text-primary has-tooltip">
          <span
            class="
              tooltip
              bg-dark-input
              rounded-lg
              px-5
              py-3
              text-base text-light
            "
            >{{ currentTooltip }}</span
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mb-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </h1>
      <div class="flex space-x-12">
        <button
          class="
            font-bold
            text-xl
            flex
            justify-center
            py-3
            px-16
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
          @click="nextQuestion('green')"
        >
          {{ currentQuestionGreen }}
        </button>
        <button
          class="
            font-bold
            text-xl
            flex
            justify-center
            py-3
            px-16
            rounded-md
            bg-gradient-to-l
            from-warning-dark
            to-warning-light
            transition
            duration-500
            ease-in-out
            transform
            hover:-translate-y-0.5 hover:scale-105
          "
          @click="nextQuestion('red')"
        >
          {{ currentQuestionRed }}
        </button>
      </div>
    </div>
    <div v-show="isLoading" class="flex flex-col justify-center items-center">
      <svg
        class="animate-spin -ml-1 mr-3 h-12 w-12 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
    <div class="flex justify-center">
      <img src="../assets/images/memoji-hun.png" alt="Logo" class="w-48" />
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  import Header from '@/components/Header.vue'

  const store = useStore()
  const router = useRouter()

  const isLoading = ref(true)

  const maxQuestions = computed(() => store.getters.maxQuestionsCount)
  const questions = computed(() => store.state.questions)

  const currentQuestionId = computed(() => store.state.currentQuestionId)
  const currentQuestionText = ref('')
  const currentQuestionGreen = ref('')
  const currentQuestionRed = ref('')
  const currentTooltip = ref('')

  // Refactor
  function firstQuestion() {
    store.commit('setCurrentQuestionId', 1)
    displayQuestion()
  }

  function nextQuestion(answer) {
    store.commit('setResult', { id: currentQuestionId.value, choice: answer })
    store.commit('setCurrentQuestionId', currentQuestionId.value + 1)
    if (currentQuestionId.value > maxQuestions.value) {
      store.dispatch('postResults', { ...store.state.results })
      router.push({ name: 'Results' })
    } else {
      displayQuestion()
    }
  }

  function displayQuestion() {
    const currentQuestionIndex = currentQuestionId.value - 1
    currentQuestionText.value =
      questions.value[currentQuestionIndex].questionInfo.text
    currentQuestionGreen.value =
      questions.value[currentQuestionIndex].questionInfo.green
    currentQuestionRed.value =
      questions.value[currentQuestionIndex].questionInfo.red
    currentTooltip.value =
      questions.value[currentQuestionIndex].questionInfo.tooltip
  }

  onMounted(async () => {
    isLoading.value = true
    await store.dispatch('fetchQuestions')
    store.commit('setResultsPosted', false)
    isLoading.value = false
    if (maxQuestions.value > 0) {
      firstQuestion()
    } else {
      router.push({ name: 'Landing' })
    }
  })
</script>
