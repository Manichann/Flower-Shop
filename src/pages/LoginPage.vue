<script setup lang="ts">
import { authStore } from '@/stores/auth'
import { onMounted, reactive } from 'vue'

const { authState, login } = authStore()

onMounted(() => {
  if (localStorage.getItem('user')) {
    localStorage.removeItem('user')
  }
})

interface LoginForm {
  username: string
  password: string
}

const loginForm = reactive<LoginForm>({
  username: '',
  password: ''
})
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="card shadow-xl">
        <div class="alert alert-warning" v-if="authState.error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>Warning: {{authState.error}}</span>
      </div>
      <form class="card-body items-center gap-y-8" @submit.prevent="login(loginForm)">
        <h2 class="card-title text-3xl font-bold py-4">Login</h2>
        <input
          v-model="loginForm.username"
          type="text"
          placeholder="username"
          class="input input-bordered w-full max-w-xs"
        />
        <input
          v-model="loginForm.password"
          type="password"
          placeholder="password"
          class="input input-bordered w-full max-w-xs"
        />
        <div class="card-actions">
          <button
            type="submit"
            class="btn rounded-3xl bg-blue-500 text-white px-8"
            :disabled="authState.isLoading && !authState.data"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
