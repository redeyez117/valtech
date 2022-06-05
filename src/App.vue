<script setup>
import CustomHeader from './components/CustomHeader.vue'
import Login from "./views/Login.vue"
</script>

<template>
  <div class="container">
    <CustomHeader/>
    <RouterView/>
  </div>
</template>

<style>
@import './assets/base.css';
</style>
