<template>
  <div class="min-h-screen flex flex-col bg-dark text-light justify-between">
    <Header />
    <section class="flex flex-col space-y-8 justify-center items-center">
      <h1 class="text-6xl font-bold text-center pb-12">
        Enter as an <span class="text-primary">admin</span>
      </h1>
      <p class="text-light font-bold">
        The power to manage questions is one step away
      </p>
      <!--Add prevent default-->
      <form class="w-3/4 max-w-md" @submit.prevent="onSubmit">
        <div class="flex items-center justify-center mb-6">
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            placeholder="Email"
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
        </div>
        <div class="flex items-center justify-center relative">
          <input
            id="password"
            v-model="password"
            name="password"
            :type="isShowPassword ? 'text' : 'password'"
            placeholder="Password"
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
          <div
            class="
              absolute
              inset-y-0
              right-0
              pr-3
              flex
              items-center
              text-light-input
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              :class="{ invisible: isShowPassword }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#A1A1AA"
              @click="isShowPassword = !isShowPassword"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 absolute"
              :class="{ invisible: !isShowPassword }"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#A1A1AA"
              @click="isShowPassword = !isShowPassword"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          </div>
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
            @click="loginAdmin"
          >
            LOGIN
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
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { useRouter } from 'vue-router'
  import { auth } from '@/api/firebase'

  import Header from '@/components/Header.vue'
  import GithubLink from '@/components/GithubLink.vue'

  const store = useStore()
  const router = useRouter()

  const email = ref('')
  const password = ref('')
  const isShowPassword = ref(false)

  // Add login errors & validation
  async function loginAdmin() {
    // Fix need to double click to login
    await store.dispatch('loginAdmin', {
      email: email.value,
      password: password.value,
    })
    if (auth.currentUser) {
      router.push({ name: 'Dashboard' })
    }
  }
</script>
