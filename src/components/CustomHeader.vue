<script setup>
import {useLoginStore} from "../stores/login";
import {storeToRefs} from "pinia";
import BaseButton from "./BaseButton.vue";
import {useRoute} from "vue-router";

const {logout} = useLoginStore()

const {authenticated} = storeToRefs(useLoginStore())
const route = useRoute()
</script>

<template>
  <div class="header-container">
    <div :style="route.name === 'login' ? {justifyContent:'center'} : ''" class="row">
      <h5 class="logout" @click="logout" v-if="route.name !== 'login'">Logout</h5>
        <img class="header-image" src="/SiteLogo.svg"/>
      <BaseButton background="black" border-color="white" color="white" title="My Album" v-if="route.name !== 'login'"/>
    </div>
  </div>
</template>

<style scoped>
@import '@/assets/base.css';
.header-container {
  background: var(--vt-c-black);
  height: 60px;
  width: 100%;
}

.row {
  width: 970px;
  justify-content: space-between;
  display: flex;
  align-items: center;
  margin: auto;
  height: 100%;
}

.header-image {
  width: 127px;
  height: 25px;
  margin-left: 50px;
}

.logout {
  color: white;
  cursor: pointer;
}

</style>
