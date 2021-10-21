<template>
  <div class="min-h-screen flex flex-col bg-dark text-light justify-between">
    <Header />
    <section class="flex flex-col space-y-8 justify-center items-center">
      <h1 class="font-bold">Add question</h1>
      <div class="w-2/4 flex flex-col space-y-4">
        <input
          id="text"
          v-model="questionText"
          name="text"
          type="text"
          placeholder="Text"
          required
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
        <input
          id="green"
          v-model="questionGreen"
          name="green"
          type="text"
          placeholder="Green"
          required
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
        <input
          id="red"
          v-model="questionRed"
          name="red"
          type="text"
          placeholder="Red"
          required
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
        <input
          id="tooltip"
          v-model="questionTooltip"
          name="tooltip"
          type="text"
          placeholder="Tooltip"
          required
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
        <input
          id="bias"
          v-model="questionBias"
          name="bias"
          type="text"
          placeholder="Bias"
          required
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
        <input
          id="number"
          v-model="questionNumber"
          name="number"
          type="text"
          placeholder="Number"
          required
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
        <button
          class="
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
          @click="addQuestion"
        >
          ADD
        </button>
      </div>
      <button @click="logOut">Logout</button>
    </section>
    <div class="flex items-center justify-center pb-12">
      <GithubLink />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'

  import Header from '@/components/Header.vue'
  import GithubLink from '@/components/GithubLink.vue'

  const store = useStore()
  const router = useRouter()

  const questionText = ref('')
  const questionGreen = ref('')
  const questionRed = ref('')
  const questionTooltip = ref('')
  const questionBias = ref('')
  const questionNumber = ref(null)

  async function addQuestion() {
    await store.dispatch('addQuestion', {
      text: questionText.value,
      green: questionGreen.value,
      red: questionRed.value,
      tooltip: questionTooltip.value,
      bias: questionBias.value,
      number: questionNumber.value,
    })
    questionText.value = ''
    questionGreen.value = ''
    questionRed.value = ''
    questionTooltip.value = ''
    questionBias.value = ''
    const nextNumber = parseInt(questionNumber.value) + 1
    questionNumber.value = nextNumber.toString()
  }

  async function logOut() {
    await store.dispatch('logoutAdmin')
    router.push({ name: 'Landing' })
  }
</script>
