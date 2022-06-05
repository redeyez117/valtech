<template>
  <input @keypress.enter="addAlbum" v-model="albumTitle" placeholder="Enter title here" class="album-title"/>
  <p v-if="albumTitle.length > 1" class="small-text">(press enter to save the new album)</p>
</template>

<script setup>
import {ref} from "@vue/reactivity";
import BaseButton from "./BaseButton.vue";
import {useAlbumsStore} from "../stores/albums";
const {createAlbum , toggleModal} = useAlbumsStore()
const albumTitle = ref('')

const addAlbum = () => {
  createAlbum(albumTitle.value)
  albumTitle.value = ''
}

</script>

<style scoped>
.album-title {
  padding: 30px;
  width: 50%;
  border: unset;
  outline: unset;
  font-size:  20px;
}

.album-title:focus {
  outline: unset;
  border: unset;
  box-shadow: unset;
}

.album-title::placeholder {
  font-size: 18px;
  color: var(--vt-c-black);
  font-weight: 600;
}
</style>