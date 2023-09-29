import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { users, type User } from '../data/user'
import { useRouter } from 'vue-router'

interface authState {
  isLoading: boolean
  data: Partial<User>
  error: string
}

interface LoginForm {
  username: string
  password: string
}

export const authStore = defineStore('auth-store', () => {
  const { push } = useRouter()
  const authState = reactive<authState>({
    isLoading: false,
    data: {},
    error: ''
  })

  function login(form: LoginForm) {
    authState.isLoading = true

    const user = users.find(
      (user) => user.username === form.username && user.password === form.password
    )

    if (!user) {
      authState.error = 'Invalid Information!'
      return
    }

    authState.data = user
    authState.isLoading = false

    push({ name: 'home' })
  }

  function getAuth(): void {
    authState.isLoading = true

    const token = localStorage.getItem('user')

    if (!token) {
      authState.error = 'not found token'
      return
    }

    const payload = JSON.parse(token)
    const user = users.find((item) => item.id === payload.sub)
    if (!user) {
      authState.error = 'not found user'
      return
    }

    authState.data = user
    authState.isLoading = false
  }

  return { authState, login, getAuth }
})
