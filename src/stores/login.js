import {defineStore} from 'pinia'
import router from "../router";

export const useLoginStore = defineStore({
    id: 'login',
    state: () => ({
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
        validationError: false,
        authenticated: localStorage.getItem('authenticated')
    }),
    actions: {
        async login(email, password) {
           if (this.email === email && this.password === password) {
                localStorage.setItem('authenticated', 'true')
                await router.push('/')
            } else {
                return this.validationError = true
            }
        },

        async logout() {
            localStorage.removeItem('authenticated')
            await router.push('/login')
        }
    }
})
