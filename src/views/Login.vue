<template>
  <div class="login-container">
    <h1 id="login-header">Join our stock community!</h1>
    <p>Download free photos and videos powered by the best photographers.</p>
      <form>
        <div class="form-group">
          <label for="email" class="base-input-label">
            USERNAME
          </label>
          <input
              required
              id="email"
              type="text"
              v-model="email"
              class="base-input"
              placeholder="Enter username here ..."
          />
        </div>
        <div class="form-group">
          <label for="password" class="base-input-label">
            PASSWORD
          </label>
          <input
              required
              id="password"
              type="secret"
              v-model="password"
              class="base-input"
              placeholder="Enter password here ..."
          />
        </div>
        <p class="error-message" v-if="validationError">Username or password is incorrect!</p>
        <button type="submit" @click="login" class="login-btn">Log In</button>
      </form>
  </div>
<CustomFooter/>
</template>
<script setup>
import CustomFooter from "../components/CustomFooter.vue";
import BaseInput from "../components/BaseInput.vue";
import {useLoginStore} from "../stores/login";
import {ref} from "@vue/reactivity";
import {storeToRefs} from 'pinia'
const authLogin = useLoginStore()
localStorage.setItem('email', 'admin@test.com')
localStorage.setItem('password','secret')

const email = ref('')
const password = ref('')
const {validationError} = storeToRefs(authLogin)

function login() {
  return authLogin.login(email.value,password.value)
}

</script>

<style scoped>
.login-container {
  width: 1300px;
  margin: auto;
  text-align: center;
}

#login-header {
  font-weight: 900;
  line-height: 1;
  margin-top: 40px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
}

.base-input {
  border: 2px solid var(--vt-c-black-soft);
  padding: 8px;
  width: 330px;
}

.base-input-label {
  color: var(--vt-c-black);
  font-weight: 600;
  line-height: 1.5;
}

.login-btn {
  padding: 4px;
  width: 140px;
  background: var(--vt-c-black-soft);
  color: white;
  font-size: 14px;
  font-weight: 800;
  margin-top: 40px;
}

.error-message {
  color: red;
}
</style>