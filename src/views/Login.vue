<template>
  <div class="login-container">
    <h1 id="login-header">Join our stock community!</h1>
    <p>Download free photos and videos powered by the best photographers.</p>
          <BaseInput
              id="email"
              type="text"
              v-model="email"
              label="USERNAME"
              placeholder="Enter username here ..."
          />
          <BaseInput
              id="password"
              type="password"
              v-model="password"
              label="PASSWORD"
              placeholder="Enter password here ..."
          />
        <p class="error-message" v-if="validationError">Username or password is incorrect!</p>
        <p class="error-message" v-if="emptyFields">Please fill out the fields</p>
        <button @click="login" class="login-btn">Log In</button>
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
const {validationError,emptyFields} = storeToRefs(authLogin)

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