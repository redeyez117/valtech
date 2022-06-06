<script setup>
import {useLoginStore} from "../stores/login";
import {storeToRefs} from "pinia";
import BaseButton from "./BaseButton.vue";
import {useRoute} from "vue-router";
import {useAlbumsStore} from "../stores/albums";

const {logout} = useLoginStore()
const {albums} = storeToRefs(useAlbumsStore())
const route = useRoute()
</script>

<template>
  <div class="header-container">
    <div :style="route.name === 'login' ? {justifyContent:'center'} : ''" class="row">
      <h5 class="logout" @click="logout" v-if="route.name !== 'login'">Logout</h5>
       <img class="header-image" src="/SiteLogo.svg"/>
      <BaseButton class="album-btn" background="black" border-color="white" color="white" title="My Album" v-if="route.name !== 'login'"/>
      <div v-if="Object.keys(albums).length" class="dropdown-menu">
        <div class="dropdown-list">
          <ul class="list">
            <li v-for="album in Object.keys(albums)">
              <RouterLink class="album-links" :to="`/album/${album}`">{{album}}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
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
  position: relative;
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

.dropdown-menu {
  position: absolute;
  top:68%;
  right: 0%;
  border: 1px solid var(--vt-c-black);
  background: #f2f2f2;
  box-shadow: 0px 5px 20px #00000029;
  display: none;
  z-index: 1000;
}

.album-btn:hover + .dropdown-menu {
  display: block;
}

.dropdown-menu:hover {
  display: block;
}

.dropdown-list ul {
  padding-inline: 35px;
  list-style: none;
}

.dropdown-list ul li {
  margin-block: 20px;
}

.album-links {
  text-decoration: none;
  color: var(--vt-c-black);
}

.dropdown-list ul li .album-links:hover {
  background: var(--vt-c-black);
  cursor: pointer;
  color: var(--vt-c-white);
  font-weight: 600;
}

</style>
